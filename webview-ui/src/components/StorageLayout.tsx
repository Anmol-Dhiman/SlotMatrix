import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { consoleLog } from "../../utils/HelperFunc";
import { vscode } from "../App";

interface StorageLayoutInterface {
  storageLayout: {
    storage: any[];
    types: any;
  };

  contractAddress: string;
  refreshTick: number;
}

type StorageDataType = {
  slot: string;
  value: string;
  label: string;
  noOfParents: number;
};

function StorageLayout({
  storageLayout,
  contractAddress,
  refreshTick,
}: StorageLayoutInterface) {
  const [storageData, setStorageData] = useState<StorageDataType[]>([]);

  useEffect(() => {
    const fetchStorage = async () => {
      let result: StorageDataType[] = [];
      for (const storage of storageLayout.storage) {
        const type = `${storage.type}`.trim();
        if (type.startsWith("t_array") && type.endsWith("dyn_storage")) {
          const dynamicValues = await getDynamicArrayStorage(
            storageLayout.types[storage.type],
            storage.slot,
            storage.label
          );
          result.push(...dynamicValues);
          consoleLog(JSON.stringify(dynamicValues), vscode);
        }
      }
      setStorageData(result);
    };
    fetchStorage();
  }, [refreshTick]);

  function toSlotHex(slot: any) {
    return ethers.zeroPadValue(ethers.toBeHex(BigInt(slot)), 32);
  }

  async function getStorageValue(slot: number | string): Promise<string> {
    const provider = new ethers.JsonRpcProvider("http://localhost:8545");
    consoleLog(`slot value is : ${slot}`, vscode);
    const slotHex = toSlotHex(slot);
    consoleLog(`slot hex value is : ${slotHex}`, vscode);
    return provider.getStorage(contractAddress, slotHex);
  }

  async function getDynamicArrayStorage(
    type: any,
    baseSlot: any,
    labelPrefix: string,
    depth = 0
  ): Promise<StorageDataType[]> {
    consoleLog("getting dynamic array values", vscode);
    const base = `${type.base}`.trim();
    const result: StorageDataType[] = [];

    // Get array length
    const rawLength = await getStorageValue(baseSlot);
    const length = parseInt(ethers.toBigInt(rawLength).toString());
    const baseDataSlot = ethers.keccak256(toSlotHex(baseSlot));

    consoleLog(`rawLength value ${rawLength}`, vscode);
    consoleLog(`length value ${length}`, vscode);
    consoleLog(`base data slot value ${baseDataSlot}`, vscode);

    for (let i = 0; i < length; i++) {
      const elementSlot = ethers.toBigInt(baseDataSlot) + BigInt(i);
      const elementSlotStr = elementSlot.toString();
      consoleLog(
        `base data slot value in int : ${ethers.toBigInt(baseDataSlot)} `,
        vscode
      );
      consoleLog(`element slot is ${elementSlot}`, vscode);
      consoleLog(`element slot is string ${elementSlotStr}`, vscode);

      if (base.startsWith("t_array") && base.endsWith("dyn_storage")) {
        consoleLog("inside if", vscode);
        consoleLog("inside nested", vscode);
        const nested = await getDynamicArrayStorage(
          storageLayout.types[type.base],
          elementSlotStr,
          `${labelPrefix}[${i}]`,
          depth + 1
        );
        result.push(...nested);
      } else {
        consoleLog("inside else", vscode);
        const value = await getStorageValue(elementSlotStr);
        consoleLog(`fetched value is ${value}`, vscode);
        result.push({
          slot: elementSlotStr,
          label: `${labelPrefix}[${i}]`,
          value: value,
          noOfParents: depth,
        });
        consoleLog("hello world", vscode);
      }
      consoleLog("finished", vscode);
    }

    return result;
  }

  return (
    <div>
      {storageData.map((v: StorageDataType, i: number) => (
        <div
          key={i}
          style={{
            margin: "12px",
            wordBreak: "break-all",
            whiteSpace: "normal",
            overflowWrap: "break-word",
          }}
        >
          {JSON.stringify(v, null, 2)}
        </div>
      ))}
    </div>
  );
}

export default StorageLayout;
