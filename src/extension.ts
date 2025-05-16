import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import { MessageId, Terminals, VSCodeMessage } from "./MessageId";
import { exec } from "child_process";

let anvilTerminal: vscode.Terminal | undefined;
let commandTerminal: vscode.Terminal | undefined;
let panel: vscode.WebviewPanel;

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("slotmatrix.panelView", () => {
      panel = vscode.window.createWebviewPanel(
        "slotmatrix",
        "SlotMatrix",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
          localResourceRoots: [
            vscode.Uri.file(path.join(context.extensionPath, "media")),
          ],
        }
      );

      // getWebViewContent
      const htmlPath = path.join(context.extensionPath, "media", "index.html");
      let html = fs.readFileSync(htmlPath, "utf8");
      // Replace paths with Webview-compatible URIs
      html = html.replace(/(src|href)="(.+?)"/g, (_, attr, file) => {
        const filePath = vscode.Uri.file(
          path.join(context.extensionPath, "media", file)
        );
        const webviewUri = panel.webview.asWebviewUri(filePath);
        return `${attr}="${webviewUri}"`;
      });

      vscode.commands.executeCommand("setContext", "slotmatrixPanelOpen", true);

      panel.webview.html = html;
      panel.webview.onDidReceiveMessage(
        (message) => {
          switch (message.id) {
            // ---- LOGS ----
            // developer logs
            case MessageId.log:
              console.log("log : ", message.data);
              break;
            // user message logs
            // structure -> {id, data{id, data}}
            case MessageId.showMessage:
              if (message.data.id === VSCodeMessage.error) {
                vscode.window.showErrorMessage(message.data.data);
              } else if (message.data.id === VSCodeMessage.info) {
                vscode.window.showInformationMessage(message.data.data);
              } else if (message.data.id === VSCodeMessage.warning) {
                vscode.window.showWarningMessage(message.data.data);
              }
              break;
            // ---- TERMINAL ----
            case MessageId.runCommand:
              runCommand(message.data);
              break;
            case MessageId.runBuildCommand:
              runBuildCommand();
              break;
            case MessageId.createTerminal:
              if (
                message.data === Terminals.anvilTerminal &&
                anvilTerminal === undefined
              ) {
                anvilTerminal = vscode.window.createTerminal({
                  name: "SlotMatrix Anvil Terminal",
                });
                anvilTerminal.sendText("anvil");
              } else if (
                message.data === Terminals.commandTerminal &&
                commandTerminal === undefined
              ) {
                commandTerminal = vscode.window.createTerminal({
                  name: "SlotMatrix Command Terminal",
                });
              }
              break;
            case MessageId.showTerminal:
              if (message.data === Terminals.anvilTerminal) {
                anvilTerminal?.show();
              } else if (message.data === Terminals.commandTerminal) {
                commandTerminal?.show();
              }
              break;
            case MessageId.hideTerminal:
              if (message.data === Terminals.anvilTerminal) {
                anvilTerminal?.hide();
              } else if (message.data === Terminals.commandTerminal) {
                commandTerminal?.hide();
              }
              break;
            case MessageId.disposeTerminal:
              if (message.data === Terminals.anvilTerminal) {
                anvilTerminal?.dispose();
              } else if (message.data === Terminals.commandTerminal) {
                commandTerminal?.dispose();
              }
              break;
            case MessageId.isTerminalRunning:
              if (message.data === Terminals.anvilTerminal) {
                panel.webview.postMessage({
                  id: MessageId.isTerminalRunning,
                  data: anvilTerminal?.exitStatus === undefined,
                });
              } else if (message.data === Terminals.commandTerminal) {
                panel.webview.postMessage({
                  id: MessageId.isTerminalRunning,
                  data: commandTerminal?.exitStatus === undefined,
                });
              }
              break;
            // ---- FILES ----
            case MessageId.getSolFiles:
              const data = getAllDeployableContracts();

              panel.webview.postMessage({
                id: MessageId.getSolFiles,
                data: data,
              });
              break;
            case MessageId.getAbi:
              try {
                const jsonContent = fs.readFileSync(message.data, "utf8");
                const parsed = JSON.parse(jsonContent);

                panel.webview.postMessage({
                  id: MessageId.getAbi,
                  data: parsed,
                });
              } catch (err) {
                vscode.window.showErrorMessage("Compile the contract first");
              }
              break;

            case MessageId.getCurrentWorkingDirectory:
              const workspaceFolders = vscode.workspace.workspaceFolders;
              if (!workspaceFolders || workspaceFolders.length === 0) {
                vscode.window.showErrorMessage("No workspace folder open");
                return;
              }
              const currentWorkingDirectory = workspaceFolders[0].uri.fsPath;
              panel.webview.postMessage({
                id: MessageId.getCurrentWorkingDirectory,
                data: currentWorkingDirectory,
              });
              break;
          }
        },
        undefined,
        context.subscriptions
      );
      panel.onDidDispose(() => {
        vscode.commands.executeCommand(
          "setContext",
          "slotmatrixPanelOpen",
          false
        );
        anvilTerminal?.dispose();
        commandTerminal?.dispose();
      });
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("slotmatrix.customSave", () => {
      runBuildCommand();
    })
  );
}

