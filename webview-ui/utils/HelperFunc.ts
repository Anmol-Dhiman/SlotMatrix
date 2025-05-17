import { MessageId, VSCodeMessage } from "../../src/MessageId";
import { ethers } from "ethers";
import { Input, LogData } from "./Types";
import { vscode, provider } from "../src/App";

export function consoleLog(message: string) {
  vscode.postMessage({
    id: MessageId.log,
    data: message,
  });
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

export function parseArgs(inputs: Input[]): any[] {
  const result: any[] = [];

  for (const input of inputs) {
    const { type, value, name } = input;

    try {
      if (
        (type.startsWith("uint") || type.startsWith("int")) &&
        !type.endsWith("[]")
      ) {
        const bits = parseInt(type.replace(/\D/g, "")) || 256;
        const inputValue = BigInt(value);

        if (type.startsWith("uint")) {
          const max = (1n << BigInt(bits)) - 1n;
          if (inputValue < 0n || inputValue > max) {
            showError(`Value ${inputValue} is out of range for ${type}`);
            return [];
          }
        } else {
          const min = -(1n << (BigInt(bits) - 1n));
          const max = (1n << (BigInt(bits) - 1n)) - 1n;
          if (inputValue < min || inputValue > max) {
            showError(`Value ${inputValue} is out of range for ${type}`);
            return [];
          }
        }
        result.push(inputValue.toString());
      } else if (type === "address") {
        if (ethers.isAddress(value)) {
          result.push(value);
        } else {
          showError(`${name} is not a valid address`);
        }
      } else if (type === "bool") {
        const boolValue = BigInt(value);
        if (boolValue === 0n || boolValue === 1n) {
          result.push(Boolean(boolValue));
        } else {
          showError(`Invalid bool value for ${name}`);
        }
      } else if (type === "string") {
        result.push(value);
      } else if (type.startsWith("bytes")) {
        const isHex = /^0x[0-9a-fA-F]*$/.test(value);
        const isEvenLength = value.length % 2 === 0;

        // Special case for empty bytes
        if (value === "0x" || value === "" || (isHex && isEvenLength)) {
          result.push(value === "" ? "0x" : value);
        } else {
          showError(`Invalid bytes value for ${name}`);
        }
      } else if (type.endsWith("[]")) {
        const elementType = type.slice(0, -2);

        const parsedArray = JSON.parse(value);
        if (!Array.isArray(parsedArray)) {
          showError(`Value for ${name} is not a valid array`);
          return [];
        }

        const parsedArrayValue = parsedArray.map(
          (item) =>
            parseArgs([
              {
                name: "",
                type: elementType,
                value: JSON.stringify(item),
                components: input.components,
              },
            ])[0]
        );

        result.push(parsedArrayValue);
      } else if (type === "tuple") {
        const parsedArray = JSON.parse(value);

        if (parsedArray === null || !Array.isArray(parsedArray)) {
          showError(`Invalid tuple value for ${name}, must be an object`);
          return [];
        }

        if (!input.components) {
          showError(
            `Missing components definition for tuple ${name} : code error`
          );
          return [];
        }

        if (parsedArray.length !== input.components.length) {
          showError(
            `Tuple ${name} expects ${input.components.length} values but got ${value.length}`
          );
          return [];
        }

        const tupleValue: any = {};

        for (let i = 0; i < input.components.length; i++) {
          const component = input.components[i];
          const componentValue = parsedArray[i];

          const parsed = parseArgs([
            {
              name: component.name,
              type: component.type,
              value: componentValue,
              components: component.components,
            },
          ]);

          tupleValue[component.name] = parsed[0];
        }

        result.push(tupleValue);
      } else {
        consoleLog("invalid args type");
      }
    } catch (err) {
      showError(`Error parsing input ${name}: ${(err as Error).message}`);
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
    consoleLog("Invalid ETH value or unit:" + JSON.stringify(err, null, 2));
    return ethers.toBigInt(0);
  }
}

export function short(val: string): string {
  return val.length > 10 ? `${val.slice(0, 5)}...${val.slice(-5)}` : val;
}

export async function getFutureContractAddress(
  deployerAddress: string
): Promise<string> {
  const nonce = await provider.getTransactionCount(deployerAddress);
  return ethers.getCreateAddress({ from: deployerAddress, nonce });
}

export function decodeEventLogs(
  rawLogs: any[],
  abi: any
): Record<string, Record<string, string>> {
  const iface = new ethers.Interface(abi);
  const decodedLogs: Record<string, Record<string, string>> = {};

  for (const log of rawLogs) {
    try {
      const parsed = iface.parseLog({ topics: log.topics, data: log.data });
      if (!parsed) continue;

      const logData: Record<string, string> = {};
      parsed.fragment.inputs.forEach((input, idx) => {
        logData[`${input.type} ${input.name}`] = parsed.args[idx].toString();
      });

      decodedLogs[parsed.name] = logData;
    } catch {
      // Ignore unrecognized logs
    }
  }

  return decodedLogs;
}

export function decodeCustomError(
  errorData: string,
  abi: any
): Record<string, Record<string, string>> | undefined {
  consoleLog("inside custom error");
  const iface = new ethers.Interface(abi);

  try {
    const parsed = iface.parseError(errorData);
    if (!parsed) return;

    const errorArgs: Record<string, string> = {};
    parsed.fragment.inputs.forEach((input, idx) => {
      errorArgs[`${input.type} ${input.name}`] = parsed.args[idx].toString();
    });

    return { [parsed.name]: errorArgs };
  } catch {
    return undefined;
  }
}

export function buildDeploymentLog(
  isDeployedSuccess: boolean,
  from: string,
  to: string,
  value: string,
  input: string,
  args: any[],
  abi: any,
  receipt?: any
): LogData {
  consoleLog("inside build log");
  const constructorAbi = abi.find((item: any) => item.type === "constructor");
  const decodedInputFormatted = constructorAbi
    ? Object.fromEntries(
        args.map((v: any, i: number) => [
          `${constructorAbi.inputs[i].type} ${constructorAbi.inputs[i].name}`,
          `${v}`,
        ])
      )
    : {};

  if (isDeployedSuccess && receipt) {
    return {
      heading: `✅ [anvil] from : ${short(
        from
      )} to : ${to} value : ${value} wei data : ${short(input)} hash : ${short(
        receipt.hash
      )}`,
      status: "0x1 Transaction mined and execution succeed",
      from,
      to,
      value: `${ethers.formatEther(value)} ETH`,
      input,
      decodedInput: decodedInputFormatted,
      blockHash: receipt.blockHash,
      blockNumber: receipt.blockNumber,
      transactionHash: receipt.hash,
      gas: receipt.gasUsed,
      contractAddress: receipt.contractAddress,
      eventLogs: receipt.logs.length
        ? decodeEventLogs(receipt.logs, abi)
        : undefined,
    };
  } else {
    return {
      heading: `❌ [anvil] from : ${short(
        from
      )} to : ${to} value : ${value} wei data : ${short(input)}`,
      status: "0x0 Transaction failed",
      from,
      to,
      value: `${ethers.formatEther(value)} ETH`,
      input,
      decodedInput: decodedInputFormatted,
    };
  }
}

function formatInput(value: any, input: any): any {
  if (input.type === "tuple") {
    const components = input.components || [];
    const formatted: Record<string, any> = {};
    components.forEach((comp: any, idx: number) => {
      const compValue = value[comp.name] ?? value[idx];
      formatted[`${comp.type} ${comp.name}`] = compValue;
    });

    return formatted;
  } else if (input.type === "tuple[]") {
    const components = input.arrayChildren.components || [];
    const formatted: any[] = [];
    value.forEach((v: any) => {
      formatted.push(formatInput(v, { type: "tuple", components: components }));
    });

    return formatted;
  } else {
    return value;
  }
}

export function buildFunctionCallLogs(
  isCallSuccess: boolean,
  from: string,
  to: string,
  functionName: string,
  inputBytes: string,
  args: any[],
  abi: any,
  value: string,
  contractAddress: string,
  outputBytes?: string,
  receipt?: any,
  error?: any
): LogData | undefined {
  try {
    consoleLog("inside function log building");

    const isFallbackOrReceive =
      functionName === "fallback" || functionName === "receive";

    const iface = new ethers.Interface(abi);
    let decodedInputFormatted: Record<string, any> | undefined = undefined;
    let decodedOutputFormatted: Record<string, any> | undefined = undefined;

    if (!isFallbackOrReceive) {
      const functionFragment = iface.getFunction(functionName);
      if (!functionFragment) return undefined;

      decodedInputFormatted = Object.fromEntries(
        args.map((v: any, i: number) => {
          const input = functionFragment.inputs[i];
          const key = `${input.type} ${input.name}`;
          const value = formatInput(v, input);
          return [key, value];
        })
      );

      if (isCallSuccess && outputBytes !== undefined) {
        const decodedOutput = iface.decodeFunctionResult(
          functionName,
          outputBytes
        );
        if (decodedOutput.length) {
          decodedOutputFormatted = Object.fromEntries(
            decodedOutput.map((v: any, i: number) => {
              const output = functionFragment.outputs[i];
              return [`${output.type} ${output.name}`, `${v}`];
            })
          );
        }
      }
    }

    let log: LogData;

    if (isCallSuccess && receipt) {
      log = {
        heading: `✅ [anvil] from : ${short(
          receipt.from
        )} to : ${to} value : ${value} wei data : ${short(
          inputBytes
        )} hash : ${short(receipt.hash)}`,
        status: "0x1 Transaction mined and execution succeed",
        from: receipt.from,
        to,
        value: `${ethers.formatEther(value)} ETH`,
        blockHash: receipt.blockHash,
        blockNumber: receipt.blockNumber,
        transactionHash: receipt.hash,
        gas: receipt.gasUsed,
        contractAddress,
        input: inputBytes,
        decodedInput: decodedInputFormatted,
        output: outputBytes === "0x" ? undefined : outputBytes,
        decodedOutput: decodedOutputFormatted,
        eventLogs: receipt.logs.length
          ? decodeEventLogs(receipt.logs, abi)
          : undefined,
      };
    } else {
      consoleLog(`error message : ${error?.info?.error?.message}`);
      log = {
        heading: `❌ [anvil] from : ${short(
          from
        )} to : ${to} value : ${value} wei data : ${short(inputBytes)}`,
        status: "0x0 Transaction failed.",
        contractAddress,
        from,
        to,
        value: `${ethers.formatEther(value)} ETH`,
        input: inputBytes,
        decodedInput: decodedInputFormatted,
        output: outputBytes,
        reason: error?.info?.error?.message,
        error:
          error?.reason === null
            ? decodeCustomError(error.data, abi)
            : undefined,
      };
    }

    return log;
  } catch (err) {
    consoleLog(`error in logs : ${JSON.stringify(err, null, 2)}`);
    return undefined;
  }
}

export async function isAnvilRunning(port: string): Promise<boolean> {
  try {
    const response = await fetch(`http://127.0.0.1:${port}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_blockNumber",
        params: [],
        id: 1,
      }),
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}
