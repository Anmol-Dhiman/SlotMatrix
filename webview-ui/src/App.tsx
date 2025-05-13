import {
  VscodeButton,
  VscodeDivider,
  VscodeOption,
  VscodeScrollable,
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
import {
  ABIEntry,
  FuncState,
  DeployedContract,
  LogData,
  WalletData,
} from "../utils/Types";
import { ethers } from "ethers";

import {
  parseConstructorArgs,
  buildLogData,
  parseEthValue,
  showError,
  consoleLog,
} from "../utils/HelperFunc";
import "@vscode/codicons/dist/codicon.css";
import StorageLayout from "./components/StorageLayout";
import Log from "./components/Log";

declare function acquireVsCodeApi(): {
  postMessage: (message: any) => void;
  getState: () => any;
  setState: (state: any) => void;
};

// to check ui from browser
const isVSCode = typeof acquireVsCodeApi === "function";

export const vscode = isVSCode
  ? acquireVsCodeApi()
  : {
      postMessage: (msg: any) => {
        console.log("[Mock vscode.postMessage]", msg);
      },
    };

const ETHFormat = ["wei", "gwei", "finney", "ether"];
const provider = new ethers.JsonRpcProvider("http://localhost:8545");

function App() {
  /*//////////////////////////////////////////////////////////////
                              WALLET DATA
    //////////////////////////////////////////////////////////////*/

  const [currentWallet, setCurrentWallet] = useState(0);
  const [wallets, setWalletData] = useState<WalletData[]>(AnvilKeys);

  /*//////////////////////////////////////////////////////////////
                             CONTRACT FILES
    //////////////////////////////////////////////////////////////*/
  const [pwd, setPwd] = useState(); // current working directory
  const [contractFiles, setContractFiles] = useState<
    { contractName: string; contractFilePath: string; basename: string }[]
  >([]); // deployable contracts sources from {pwd}/src folder
  const [currentContractFileIndex, setCurrentContractFileIndex] = useState(0); // current contract to deploy
  const [currentContractJsonData, setCurrentContractJsonData] =
    useState<any>(null); // current contract json data (abi, bytecode,...etc) from {pwd}/out folder
  const [constructorInputs, setConstructorInputs] = useState<FuncState>();
  const [deployedContract, setDeployedContract] = useState<DeployedContract[]>(
    []
  );

  /*//////////////////////////////////////////////////////////////
                               ETH INPUT
    //////////////////////////////////////////////////////////////*/
  const [ethValue, setEthValue] = useState<string>(""); // default eth value to send with the transaction
  const [ethFormat, setEthFormat] = useState<string>(
    ETHFormat[0].toUpperCase()
  ); // default format to send with the transaction

  const [logData, setLogData] = useState<LogData[]>([]);
  const [atAddress, setAtAddress] = useState("");

  window.addEventListener("message", (event) => {
    const { id, data } = event.data;
    if (id === MessageId.getSolFiles) {
      setContractFiles(data);
    } else if (id === MessageId.getCurrentWorkingDirectory) {
      setPwd(data);
    } else if (id === MessageId.getAbi) {
      setCurrentContractJsonData(data);
      setConstructorInputs(buildInitialConstructorState(data.abi[0])); // setting constructor input state
    } else if (id === MessageId.buildCommandRunSuccess) {
      getAbiMessage();
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
      id: MessageId.runBuildCommand,
    });

    vscode.postMessage({
      id: MessageId.getSolFiles,
    });
    vscode.postMessage({
      id: MessageId.getCurrentWorkingDirectory,
    });
    getAbiMessage();
    vscode.postMessage({
      id: MessageId.createTerminal,
      data: Terminals.anvilTerminal,
    });
  }, []);

  useEffect(() => {
    getAbiMessage();
  }, [currentContractFileIndex, pwd]);

  const getAbiMessage = () => {
    if (pwd === undefined) return;

    vscode.postMessage({
      id: MessageId.getAbi,
      data:
        pwd +
        "/out/" +
        contractFiles[currentContractFileIndex].basename +
        "/" +
        contractFiles[currentContractFileIndex].contractName +
        ".json",
    });
  };

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

  async function getBalances(address: string): Promise<string> {
    return ethers.formatEther(await provider.getBalance(address));
  }

  async function handleDeploy() {
    if (pwd === undefined) {
      return;
    } else {
      if (BigInt(ethValue) < 0) {
        showError("Eth value cannot be negative");
        return;
      }
      if (
        constructorInputs?.stateMutability === "nonpayable" &&
        BigInt(ethValue) > 0
      ) {
        showError("Non-payable constructor");
        return;
      }

      for (const input of constructorInputs?.inputs || []) {
        if (input.value === "") {
          showError(`Please fill the ${input.name} input`);
          return;
        }
      }
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
        constructorInputs?.stateMutability === "payable"
          ? {
              value: parseEthValue(ethValue, ethFormat),
            }
          : {};

      const args = parseConstructorArgs(constructorInputs?.inputs || []);

      // failed to parse the constructor args
      if (args.length !== (constructorInputs?.inputs?.length || 0)) {
        //no need to show the error message here, as error message is already shown while parsing
        return;
      }

      let contract;

      try {
        contract = await factory.deploy(...args, value);
        let _balance = "";
        if (constructorInputs?.stateMutability === "payable") {
          updateWalletBalance();
          _balance = ethers.formatEther(value?.value || 0);
        }

        const newContract: DeployedContract = {
          name: contractFiles[currentContractFileIndex].contractName,
          address: (await contract?.getAddress()) || "",
          functions: buildFunctionStatesFromABI(currentContractJsonData.abi),
          abi: currentContractJsonData.abi,
          storageLayout: currentContractJsonData.storageLayout,
          refreshTick: 0,
          balance: _balance,
        };
        setDeployedContract((prev) => [...prev, newContract]);
      } catch (err: any) {
        showError(
          `Deployment failed due to : ${
            err?.shortMessage || "anvil is not running"
          }`
        );
        consoleLog(JSON.stringify(err, null, 2));
        return;
      }
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

  async function handleFunctionCall(
    functionData: FuncState,
    contractAddress: string,
    abi: any,
    contractIndex: number,
    functionIndex: number
  ) {
    if (functionData.name === undefined) return;

    const signer = new ethers.Wallet(
      wallets[currentWallet].privateKey,
      provider
    );

    const contract = new ethers.Contract(contractAddress, abi, provider);
    const contractWithSigner = contract.connect(signer);
    const iff = new ethers.Interface(abi);

    // Prepare arguments
    const args = parseConstructorArgs(functionData.inputs);

    let result: any;

    // If function is view or pure => call normally
    if (
      functionData.stateMutability === "view" ||
      functionData.stateMutability === "pure"
    ) {
      result = await contract[functionData.name](...args);

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
      setDeployedContract((prevContracts) =>
        prevContracts.map((contract) =>
          contract.address === contractAddress
            ? { ...contract, refreshTick: contract.refreshTick + 1 }
            : contract
        )
      );

      updateWalletBalance();
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
      if (log !== undefined) setLogData((prev) => [...prev, log]);
      setDeployedContract((prevContracts) =>
        prevContracts.map((contract) =>
          contract.address === contractAddress
            ? { ...contract, refreshTick: contract.refreshTick + 1 }
            : contract
        )
      );
    }
  }

  const updateWalletBalance = () => {
    setWalletData((prevWallets) => {
      const updatedWallets = [...prevWallets];
      const current = updatedWallets[currentWallet];
      updatedWallets[currentWallet] = {
        ...current,
        balance:
          current.balance -
          Number(ethers.formatEther(parseEthValue(ethValue, ethFormat))), // subtract the sent amount
      };

      return updatedWallets;
    });
  };

  const handleCopy = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
    } catch (err) {}
  };

  const handleAtAddress = async () => {
    if (atAddress === "") {
      showError("Enter the contract address");
      return;
    } else if (!ethers.isAddress(atAddress)) {
      showError(`${atAddress} is not a valid contract address.`);
      return;
    }

    let _balance = await getBalances(atAddress);
    const newContract: DeployedContract = {
      name: contractFiles[currentContractFileIndex].contractName,
      address: atAddress,
      functions: buildFunctionStatesFromABI(currentContractJsonData.abi),
      abi: currentContractJsonData.abi,
      storageLayout: currentContractJsonData.storageLayout,
      refreshTick: 0,
      balance: _balance,
    };

    setDeployedContract((prev) => [...prev, newContract]);
  };

  return (
    <div>
      <h1>SlotMatrix</h1>

      <p>Code. Deploy. Inspect. All in One Matrix.</p>

      {/* deployment and logs  */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <VscodeScrollable
          style={{ width: "25%", paddingRight: "12px", height: "500px" }}
        >
          <div>
            {/* wallets  */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="heading">Wallets</div>
              <div
                className="icon "
                style={{ marginLeft: "4px", cursor: "pointer" }}
                onClick={() => handleCopy(wallets[currentWallet].publicKey)}
              >
                <i className="codicon codicon-copy icon"></i>
              </div>
            </div>
            <VscodeSingleSelect
              value={currentWallet.toString()}
              onChange={(event) => {
                setCurrentWallet(
                  parseInt((event.target as HTMLSelectElement).value)
                );
              }}
              style={{ marginBottom: "12px" }}
            >
              {wallets.map((account, index) => (
                <VscodeOption
                  key={`${account.publicKey}-${account.balance}`}
                  value={index.toString()}
                  selected={index === currentWallet}
                >
                  {`${account.publicKey.slice(
                    0,
                    6
                  )}...${account.publicKey.slice(-6)}  (${
                    account.balance
                  } ETH)`}
                </VscodeOption>
              ))}
            </VscodeSingleSelect>
          </div>

          {/* deployable contract  */}
          <div>
            <div className="heading">Deployable Contract</div>
            <VscodeSingleSelect
              onChange={(event) => {
                setCurrentContractFileIndex(
                  JSON.parse((event.target as HTMLSelectElement).value)
                );
              }}
              style={{ marginBottom: "12px" }}
            >
              {contractFiles.length !== 0 &&
                contractFiles.map((file, index) => (
                  <VscodeOption key={index} value={index.toString()}>
                    {file.basename + ":" + file.contractName}
                  </VscodeOption>
                ))}
            </VscodeSingleSelect>
          </div>

          {/* eth value  */}
          <div>
            <div className="heading">ETH Value</div>
            <VscodeTextfield
              type="number"
              value={ethValue}
              min={0}
              placeholder="ETH Value"
              onChange={(event) => {
                const value = Number((event.target as HTMLInputElement).value);
                setEthValue(value.toString());
              }}
              style={{ marginBottom: "12px" }}
            />

            <div>
              <VscodeSingleSelect
                onChange={(event) => {
                  setEthFormat((event.target as HTMLSelectElement).value);
                }}
                style={{ marginBottom: "12px" }}
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

          {/* constructor inputs */}
          {constructorInputs !== undefined &&
            constructorInputs.inputs.length > 0 && (
              <div>
                <div className="heading">Constructor Input</div>
                {constructorInputs.inputs.map((input, index) => {
                  return (
                    <>
                      <div style={{ marginBottom: "4px" }}>{input.name} : </div>
                      <VscodeTextfield
                        key={index}
                        value={input.value}
                        placeholder={input.type}
                        onChange={(event) => {
                          handleInputChange(
                            index,
                            (event.target as HTMLInputElement).value
                          );
                        }}
                        style={{ marginBottom: "12px" }}
                      />
                    </>
                  );
                })}
              </div>
            )}
          {/* deploy button */}

          <VscodeButton
            onClick={() => {
              // vscode.postMessage({
              //   id: MessageId.deployFlag,
              // });
              handleDeploy();
            }}
            style={{
              backgroundColor:
                constructorInputs?.stateMutability === "payable"
                  ? "#cb0303"
                  : undefined,
              width: "100%",
              boxSizing: "border-box",
              marginBottom: "12px",
            }}
          >
            Deploy
          </VscodeButton>

          {/* At address  */}
          <VscodeTextfield
            value={atAddress}
            placeholder="Load contract from address"
            onChange={(event) => {
              setAtAddress((event.target as HTMLInputElement).value);
            }}
            style={{ marginBottom: "12px" }}
          />
          <VscodeButton
            onClick={handleAtAddress}
            style={{ width: "100%", boxSizing: "border-box" }}
          >
            At Address
          </VscodeButton>
        </VscodeScrollable>

        <div
          style={{
            width: "75%",
            borderLeft: "1px solid gray",
            paddingLeft: "12px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "8px",
              alignItems: "center",
            }}
          >
            <div className="heading" style={{ marginBottom: "0px" }}>
              Logs
            </div>

            <div
              className="icon "
              onClick={() => {
                setLogData([]);
              }}
              style={{ cursor: "pointer" }}
            >
              <i className="codicon codicon-clear-all"></i>
            </div>
          </div>
          <VscodeDivider />
          <VscodeScrollable style={{ height: "450px" }}>
            <Log logData={logData} />
          </VscodeScrollable>
        </div>
      </div>

      {/* functions of contract and interactions  */}
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
                <div>{contractData.name}</div>
                <div
                  className="icon"
                  style={{ paddingTop: "4px", cursor: "pointer" }}
                  onClick={() => handleCloseContractTab(contractIndex)}
                >
                  <i className="codicon codicon-close icon"></i>
                </div>
              </div>
            </VscodeTabHeader>
            <VscodeTabPanel>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "32px",
                }}
              >
                <div style={{ width: "25%", paddingRight: "12px" }}>
                  {/* function interaction  */}
                  <div className="heading">Contract Interaction</div>
                  <div
                    style={{
                      marginBottom: "4px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div>
                      {`Address : ${contractData.address.slice(
                        0,
                        6
                      )}...${contractData.address.slice(-6)}`}
                    </div>
                    <div
                      className="icon "
                      style={{ marginLeft: "4px", cursor: "pointer" }}
                      onClick={() => handleCopy(contractData.address)}
                    >
                      <i className="codicon codicon-copy icon"></i>
                    </div>
                  </div>

                  <div
                    style={{ marginBottom: "12px" }}
                  >{`Balance : ${contractData.balance} ETH`}</div>

                  <div>
                    {contractData.functions.map(
                      (functionData, functionIndex) => (
                        <div key={functionIndex}>
                          <div>
                            {functionData.inputs.map((input, inputIndex) => (
                              <div key={inputIndex}>
                                {input.name !== "" && (
                                  <div style={{ marginBottom: "4px" }}>
                                    {input.name} :
                                  </div>
                                )}
                                <VscodeTextfield
                                  value={input.value}
                                  style={{ marginBottom: "12px" }}
                                  placeholder={input.type}
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
                              width: "100%",
                              boxSizing: "border-box",
                              marginBottom: "12px",
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
                            {functionData.name}
                          </VscodeButton>
                          <div style={{ marginBottom: "12px" }}>
                            {functionData.outputs}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div
                  style={{
                    width: "75%",
                    borderLeft: "1px solid gray",
                    paddingLeft: "12px",
                  }}
                >
                  {/* storage layout  */}
                  <div className="heading">Storage Layout</div>
                  <StorageLayout
                    storageLayout={contractData.storageLayout}
                    refreshTick={contractData.refreshTick}
                    contractAddress={contractData.address}
                  />
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
