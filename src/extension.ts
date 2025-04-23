import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import parser from "solidity-parser-antlr";
import { MessageId, Terminals, VSCodeMessage } from "./MessageId";

let anvilTerminal: vscode.Terminal | undefined;
let commandTerminal: vscode.Terminal | undefined;

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("slotmatrix.panelView", () => {
      const panel = vscode.window.createWebviewPanel(
        "slotmatrix",
        "SlotMatrix",
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
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
              commandTerminal?.sendText(message.data);
              commandTerminal?.show();
              break;

            case MessageId.createTerminal:
              if (message.data === Terminals.anvilTerminal) {
                anvilTerminal = vscode.window.createTerminal({
                  name: "SlotMatrix Anvil Terminal",
                });
                anvilTerminal.sendText("anvil");
              } else if (message.data === Terminals.commandTerminal) {
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
              panel.webview.postMessage({
                id: MessageId.getSolFiles,
                data: getAllDeployableContracts(),
              });
              break;

            case MessageId.getAbi:
              try {
                const workspaceFolders = vscode.workspace.workspaceFolders;
                if (!workspaceFolders || workspaceFolders.length === 0) {
                  vscode.window.showErrorMessage("No workspace folder open");
                  return;
                }
                const srcPath = path.join(
                  workspaceFolders[0].uri.fsPath,
                  "out" + message.data
                );
                const jsonContent = fs.readFileSync(srcPath, "utf8");
                const parsed = JSON.parse(jsonContent);
                console.log("parsed value : ", parsed);
                panel.webview.postMessage({
                  id: MessageId.getAbi,
                  data: parsed,
                });
              } catch (err) {
                vscode.window.showErrorMessage("Compile the contract first");
              }
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
): { name: string; filePath: string }[] {
  const content = fs.readFileSync(filePath, "utf8");

  const contracts: { name: string; filePath: string }[] = [];

  try {
    const ast = parser.parse(content, { tolerant: true, loc: true });

    parser.visit(ast, {
      ContractDefinition(node) {
        // Find the raw text of the contract definition
        const contractStart = node.loc?.start.line ?? 0;
        const contractEnd = node.loc?.end.line ?? 0;

        const lines = content.split("\n").slice(contractStart - 1, contractEnd);
        const contractText = lines.join("\n");

        // Skip abstract contracts
        const isAbstract = /^\s*abstract\s+contract\b/.test(contractText);
        if (!isAbstract && node.kind === "contract") {
          contracts.push({ name: node.name, filePath });
        }
      },
    });
  } catch (err) {
    console.warn(`Failed to parse ${filePath}:`, err);
  }

  return contracts;
}

// Main: Get all deployable contracts from the "src" folder
function getAllDeployableContracts(): { name: string; filePath: string }[] {
  const workspaceFolders = vscode.workspace.workspaceFolders;

  if (!workspaceFolders || workspaceFolders.length === 0) {
    vscode.window.showErrorMessage("No workspace folder open");
    return [];
  }

  const srcPath = path.join(workspaceFolders[0].uri.fsPath, "src");

  const solFiles = getSolidityFiles(srcPath);

  return solFiles.flatMap(getContractsFromFile);
}
