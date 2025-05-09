import { MessageId } from "../../src/MessageId";
import { isAddress, ethers } from "ethers";
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
  return inputs.map(({ type, value }) => {
    if (type.startsWith("uint") || type.startsWith("int")) {
      return BigInt(value);
    }

    if (type === "address") {
      if (!isAddress(value)) {
        throw new Error(`Invalid address: ${value}`);
      }
      return value;
    }

    if (type === "bool") {
      return value === "true" || value === "1";
    }

    if (type === "string") {
      return value;
    }

    if (type.startsWith("bytes")) {
      return value; // assume valid hex string (e.g., 0xabc123)
    }

    if (type.endsWith("[]")) {
      // e.g. uint256[] or address[]
      const elementType = type.replace("[]", "");
      const parsedArray = JSON.parse(value); // should be a stringified array
      if (!Array.isArray(parsedArray)) {
        throw new Error(`Expected array for type ${type}, got: ${value}`);
      }
      return parsedArray.map(
        (v: any) =>
          parseConstructorArgs([
            { name: "", type: elementType, value: String(v) },
          ])[0]
      );
    }

    throw new Error(`Unsupported Solidity type: ${type}`);
  });
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

  const heading = `${statusIcon} [vm]from: ${short(tx.from)} to: ${
    functionFragment.name
  }(${functionFragment.inputs.map((i) => i.type).join(",")}) ${short(
    tx.to || ""
  )} value: ${tx.value?.toString() || "0"} wei data: ${short(tx.data)} logs: ${
    receipt.logs.length
  } hash: ${short(tx.hash)}`;

  const baseCost = 21000n;
  const gasUsed = BigInt(receipt.gasUsed.toString());
  const gasLimit = BigInt(tx.gasLimit.toString());
  const executionCost = gasUsed > baseCost ? gasUsed - baseCost : gasUsed;

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
    transactionCost: `${gasUsed} gas`,
    executionCost: `${executionCost} gas`,
    input: tx.data ?? "N/A",
    output: rawOutput ?? "N/A",
    decodedInput: decodedInputFormatted,
    decodedOutput: decodedOutputFormatted,
    logs: parsedLogs, // ✅ Include parsed logs
  };
}
