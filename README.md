<p align="center">
  <img src="./assets/slotmatrix-logo.png" alt="Slot Matrix Logo" width="250"/>
</p>

<h1 align="center">Slot Matrix</h1>

<p align="center">
  <em>Code. Deploy. Inspect. All in One Matrix.</em>
</p>

**Slot Matrix** is a powerful Visual Studio Code extension designed for smart contract developers and auditors. It provides a seamless and visual interface for testing, inspecting, and understanding Ethereum contracts—right from your IDE.

## Beta Testing Instructions for the Extension

To use this extension, please ensure the following:

### 1. **Project Setup:**

- Your project must be a **Foundry-based** project.
- Solidity contract files (`.sol`) should be located inside the `src` folder of your project.

### 2. **Check if Anvil is Running on Port `9545`:**

#### **Linux/macOS:**

```bash
lsof -i :9545
```

#### **Windows (PowerShell):**

```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 9545).OwningProcess
```

### 3. **To Kill the Anvil Process:**

#### **Linux/macOS:**

- Kill using PID:

  ```bash
  kill <processid>
  ```

- If the process doesn’t terminate, force kill:

  ```bash
  kill -9 <processid>
  ```

#### **Windows (PowerShell):**

- Kill using PID:

  ```powershell
  Stop-Process -Id <processid>
  ```

- Force kill (if needed):

  ```powershell
  Stop-Process -Id <processid> -Force
  ```

## 🎥 Demo

See Slot Matrix in action:

<p align="center">
  <a href="https://www.youtube.com/watch?v=c3Jfdv1Szv0" target="_blank">
    <img src="./assets/demo1.gif" alt="Slot Matrix Demo 1" />
  </a>
  <br/>
  <strong><a href="https://www.youtube.com/watch?v=c3Jfdv1Szv0" target="_blank">▶ Watch Demo 1 on YouTube</a></strong>
</p>

<br/>

<p align="center">
  <a href="https://www.youtube.com/watch?v=s29JBp9ZCjc" target="_blank">
    <img src="./assets/demo2.gif" alt="Slot Matrix Demo 2" />
  </a>
  <br/>
  <strong><a href="https://www.youtube.com/watch?v=s29JBp9ZCjc" target="_blank">▶ Watch Demo 2 on YouTube</a></strong>
</p>

## ✨ Key Features

- 🧪 **Interact** with smart contracts using a clean UI (Remix-like experience).
- 🧠 **Visualize Storage Layouts** of contracts with `forge` output.
- ⚙️ **Anvil Integration**: Automatically starts a local Anvil node on port `9545`.
- 💾 **Live Build Workflow**:
  - Runs `forge clean` and `forge build --extra-output storageLayout` on file save.

## 🚀 Usage & Commands

- Launch extension panel: `Cmd+Shift+P` → `SlotMatrix: Open`
- Save your file (`Cmd+S` / `Ctrl+S`) → triggers automatic build and layout update.

## 📦 Requirements

Make sure you have:

- Visual Studio Code `v1.85.0` or higher
- [Foundry](https://book.getfoundry.sh/) installed with `forge` and `anvil` accessible from your terminal
- A valid **Foundry-compatible** project structure

## 💻 Use Cases

- Simplify smart contract interaction and prototyping.
- Inspect and debug **storage layouts**—especially useful for upgradeable contracts.
- Test and debug **proxy patterns** visually within your editor.
- Auto-manage local chain (Anvil) while developing.

## 🙌 Contributing

We welcome contributions, suggestions, and bug reports!

- 🐞 [Report Issues](https://github.com/Anmol-Dhiman/SlotMatrix/issues)
- 🌱 Open a PR to help improve the extension
- ⭐ Star the repo if you find this useful!

## 💬 Support & Contact

Need help or want to connect?

- 🗂 [GitHub Issues](https://github.com/Anmol-Dhiman/SlotMatrix/issues)
- 🐦 [@sherlockvarm](https://x.com/sherlockvarm) on X (Twitter)

## 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

<p align="center">
  Built with ❤️ by <strong><a href="https://github.com/Anmol-Dhiman">Anmol Dhiman</a></strong>
</p>
