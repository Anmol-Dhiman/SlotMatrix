import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("slotmatrix.panelView", () => {
      const panel = vscode.window.createWebviewPanel(
        "slotmatrix",
        "SlotMatrix",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          localResourceRoots: [
            vscode.Uri.file(path.join(context.extensionPath, "media")),
          ],
        }
      );

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
    })
  );
}
