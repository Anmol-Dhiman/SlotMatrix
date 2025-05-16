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
import { MessageId, Terminals } from "../../src/MessageId";
import {
  ABIEntry,
  FuncState,
  DeployedContract,
  LogData,
  WalletData,
  Output,
} from "../utils/Types";
import { ethers } from "ethers";

import {
  parseArgs,
  parseEthValue,
  showError,
  consoleLog,
  buildDeploymentLog,
  buildFunctionCallLogs,
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
  const [showCheck, setShowCheck] = useState(false);

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
      setShowCheck(true);
      setTimeout(() => setShowCheck(false), 3000);
      getAbiMessage();
    }
  });

  function buildInitialConstructorState(abi: ABIEntry): FuncState | undefined {
    if (abi.type !== "constructor") return undefined;
    return {
      name: "constructor",
      stateMutability: abi.stateMutability,
      inputs: (abi.inputs || []).map((input) => ({
        name: input.name,
        type: input.type,
        value: "",
      })),
    };
  }

  function buildFunctionStatesFromABI(abi: any[]): FuncState[] {
    let result = abi
      .filter((item) => item.type === "function")
      .map(
        (func): FuncState => ({
          name: func.name,
          stateMutability: func.stateMutability,
          inputs: func.inputs.map((input: any) => {
            const base: any = {
              name: input.name,
              type: input.type,
              value: "",
            };

            if (input.type === "tuple" || input.type === "tuple[]") {
              base.components = input.components.map((c: any) => ({
                name: c.name,
                type: c.type,
                value: "",
              }));
            }

            return base;
          }),
          outputs: func.outputs.map((output: any) => ({
            name: output.name,
            type: output.type,
            value: "",
          })),
        })
      );

    const hasFallback = abi.some((item) => item.type === "fallback");
    const hasReceive = abi.some((item) => item.type === "receive");

    if (hasFallback || hasReceive) {
      result.push({
        name: "low-level",
        stateMutability: "payable",
        inputs: [
          {
            name: "calldata",
            type: "bytes",
            value: "",
          },
        ],
        outputs: [],
      });
    }

    return result;
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
    consoleLog("getting abi ");
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
          : {
              value: 0,
            };

      const args = parseArgs(constructorInputs?.inputs || []);

      // failed to parse the constructor args
      if (args.length !== (constructorInputs?.inputs?.length || 0)) {
        //no need to show the error message here, as error message is already shown while parsing
        return;
      }

      let contract;
      let response;
      const currentContractData = contractFiles[currentContractFileIndex];

      try {
        contract = await factory.deploy(...args, value);
        response = contract.deploymentTransaction();
        const receipt = await response?.wait(0);

        let _balance = "0.0";
        if (constructorInputs?.stateMutability === "payable") {
          updateWalletBalance();
          _balance = ethers.formatEther(value.value);
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

        const log = buildDeploymentLog(
          true,
          wallets[currentWallet].publicKey,
          `${currentContractData.basename}:${currentContractData.contractName}.(constructor)`,
          value.value.toString(),
          response?.data || "",
          args,
          currentContractJsonData.abi,
          receipt
        );
        setLogData((prev) => [...prev, log]);
      } catch (err: any) {
        consoleLog(`deployment error : ${JSON.stringify(err, null, 2)}`);
        const log = buildDeploymentLog(
          false,
          wallets[currentWallet].publicKey,
          `${currentContractData.basename}:${currentContractData.contractName}.(constructor)`,
          value.value.toString(),
          err.transaction.data,
          args,
          currentContractJsonData.abi
        );
        setLogData((prev) => [...prev, log]);
        return;
      }
    }
  }

  async function handleFunctionCall(
    functionData: FuncState,
    contractAddress: string,
    abi: any,
    contractIndex: number,
    functionIndex: number
  ) {
    if (BigInt(ethValue) < 0n) {
      showError("Eth value cannot be negative");
      return;
    }

    for (const input of functionData.inputs) {
      if (input.value === "") {
        showError(`Please fill the ${input.name} input`);
        return;
      }
    }

    const signer = new ethers.Wallet(
      wallets[currentWallet].privateKey,
      provider
    );
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const contractWithSigner = contract.connect(signer);
    const iff = new ethers.Interface(abi);
    const currentContractData = contractFiles[currentContractFileIndex];

    // === Fallback Handling ===
    const isLowLevel = functionData.name === "low-level";
    const calldataHex = isLowLevel ? functionData.inputs[0].value.trim() : "";

    const value =
      functionData.stateMutability === "payable"
        ? { value: parseEthValue(ethValue, ethFormat) }
        : { value: 0 };

    if (isLowLevel) {
      const isValidBytes = /^0x([0-9a-fA-F]{2})*$/.test(calldataHex);
      if (calldataHex.length % 2 !== 0 || !isValidBytes) {
        showError("Invalid bytes value");
        return;
      }

      try {
        const tx = {
          to: contractAddress,
          data: calldataHex,
          value: value.value,
          from: wallets[currentWallet].publicKey,
        };

        const response = await signer.sendTransaction(tx);
        const receipt = await response.wait(0);
        consoleLog(`receipt value :${JSON.stringify(receipt, null, 2)}`);

        updateWalletBalance();

        const log = buildFunctionCallLogs(
          true,
          wallets[currentWallet].publicKey,
          `${currentContractData.basename}:${currentContractData.contractName}.fallback()`,
          "fallback",
          calldataHex,
          [calldataHex],
          abi,
          value.value.toString(),
          contractAddress,
          undefined,
          receipt
        );

        if (log !== undefined) {
          setLogData((prev) => [...prev, log]);
        }

        setDeployedContract((prevContracts) =>
          prevContracts.map((contract) =>
            contract.address === contractAddress
              ? {
                  ...contract,
                  refreshTick: contract.refreshTick + 1,
                  balance: ethers.formatEther(value.value),
                }
              : contract
          )
        );
      } catch (err: any) {
        consoleLog(`fallback call error: ${JSON.stringify(err, null, 2)}`);
        const log = buildFunctionCallLogs(
          false,
          wallets[currentWallet].publicKey,
         `${currentContractData.basename}:${currentContractData.contractName}.fallback()`,
          "fallback",
          calldataHex,
          [calldataHex],
          abi,
          value.value.toString(),
          contractAddress,
          err.data,
          undefined,
          err
        );
        if (log !== undefined) setLogData((prev) => [...prev, log]);
      }

      return;
    }

    // === Normal Function Handling ===
    const args = parseArgs(functionData.inputs);
    if (args.length !== functionData.inputs.length) return;

    if (
      functionData.stateMutability === "view" ||
      functionData.stateMutability === "pure"
    ) {
      try {
        const result = await contract[functionData.name](...args);
        if (!functionData.outputs) return;

        const resultArray = Array.isArray(result) ? result : [result];

        const newOutput: Output[] = functionData.outputs.map(
          (v: Output, i: number) => ({
            ...v,
            value: `${resultArray[i]}`,
          })
        );

        setDeployedContract((prev) =>
          updateOutputValue(prev, contractIndex, functionIndex, newOutput)
        );
      } catch (err) {
        consoleLog(`view function error: ${JSON.stringify(err, null, 2)}`);
      }
    } else {
      if (
        functionData.stateMutability === "nonpayable" &&
        BigInt(ethValue) > 0n
      ) {
        showError(`${functionData.name} is not payable function`);
        return;
      }

      try {
        let rawOutput: any = undefined;
        let decodedOutput: any = undefined;

        if (functionData.outputs !== undefined) {
          rawOutput = await provider.call({
            to: contractAddress,
            data: iff.encodeFunctionData(functionData.name, [...args]),
            value: value.value,
            from: wallets[currentWallet].publicKey,
          });

          decodedOutput = iff.decodeFunctionResult(
            functionData.name,
            rawOutput
          );
        }

        if (decodedOutput?.length > 0 && functionData.outputs !== undefined) {
          const newOutput: Output[] = functionData.outputs.map(
            (v: Output, i) => ({
              ...v,
              value: `${decodedOutput[i]}`,
            })
          );

          setDeployedContract((prev) =>
            updateOutputValue(prev, contractIndex, functionIndex, newOutput)
          );
        }

        const response = await (contractWithSigner as any)[functionData.name](
          ...args,
          value
        );
        const receipt = await response.wait(0);

        updateWalletBalance();

        const log = buildFunctionCallLogs(
          true,
          wallets[currentWallet].publicKey,
          `${currentContractData.basename}:${currentContractData.contractName}.${functionData.name}()`,
          functionData.name,
          response.data,
          args,
          abi,
          value.value.toString(),
          contractAddress,
          rawOutput,
          receipt
        );

        if (log !== undefined) {
          setLogData((prev) => [...prev, log]);
        }

        setDeployedContract((prevContracts) =>
          prevContracts.map((contract) =>
            contract.address === contractAddress
              ? {
                  ...contract,
                  refreshTick: contract.refreshTick + 1,
                  balance: ethers.formatEther(value.value),
                }
              : contract
          )
        );
      } catch (err: any) {
        consoleLog(`error: ${JSON.stringify(err, null, 2)}`);
        const log = buildFunctionCallLogs(
          false,
          wallets[currentWallet].publicKey,
          `${currentContractData.basename}:${currentContractData.contractName}.${functionData.name}()`,
          functionData.name,
          err.transaction?.data,
          args,
          abi,
          value.value.toString(),
          contractAddress,
          err.data,
          undefined,
          err
        );

        if (log !== undefined) {
          setLogData((prev) => [...prev, log]);
        }
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
    newValue: Output[]
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

  const updateWalletBalance = () => {
    consoleLog(ethValue);

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
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <h1>SlotMatrix</h1>

        {showCheck && (
          <div
            style={{
              marginLeft: "12px",
              backgroundColor: "#5ece00", // green background
              borderRadius: "50%",
              display: "flex",
              padding: "4px",
              alignItems: "center",
              justifyContent: "center",
              width: "22px",
              height: "22px",
            }}
          >
            <i
              className="codicon codicon-check-all"
              style={{
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            ></i>
          </div>
        )}
      </div>

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
            <div className="heading ">Deployable Contract</div>

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

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="icon "
                onClick={() => {
                  setLogData([]);
                }}
                style={{ cursor: "pointer", marginRight: "12px" }}
                title="Clear logs"
              >
                <i className="codicon codicon-circle-slash"></i>
              </div>
              <div
                className="icon "
                onClick={() => {
                  setLogData([]);
                  setDeployedContract([]);
                  setWalletData(AnvilKeys);
                  // TODO rerun anvil
                }}
                style={{ cursor: "pointer" }}
                title="Reset all"
              >
                <i className="codicon codicon-clear-all"></i>
              </div>
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
                          {functionData.outputs &&
                            functionData.outputs.every(
                              (output) => output.value !== ""
                            ) && (
                              <div
                                style={{
                                  marginBottom: "12px",
                                  maxWidth: "25vw",
                                }}
                              >
                                {functionData.outputs.map((output, index) => {
                                  const label = output.name?.trim()
                                    ? `${index} ${output.type} ${output.name}`
                                    : `${index} ${output.type}`;

                                  return (
                                    <div
                                      key={index}
                                      style={{
                                        display: "flex",
                                        gap: "4px",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        wordBreak: "break-word",
                                        overflowWrap: "break-word",
                                        whiteSpace: "normal",
                                      }}
                                    >
                                      <span
                                        style={{
                                          wordBreak: "break-word",
                                          overflowWrap: "break-word",
                                        }}
                                      >
                                        {label} : "{output.value}"
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
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
