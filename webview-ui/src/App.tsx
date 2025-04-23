import {
  VscodeButton,
  VscodeDivider,
  VscodeFormGroup,
  VscodeOption,
  VscodeSingleSelect,
  VscodeTextfield,
} from "@vscode-elements/react-elements";
import "./App.css";
import { AnvilKeys } from "../utils/AnvilKeys";
import { useEffect, useState } from "react";
import { MessageId, Terminals } from "../../src/MessageId";
declare function acquireVsCodeApi(): {
  postMessage: (message: any) => void;
  getState: () => any;
  setState: (state: any) => void;
};

const isVSCode = typeof acquireVsCodeApi === "function";

const vscode = isVSCode
  ? acquireVsCodeApi()
  : {
      postMessage: (msg: any) => {
        console.log("[Mock vscode.postMessage]", msg);
      },
    };

function App() {
  const [contractFiles, setContractFiles] =
    useState<{ name: string; filePath: string }[]>();
  const [accounts] = useState(AnvilKeys);

  const [currentAccount, setCurrentAccount] = useState(accounts[0].privateKey);
  const [currentContract, setCurrentContract] = useState("");
  const [__, setCurrentContractJsonData] = useState<any>(null);
  const [constructorData, setConstructorData] = useState<any>(null);
  const [constructorInput, setConstructorInputs] = useState<string[]>([]);

  window.addEventListener("message", (event) => {
    const { id, data } = event.data;
    if (id === MessageId.getSolFiles) {
      setContractFiles(data);
      setCurrentContract(data[0].filePath + ":" + data[0].name);
    }
    if (id === MessageId.getAbi) {
      setCurrentContractJsonData(data);
      setConstructorData(data.abi[0]);
    }
  });

  useEffect(() => {
    vscode.postMessage({
      id: MessageId.getSolFiles,
    });
  }, []);

  useEffect(() => {
    if (currentContract === "") return;
    const match = currentContract.match(/\/([^\/]+\.sol):([^\/]+)$/);
    const dataValue = match ? `/${match[1]}/${match[2]}.json` : "";

    vscode.postMessage({
      id: MessageId.getAbi,
      data: dataValue,
    });

    // reset constructorInput
    setConstructorInputs([]);
  }, [currentContract]);

  const handleDeploy = () => {
    let command = `forge create --rpc-url http://localhost:8545 --private-key ${currentAccount} ${currentContract} --broadcast`;
    if (constructorInput.length > 0) {
      command += " --constructor-args";
      constructorInput.forEach((input) => {
        command += ` ${input}`;
      });
    }

    vscode.postMessage({
      id: MessageId.createTerminal,
      data: Terminals.commandTerminal,
    });
    vscode.postMessage({
      id: MessageId.createTerminal,
      data: Terminals.anvilTerminal,
    });

    vscode.postMessage({
      id: MessageId.runCommand,
      data: command,
    });
  };

  return (
    <div>
      <h1>SlotMatrix</h1>
      <p>Code. Deploy. Inspect. All in One Matrix.</p>
      <VscodeDivider />
      {/* accounts */}
      <div>
        <p>Accounts</p>
        <VscodeSingleSelect
          onChange={(event) => {
            setCurrentAccount((event.target as HTMLSelectElement).value);
          }}
        >
          {accounts.map((account, index) => (
            <VscodeOption key={index} value={account.privateKey}>
              {account.publicKey.slice(0, 6) +
                "..." +
                account.publicKey.slice(-6) +
                `  (${account.balance} ETH)`}
            </VscodeOption>
          ))}
        </VscodeSingleSelect>
      </div>
      {/* show the current contract user can deploy */}
      <div>
        <p>Contract</p>
        <VscodeSingleSelect
          onChange={(event) => {
            setCurrentContract((event.target as HTMLSelectElement).value);
          }}
          style={{ marginBottom: "10px" }}
        >
          {contractFiles !== undefined &&
            contractFiles.map((file, index) => (
              <VscodeOption key={index} value={file.filePath + ":" + file.name}>
                {file.name + ".sol"}
              </VscodeOption>
            ))}
        </VscodeSingleSelect>
      </div>

      {constructorData !== null && constructorData.type === "constructor" && (
        <VscodeFormGroup>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {constructorData.inputs.map((input: any, index: number) => (
              <VscodeTextfield
                key={index}
                value={
                  constructorInput[index] === undefined
                    ? ""
                    : constructorInput[index]
                }
                placeholder={input.name}
                onChange={(event) => {
                  const newValue = (event.target as HTMLInputElement).value;
                  setConstructorInputs((prev) => {
                    const newInputs = [...prev];
                    newInputs[index] = newValue;
                    return newInputs;
                  });
                }}
              />
            ))}
          </div>
        </VscodeFormGroup>
      )}

      {/* deploy the contract  */}
      <div>
        <VscodeButton onClick={handleDeploy}>Deploy</VscodeButton>
      </div>
    </div>
  );
}

export default App;
