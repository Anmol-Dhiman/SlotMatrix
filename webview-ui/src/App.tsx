import {
  VscodeButton,
  VscodeDivider,
  VscodeOption,
  VscodeSingleSelect,
  VscodeTabHeader,
  VscodeTabPanel,
  VscodeTabs,
  VscodeTextfield,
} from "@vscode-elements/react-elements";

import "./App.css";
import { AnvilKeys } from "../utils/AnvilKeys";
import { useEffect, useState } from "react";
import { MessageId, Terminals, VSCodeMessage } from "../../src/MessageId";
import { ABIEntry, FuncState, DeployedContract, LogData } from "../utils/Types";
import { ethers } from "ethers";

import {
  consoleLog,
  parseConstructorArgs,
  buildLogData,
  parseEthValue,
} from "../utils/HelperFunc";
import "@vscode/codicons/dist/codicon.css";
import Log from "./components/Log";

declare function acquireVsCodeApi(): {
  postMessage: (message: any) => void;
  getState: () => any;
  setState: (state: any) => void;
};

// to check ui from browser
const isVSCode = typeof acquireVsCodeApi === "function";

const vscode = isVSCode
  ? acquireVsCodeApi()
  : {
      postMessage: (msg: any) => {
        console.log("[Mock vscode.postMessage]", msg);
      },
    };

const ETHFormat = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];