function runBuildCommand() {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders || workspaceFolders.length === 0) {
    vscode.window.showErrorMessage("No workspace folder open");
    return;
  }
  exec("forge clean", { cwd: workspaceFolders[0].uri.fsPath });
  exec(
    "forge build --extra-output storageLayout",
    { cwd: workspaceFolders[0].uri.fsPath },
    (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Contract Build Failed : ${error}`);
        commandTerminal = vscode.window.createTerminal({
          name: "SlotMatrix Command Terminal",
        });
        commandTerminal.show();
        commandTerminal.sendText("forge build --extra-output storageLayout");
        panel.webview.postMessage({
          id: MessageId.buildCommandFailed,
        });
        return;
      }

      vscode.window.showInformationMessage(
        `Contract build successful : ${stdout}`
      );
      panel.webview.postMessage({
        id: MessageId.buildCommandRunSuccess,
      });
      return;
    }
  );
}

function runCommand(command: string) {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders || workspaceFolders.length === 0) {
    vscode.window.showErrorMessage("No workspace folder open");
    return;
  }
  exec(
    command,
    { cwd: workspaceFolders[0].uri.fsPath },
    (error, stdout, stderr) => {
      if (error) {
        return;
      }
    }
  );
}

type ContractInfo = {
  contractName: string;
  contractFilePath: string;
  basename: string;
};

const visitedFiles = new Set<string>();

// Step 1: Parse remappings.txt
function getRemappings(projectRoot: string): Record<string, string> {
  const remappingsPath = path.join(projectRoot, "remappings.txt");
  const remappings: Record<string, string> = {};

  if (!fs.existsSync(remappingsPath)) return remappings;

  const lines = fs
    .readFileSync(remappingsPath, "utf8")
    .split("\n")
    .filter(Boolean);
  for (const line of lines) {
    const [alias, target] = line.split("=");
    if (alias && target) {
      remappings[alias.replace(/\/+$/, "")] = target;
    }
  }

  return remappings;
}

// Step 2: Resolve import paths using remappings
function resolveImportPath(
  importPath: string,
  currentDir: string,
  projectRoot: string,
  remappings: Record<string, string>
): string | null {
  if (importPath.startsWith("./") || importPath.startsWith("../")) {
    return path.resolve(currentDir, importPath);
  }

  for (const alias in remappings) {
    if (importPath.startsWith(alias)) {
      const resolved = importPath.replace(alias, remappings[alias]);
      return path.resolve(projectRoot, resolved);
    }
  }

  return null;
}

// Step 3: Extract deployable contracts only
function getContractsFromFile(
  filePath: string,
  projectRoot: string,
  remappings: Record<string, string>
): ContractInfo[] {
  const resolvedPath = path.resolve(filePath);
  if (visitedFiles.has(resolvedPath)) return [];
  visitedFiles.add(resolvedPath);

  const content = fs.readFileSync(resolvedPath, "utf8");
  const contracts: ContractInfo[] = [];

  try {
    // Match ONLY non-abstract, non-interface, non-library contracts
    const contractRegex = /^\s*contract\s+(\w+)/gm;
    let match: RegExpExecArray | null;

    while ((match = contractRegex.exec(content)) !== null) {
      const contractName = match[1];
      contracts.push({
        contractName,
        contractFilePath: resolvedPath,
        basename: path.basename(resolvedPath),
      });
    }

    // Recursively parse valid imports
    const importRegex =
      /^\s*import\s+(?:(?:\{[^}]+\})\s+from\s+)?["']([^"']+)["'];/gm;
    let importMatch: RegExpExecArray | null;
    while ((importMatch = importRegex.exec(content)) !== null) {
      const importPath = importMatch[1];
      const resolvedImport = resolveImportPath(
        importPath,
        path.dirname(resolvedPath),
        projectRoot,
        remappings
      );

      if (resolvedImport && fs.existsSync(resolvedImport)) {
        contracts.push(
          ...getContractsFromFile(resolvedImport, projectRoot, remappings)
        );
      }
    }
  } catch (err) {
    console.warn(`Error parsing file ${filePath}:`, err);
  }

  return contracts;
}

// Step 4: Gather all deployable contracts
function getAllDeployableContracts(): ContractInfo[] {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders?.length) {
    vscode.window.showErrorMessage("No workspace folder open");
    return [];
  }

  const projectRoot = workspaceFolders[0].uri.fsPath;
  const srcPath = path.join(projectRoot, "src");
  const remappings = getRemappings(projectRoot);

  const solFiles = getSolidityFiles(srcPath);
  visitedFiles.clear();

  return solFiles.flatMap((file) =>
    getContractsFromFile(file, projectRoot, remappings)
  );
}

// Helper: Recursively gather Solidity files from a directory
function getSolidityFiles(dir: string): string[] {
  let files: string[] = [];

  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(getSolidityFiles(fullPath));
    } else if (stat.isFile() && file.endsWith(".sol")) {
      files.push(fullPath);
    }
  });

  return files;
}
