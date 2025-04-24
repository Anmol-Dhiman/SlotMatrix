import { MessageId } from "../../src/MessageId";
import { isAddress, ethers } from "ethers";
import { Input } from "./Types";

export function consoleLog(message: string, vscode: any) {
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