function App() {
  const [currentWallet, setCurrentWallet] = useState(0); // current private key from anvil wallet accounts
  const [wallets] = useState(AnvilKeys);
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
  const [currentContractJsonData, setCurrentContractJsonData] =
    useState<any>(null); // current contract json data (abi, bytecode,...etc) from {pwd}/out folder

  const [ethValue, setEthValue] = useState<string>(""); // default eth value to send with the transaction
  const [ethFormat, setEthFormat] = useState<string>(
    ETHFormat[0].toUpperCase()
  ); // default format to send with the transaction

  const [constructorInputs, setConstructorInputs] = useState<FuncState>();

  const [deployedContract, setDeployedContract] = useState<DeployedContract[]>(
    []
  );

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
      setCurrentContractJsonData(data);
      setConstructorInputs(buildInitialConstructorState(data.abi[0])); // setting constructor input state
    }
  });

  function buildInitialConstructorState(abi: ABIEntry): FuncState | undefined {
    if (abi.type !== "constructor") return undefined;
    return {
      stateMutability: abi.stateMutability,
      inputs: (abi.inputs || []).map((input) => ({
        name: input.name,
        type: input.type,
        value: "",
      })),
    };
  }

  function buildFunctionStatesFromABI(abi: any[]): FuncState[] {
    return abi
      .filter((item) => item.type === "function")
      .map(
        (func): FuncState => ({
          name: func.name,
          stateMutability: func.stateMutability,
          inputs: func.inputs.map((input: any) => ({
            name: input.name,
            type: input.type,
            value: "",
          })),
        })
      );
  }

  useEffect(() => {
    vscode.postMessage({
      id: MessageId.getSolFiles,
    });
    vscode.postMessage({
      id: MessageId.getCurrentWorkingDirectory,
    });

    vscode.postMessage({
      id: MessageId.createTerminal,
      data: Terminals.anvilTerminal,
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
  }, [currentContract, pwd]);

  function handleInputChange(index: number, value: string) {
    setConstructorInputs((prevState: FuncState | undefined) => {
      if (!prevState) return prevState;
      const updatedInputs = prevState.inputs.map((input, idx) =>
        idx === index ? { ...input, value } : input
      );
      return {
        ...prevState,
        inputs: updatedInputs,
      };
    });
  }

  async function handleDeploy() {
    if (
      currentContract === undefined ||
      pwd === undefined ||
      constructorInputs === undefined
    )
      return;
    else {
      constructorInputs?.inputs.forEach((input) => {
        if (input.value === "") {
          vscode.postMessage({
            id: MessageId.showMessage,
            data: {
              id: VSCodeMessage.error,
              message: `Please fill the ${input.name} input`,
            },
          });
          return;
        }
      });

      const provider = new ethers.JsonRpcProvider("http://localhost:8545");
      const wallet = new ethers.Wallet(
        wallets[currentWallet].privateKey,
        provider
      );

      const factory = new ethers.ContractFactory(
        currentContractJsonData.abi,
        currentContractJsonData.bytecode.object,
        wallet
      );

      const value =
        constructorInputs.stateMutability === "payable"
          ? {
              value: parseEthValue(ethValue, ethFormat),
            }
          : {};
      const contract = await factory.deploy(
        ...parseConstructorArgs(constructorInputs.inputs),
        value
      );

      const newContract: DeployedContract = {
        name: currentContract.contractName,
        address: await contract.getAddress(),
        functions: buildFunctionStatesFromABI(currentContractJsonData.abi),
        abi: currentContractJsonData.abi,
      };

      setDeployedContract((prev) => [...prev, newContract]);
    }
  }

  function updateInputValue(
    prev: DeployedContract[],
    contractIndex: number,
    functionIndex: number,
    inputIndex: number,
    newValue: string
  ): DeployedContract[] {
    const updated = [...prev];
    updated[contractIndex] = { ...updated[contractIndex] };
    updated[contractIndex].functions = [...updated[contractIndex].functions];
    updated[contractIndex].functions[functionIndex] = {
      ...updated[contractIndex].functions[functionIndex],
    };
    updated[contractIndex].functions[functionIndex].inputs = [
      ...updated[contractIndex].functions[functionIndex].inputs,
    ];
    updated[contractIndex].functions[functionIndex].inputs[inputIndex] = {
      ...updated[contractIndex].functions[functionIndex].inputs[inputIndex],
      value: newValue,
    };

    return updated;
  }

  function handleCloseContractTab(indexToRemove: number) {
    setDeployedContract((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  }

  function updateOutputValue(
    prev: DeployedContract[],
    contractIndex: number,
    functionIndex: number,
    newValue: string
  ): DeployedContract[] {
    const updated = [...prev];
    updated[contractIndex] = { ...updated[contractIndex] };
    updated[contractIndex].functions = [...updated[contractIndex].functions];
    updated[contractIndex].functions[functionIndex] = {
      ...updated[contractIndex].functions[functionIndex],
      outputs: newValue,
    };

    return updated;
  }

  function updateLogData(
    prev: DeployedContract[],
    contractIndex: number,
    newLog: LogData
  ): DeployedContract[] {
    const updated = [...prev];

    updated[contractIndex] = {
      ...updated[contractIndex],
      logs: [...(updated[contractIndex].logs || []), newLog],
    };

    return updated;
  }

  async function handleFunctionCall(
    functionData: FuncState,
    contractAddress: string,
    abi: any,
    contractIndex: number,
    functionIndex: number
  ) {
    if (functionData.name === undefined) return;

    const provider = new ethers.JsonRpcProvider("http://localhost:8545");

    const signer = new ethers.Wallet(
      wallets[currentWallet].privateKey,
      provider
    );

    const contract = new ethers.Contract(contractAddress, abi, provider);
    const contractWithSigner = contract.connect(signer);
    const iff = new ethers.Interface(abi);

    consoleLog(JSON.stringify(functionData), vscode);

    // Prepare arguments
    const args = parseConstructorArgs(functionData.inputs);

    let result: any;

    // If function is view or pure => call normally
    if (
      functionData.stateMutability === "view" ||
      functionData.stateMutability === "pure"
    ) {
      result = await contract[functionData.name](...args);
      consoleLog(`value is ${result}`, vscode);
      setDeployedContract((prev) =>
        updateOutputValue(prev, contractIndex, functionIndex, `${result}`)
      );
      return;
    }
    // If function is payable
    else if (functionData.stateMutability === "payable") {
      const rawOutput = await provider.call({
        to: contractAddress,
        data: iff.encodeFunctionData(functionData.name, [...args]),
        value: parseEthValue(ethValue, ethFormat),
      });
      const decodedOutput = iff.decodeFunctionResult(
        functionData.name,
        rawOutput
      );
      if (decodedOutput.length !== 0) {
        setDeployedContract((prev) =>
          updateOutputValue(
            prev,
            contractIndex,
            functionIndex,
            `${decodedOutput.toString()}`
          )
        );
      }
      result = await (contractWithSigner as any)[functionData.name](...args, {
        value: parseEthValue(ethValue, ethFormat),
      });
      consoleLog(`value is ${decodedOutput}`, vscode);
      return;
    }
    // If function is nonpayable (regular transaction)
    else if (functionData.stateMutability === "nonpayable") {
      // Make sure ethValue is empty for nonpayable functions
      if (ethValue !== "") {
        vscode.postMessage({
          id: MessageId.showMessage,
          data: {
            id: VSCodeMessage.error,
            data: `${functionData.name} is not payable function`,
          },
        });
        return; // Important to stop execution
      }

      // simulation
      const rawOutput = await provider.call({
        to: contractAddress,
        data: iff.encodeFunctionData(functionData.name, [...args]),
      });

      const decodedOutput = iff.decodeFunctionResult(
        functionData.name,
        rawOutput
      );

      if (decodedOutput.length !== 0) {
        setDeployedContract((prev) =>
          updateOutputValue(
            prev,
            contractIndex,
            functionIndex,
            `${decodedOutput.toString()}`
          )
        );
      }

      // actual call
      const response = await (contractWithSigner as any)[functionData.name](
        ...args
      );
      const receipt = await response.wait();

      const log = buildLogData(
        response,
        receipt,
        iff,
        functionData.name,
        rawOutput,
        decodedOutput
      );
      if (log !== undefined)
        setDeployedContract((prev) => updateLogData(prev, contractIndex, log));
    }
  }

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
            setCurrentWallet(
              parseInt((event.target as HTMLSelectElement).value)
            );
          }}
        >
          {wallets.map((account, index) => (
            <VscodeOption key={index} value={index.toString()}>
              {account.publicKey.slice(0, 6) +
                "..." +
                account.publicKey.slice(-6) +
                `  (${account.balance} ETH)`}
            </VscodeOption>
          ))}
        </VscodeSingleSelect>
      </div>
      {/* deployable contract  */}
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
      {/* eth value  */}
      {constructorInputs !== undefined && (
        <div>
          <p>ETH Value</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <VscodeTextfield
              type="number"
              value={ethValue}
              placeholder="ETH Value"
              style={{ width: "20%" }}
              onChange={(event) => {
                setEthValue((event.target as HTMLInputElement).value);
              }}
            />

            <VscodeSingleSelect
              onChange={(event) => {
                setEthFormat((event.target as HTMLSelectElement).value);
              }}
            >
              {ETHFormat.map((format, index) => {
                return (
                  <VscodeOption key={index} value={format}>
                    {format.toLocaleUpperCase()}
                  </VscodeOption>
                );
              })}
            </VscodeSingleSelect>
          </div>
        </div>
      )}
      {/* constructor inputs */}
      {constructorInputs !== undefined &&
        constructorInputs.inputs.length > 0 && (
          <div>
            <p>Constructor Input</p>
            {constructorInputs.inputs.map((input, index) => {
              return (
                <VscodeTextfield
                  key={index}
                  type="number"
                  value={input.value}
                  placeholder={input.name}
                  style={{ marginBottom: "8px", width: "20%" }}
                  onChange={(event) => {
                    handleInputChange(
                      index,
                      (event.target as HTMLInputElement).value
                    );
                  }}
                />
              );
            })}
          </div>
        )}
      {/* deploy button */}
      <div>
        <VscodeButton
          onClick={handleDeploy}
          style={{
            backgroundColor:
              constructorInputs?.stateMutability === "payable"
                ? "#cb0303"
                : undefined,
            marginBottom: "8px",
            marginTop: "4px",
            width: "20%",
          }}
        >
          Deploy
        </VscodeButton>
      </div>

      {/* functions of contract and intraction  */}

      <VscodeTabs>
        {deployedContract.map((contractData, contractIndex) => (
          <>
            <VscodeTabHeader>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <p>{contractData.name}</p>
                <div
                  className="icon"
                  style={{ paddingTop: "4px" }}
                  onClick={() => handleCloseContractTab(contractIndex)}
                >
                  <i className="codicon codicon-close"></i>
                </div>
              </div>
            </VscodeTabHeader>
            <VscodeTabPanel>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    width: "25%",
                  }}
                >
                  <p
                    style={{
                      wordBreak: "break-all",
                      whiteSpace: "normal",
                      overflowWrap: "break-word",
                    }}
                  >
                    {"Address : " + contractData.address}
                  </p>
                  <div>
                    {contractData.functions.map(
                      (functionData, functionIndex) => (
                        <div key={functionIndex}>
                          <p>{functionData.name}</p>
                          <div>
                            {functionData.inputs.map((input, inputIndex) => (
                              <div key={inputIndex}>
                                <VscodeTextfield
                                  type="number"
                                  value={input.value}
                                  style={{ marginBottom: "8px", width: "20%" }}
                                  placeholder={input.name}
                                  onChange={(event) => {
                                    const newValue = (
                                      event.target as HTMLInputElement
                                    ).value;
                                    setDeployedContract((prev) =>
                                      updateInputValue(
                                        prev,
                                        contractIndex,
                                        functionIndex,
                                        inputIndex,
                                        newValue
                                      )
                                    );
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                          <VscodeButton
                            style={{
                              backgroundColor:
                                functionData.stateMutability === "payable"
                                  ? "#cb0303"
                                  : functionData.stateMutability ===
                                    "nonpayable"
                                  ? "#fc8330"
                                  : undefined,
                              width: "20%",
                            }}
                            onClick={() =>
                              handleFunctionCall(
                                functionData,
                                contractData.address,
                                contractData.abi,
                                contractIndex,
                                functionIndex
                              )
                            }
                          >
                            call
                          </VscodeButton>
                          <div>{functionData.outputs}</div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div style={{ width: "37.5%" }}>storage</div>

                <div
                  style={{
                    width: "37.5%",
                  }}
                >
                  <Log logData={contractData.logs || []} />
                </div>
              </div>
            </VscodeTabPanel>
          </>
        ))}
      </VscodeTabs>
    </div>
  );
}

export default App;
