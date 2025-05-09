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
        anvilTerminal?.dispose();
        commandTerminal?.dispose();
      });
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
        console.log("log : error", error);
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

      console.log("log : output", stdout);
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
        console.log("log : error", error);
        return;
      }
      console.log("log : output", stdout);
      return;
    }
  );
}

// Util: Recursively find .sol files in a directory
function getSolidityFiles(dir: string): string[] {
  let results: string[] = [];

  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(getSolidityFiles(fullPath));
    } else if (entry.endsWith(".sol")) {
      results.push(fullPath);
    }
  }

  return results;
}

// Util: Parse a file and return all deployable contracts
function getContractsFromFile(
  filePath: string
): { contractName: string; contractFilePath: string; basename: string }[] {
  const content = fs.readFileSync(filePath, "utf8");

  const contracts: {
    contractName: string;
    contractFilePath: string;
    basename: string;
  }[] = [];

  try {
    const contractRegex = /\b(abstract\s+)?contract\s+(\w+)/g;
    let match: RegExpExecArray | null;
    while ((match = contractRegex.exec(content)) !== null) {
      const isAbstract = Boolean(match[1]);
      const contractName = match[2];
      if (isAbstract) continue;
      contracts.push({
        contractName: contractName,
        contractFilePath: filePath,
        basename: path.basename(filePath),
      });
    }
  } catch (err) {
    console.warn(`Failed to parse ${filePath}:`, err);
  }

  return contracts;
}

// Main: Get all deployable contracts from the "src" folder
function getAllDeployableContracts(): {
  contractName: string;
  contractFilePath: string;
  basename: string;
}[] {
  const workspaceFolders = vscode.workspace.workspaceFolders;

  if (!workspaceFolders || workspaceFolders.length === 0) {
    vscode.window.showErrorMessage("No workspace folder open");
    return [];
  }

  const srcPath = path.join(workspaceFolders[0].uri.fsPath, "src");

  const solFiles = getSolidityFiles(srcPath);
  return solFiles.flatMap(getContractsFromFile);
}
