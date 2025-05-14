import { MessageId, VSCodeMessage } from "../../src/MessageId";
import { ethers } from "ethers";
import { Input, LogData } from "./Types";
import { TransactionResponse, TransactionReceipt } from "ethers";
import { vscode } from "../src/App";

export function consoleLog(message: string) {
  vscode.postMessage({
    id: MessageId.log,
    data: message,
  });
}

export function parseConstructorArgs(inputs: Input[]): any[] {
  let result: any[] = [];
  for (const input of inputs) {
    const type = input.type;
    const value = input.value;
    if (
      (type.startsWith("uint") || type.startsWith("int")) &&
      !type.endsWith("[]")
    ) {
      try {
        const bits = parseInt(type.replace(/\D/g, "")) || 256;
        const inputValue = BigInt(value);

        if (type.startsWith("uint")) {
          const max = (1n << BigInt(bits)) - 1n;
          if (inputValue < 0n || inputValue > max) {
            showError(`Value ${inputValue} is out of range for ${type}`);
          } else {
            result.push(inputValue);
          }
        } else {
          const min = -(1n << (BigInt(bits) - 1n));
          const max = (1n << (BigInt(bits) - 1n)) - 1n;
          if (inputValue < min || inputValue > max) {
            showError(`Value ${inputValue} is out of range for ${type}`);
          } else {
            result.push(inputValue);
          }
        }
      } catch (err) {
        showError(
          `parsing constructor args failed for input ${input.name} : ${err}`
        );
      }
    } else if (type === "address") {
      if (ethers.isAddress(value)) {
        result.push(value);
      } else {
        showError(`${input.name} is not typeof address`);
      }
    } else if (type === "bool") {
      try {
        const boolValue = BigInt(value);
        if (boolValue === 1n || boolValue === 0n) {
          result.push(boolValue);
        } else {
          showError("Invalid bool value");
        }
      } catch (err) {
        showError(
          `parsing constructor args failed for input ${input.name} : ${err}`
        );
      }
    } else if (type === "string") {
      result.push(value);
    } else if (type.startsWith("bytes")) {
      if (/^0x[0-9a-fA-F]*$/.test(value) && value.length % 2 === 0) {
        result.push(value);
      } else {
        showError(`Invalid bytes value for ${input.name}`);
      }
    } else if (type.endsWith("[]")) {
      const elementType = type.replace("[]", "");

      let parsedArray;
      try {
        parsedArray = JSON.parse(value);
        const parsedArrayValue: any[] = [];

        for (const parsedValue of parsedArray) {
          const data = parseConstructorArgs([
            { name: "", type: elementType, value: `${parsedValue}` },
          ])[0];

          parsedArrayValue.push(data);
        }

        result.push(parsedArrayValue);
      } catch (err) {
        showError(`Invalid array for input : ${input.name}, error : ${err}`);
      }
    }
  }

  return result;
}

export function parseEthValue(
  inputValue: string,
  unit: string
): ethers.BigNumberish {
  try {
    return ethers.parseUnits(inputValue, unit.toLowerCase());
  } catch (err) {
    console.error("Invalid ETH value or unit:", err);
    return ethers.toBigInt(0);
  }
}

export function buildLogData(
  tx: TransactionResponse,
  receipt: TransactionReceipt,
  iface: ethers.Interface,
  functionName: string,
  rawOutput: string | null = null,
  decodedOutput: any | null = null
): LogData | undefined {
  const decodedInput = iface.decodeFunctionData(functionName, tx.data);
  const functionFragment = iface.getFunction(functionName);

  if (functionFragment === null || receipt.status === null) {
    return undefined;
  }

  const decodedInputFormatted = decodedInput
    ? Object.fromEntries(
        decodedInput.map((v: any, i: number) => [
          `${functionFragment.inputs[i].type} ${functionFragment.inputs[i].name}`,
          v?.toString() ?? "N/A",
        ])
      )
    : {};

  const decodedOutputFormatted = decodedOutput
    ? Object.fromEntries(
        decodedOutput.map((v: any, i: number) => [
          `${functionFragment.outputs[i].type} ${functionFragment.outputs[i].name}`,
          v?.toString() ?? "N/A",
        ])
      )
    : {};

  const statusIcon = receipt.status === 1 ? "✅" : "❌";
  const short = (val: string) =>
    val.length > 10 ? `${val.slice(0, 5)}...${val.slice(-5)}` : val;

  const heading = `${statusIcon} [anvil]from: ${short(tx.from)} to: ${
    functionFragment.name
  }(${functionFragment.inputs.map((i) => i.type).join(",")}) ${short(
    tx.to || ""
  )} value: ${tx.value?.toString() || "0"} wei data: ${short(tx.data)} logs: ${
    receipt.logs.length
  } hash: ${short(tx.hash)}`;

  
  const gasLimit = BigInt(tx.gasLimit.toString());
 
  // --- New: Parse event logs ---
  const parsedLogs = receipt.logs.map((log: any, i: number) => {
    try {
      const parsed = iface.parseLog(log);
      if (parsed === null) {
        return {
          topic: log.topics[i],
          event: "UnknownEvent",
          args: {},
        };
      }

      const argsFormatted = Object.fromEntries(
        parsed.fragment.inputs.map((input, i) => [
          `${input.name}`,
          parsed.args[i]?.toString() ?? "N/A",
        ])
      );
      return {
        topic: log.topics[i],
        event: parsed.name,
        args: argsFormatted,
      };
    } catch (err) {
      return {
        topic: log.topics[i],
        event: "UnknownEvent",
        args: {},
      };
    }
  });

  return {
    heading,
    status: `0x${receipt.status.toString(16)} ${
      receipt.status === 1
        ? "Transaction mined and execution succeed"
        : "Transaction failed"
    }`,
    transactionHash: tx.hash,
    blockHash: receipt.blockHash ?? "N/A",
    blockNumber: receipt.blockNumber ?? -1,
    from: tx.from ?? "Unknown",
    to: `${functionFragment.name}(${functionFragment.inputs
      .map((i) => i.type)
      .join(", ")}) ${tx.to ?? "Unknown"}`,
    gas: `${gasLimit} gas`,
    input: tx.data ?? "N/A",
    output: rawOutput ?? "N/A",
    decodedInput: decodedInputFormatted,
    decodedOutput: decodedOutputFormatted,
    eventLogs: parsedLogs, // ✅ Include parsed logs
  };
}

export function showError(message: string) {
  vscode.postMessage({
    id: MessageId.showMessage,
    data: {
      id: VSCodeMessage.error,
      data: message,
    },
  });
}

export async function getFutureContractAddress(
  deployerAddress: string
): Promise<string> {
  const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  const nonce = await provider.getTransactionCount(deployerAddress);

  return ethers.getCreateAddress({ from: deployerAddress, nonce });
}

export const short = (val: string) =>
  val.length > 10 ? `${val.slice(0, 5)}...${val.slice(-5)}` : val;
