import {
  VscodeButton,
  VscodeDivider,
  VscodeFormGroup,
  VscodeOption,
  VscodeSingleSelect,
  VscodeTextfield,
} from "@vscode-elements/react-elements";
import "./App.css";
import { AnvilKeys as wallets } from "../utils/AnvilKeys";
import { useEffect, useState } from "react";
import { MessageId, Terminals } from "../../src/MessageId";

declare function acquireVsCodeApi(): {
  postMessage: (message: any) => void;
  getState: () => any;
  setState: (state: any) => void;
};

function log(message: string) {
  vscode.postMessage({
    id: MessageId.log,
    data: message,
  });
}

const vscode = acquireVsCodeApi();

function App() {
  const [__, setCurrentWallet] = useState(wallets[0].privateKey); // current private key from anvil wallet accounts
  const [pwd, setPwd] = useState(); // current working directory
  const [contractFiles, setContractFiles] =
    useState<
      { contractName: string; contractFilePath: string; basename: string }[]
    >(); // deployable contracts sources from {pwd}/src folder

  const [currentContract, setCurrentContract] = useState<{
    contractName: string;
    contractFilePath: string;
    basename: string;
  }>(); // current contract to deploy
  const [_, setCurrentContractJsonData] = useState<any>(null); // current contract json data (abi, bytecode,...etc) from {pwd}/out folder

  // -----

  const [constructorData, setConstructorData] = useState<any>(null);
  const [constructorInput, setConstructorInputs] = useState<string[]>([]);

  window.addEventListener("message", (event) => {
    const { id, data } = event.data;
    if (id === MessageId.getSolFiles) {
      setContractFiles(data);
      setCurrentContract(data[0]);
    }
    if (id === MessageId.getCurrentWorkingDirectory) {
      setPwd(data);
    }
    if (id === MessageId.getAbi) {
      log(data);
      setCurrentContractJsonData(data);
      setConstructorData(data.abi[0]);
    }
  });

  useEffect(() => {
    vscode.postMessage({
      id: MessageId.getSolFiles,
    });
    vscode.postMessage({
      id: MessageId.getCurrentWorkingDirectory,
    });
  }, []);

  useEffect(() => {
    if (currentContract === undefined || pwd === undefined) return;

    vscode.postMessage({
      id: MessageId.getAbi,
      data:
        pwd +
        "/out/" +
        currentContract.basename +
        "/" +
        currentContract.contractName +
        ".json",
    });

    // reset constructorInput
    setConstructorInputs([]);
  }, [currentContract, pwd]);

  // Handle input changes dynamically

  const handleDeploy = () => {
    // const match = currentContract.match(/\/([^\/]+\.sol):([^\/]+)$/);
    // const dataValue = match ? `./src/${match[1]}:${match[2]}` : "";

    // let command = `forge create --rpc-url http://localhost:8545 --private-key ${currentWallet} ${dataValue} --broadcast`;
    // if (constructorInput.length > 0) {
    //   command += " --constructor-args";
    //   constructorInput.forEach((input) => {
    //     command += ` ${input}`;
    //   });
    // }

    vscode.postMessage({
      id: MessageId.createTerminal,
      data: Terminals.commandTerminal,
    });
    vscode.postMessage({
      id: MessageId.createTerminal,
      data: Terminals.anvilTerminal,
    });

    // vscode.postMessage({
    //   id: MessageId.runCommand,
    //   data: command,
    // });
  };

  // const deployContract = () => {};

  return (
    <div>
      <h1>SlotMatrix</h1>
      <p>Code. Deploy. Inspect. All in One Matrix.</p>
      <VscodeDivider />

      {/* wallets */}
      <div>
        <p>Wallets</p>
        <VscodeSingleSelect
          onChange={(event) => {
            setCurrentWallet((event.target as HTMLSelectElement).value);
          }}
        >
          {wallets.map((account, index) => (
            <VscodeOption key={index} value={account.privateKey}>
              {account.publicKey.slice(0, 6) +
                "..." +
                account.publicKey.slice(-6) +
                `  (${account.balance} ETH)`}
            </VscodeOption>
          ))}
        </VscodeSingleSelect>
      </div>

      <div>
        <p>Deployable Contract</p>
        <VscodeSingleSelect
          onChange={(event) => {
            setCurrentContract(
              JSON.parse((event.target as HTMLSelectElement).value)
            );
          }}
          style={{ marginBottom: "10px" }}
        >
          {contractFiles !== undefined &&
            contractFiles.map((file, index) => (
              <VscodeOption key={index} value={JSON.stringify(file)}>
                {file.basename + ":" + file.contractName}
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

      <div>
        <VscodeButton onClick={handleDeploy} style={{}}>
          Deploy
        </VscodeButton>
      </div>
       
    </div>
  );
}

export default App;
