import { ethers, toBigInt } from "ethers";
import { useEffect, useState } from "react";
import { consoleLog } from "../../utils/HelperFunc";
import JsonView from "@uiw/react-json-view";
import { vscodeTheme } from "@uiw/react-json-view/vscode";

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
type TreeNode = StorageDataType & { children?: TreeNode[] };

function StorageLayout({
  storageLayout,
  contractAddress,
  refreshTick,
}: StorageLayoutInterface) {
  //   const [storageData, setStorageData] = useState<StorageDataType[]>([]);
  const [nestedTree, setNestedTree] = useState<TreeNode[]>([]);
  useEffect(() => {
    (async () => {
      const result = await getStorage();

      setNestedTree(buildNestedTree(result));
    })();
  }, [refreshTick]);

  function buildNestedTree(data: StorageDataType[]): TreeNode[] {
    const result: TreeNode[] = [];
    const levelMap: Record<number, TreeNode> = {};

    data.forEach((item) => {
      const node: TreeNode = { ...item, children: [] };
      const level = item.noOfParents;

      if (level === 0) {
        result.push(node);
      } else {
        const parent = levelMap[level - 1];
        if (parent) {
          parent.children!.push(node);
        } else {
          result.push(node); // fallback if parent is missing
        }
      }

      levelMap[level] = node; // store this node for future children
    });

    return result;
  }

  function toSlotHex(slot: any) {
    return ethers.zeroPadValue(ethers.toBeHex(BigInt(slot)), 32);
  }

  //   correct string and bytes storage funciton
  async function getStringOrBytesStorage(
    slot: bigint,
    label: string,
    depth = 0
  ): Promise<StorageDataType[]> {
    consoleLog("getting string or bytes value");
    const slotStorageValue = await getStorageValue(slot.toString());
    const rawBytes = ethers.getBytes(slotStorageValue);
    const isShortString = rawBytes[0] !== 0;
    let result: StorageDataType[] = [];
    result.push({
      slot: slot.toString(),
      label: label,
      noOfParents: depth,
      value: slotStorageValue,
    });
    if (isShortString) {
      return result;
    } else {
      const length = (ethers.toBigInt(slotStorageValue) - 1n) / 2n;

      const noOfSlotsRequired = Math.ceil(Number(length) / 32);

      const baseSlot = ethers.keccak256(
        ethers.zeroPadValue(ethers.toBeHex(slot), 32)
      );
      for (let i = 0n; i < noOfSlotsRequired; i++) {
        const slotValueTo = ethers.toBigInt(baseSlot) + i;
        const data = await getStorageValue(ethers.toBeHex(slotValueTo));
        result.push({
          slot: slotValueTo.toString(),
          label: `${label}[${i}]`,
          value: data,
          noOfParents: depth + 1,
        });
      }
    }

    return result;
  }

  //   this doesn't include the struct based static array
  async function getStaticArrayStorage(
    slot: any,
    label: any,
    arrayType: any,
    depth = 0
  ): Promise<StorageDataType[]> {
    consoleLog("getting static array value");
    const result: StorageDataType[] = [];

    const type = storageLayout.types[arrayType];

    const length = parseInt(type.label.match(/\[(\d+)\]$/)?.[1] || "0");

    const baseBytes = storageLayout.types[type.base].numberOfBytes;
    const baseEncoding = storageLayout.types[type.base].encoding;
    const packingRaito = Math.floor(32 / baseBytes);
    for (let i = 0; i < length / packingRaito; i++) {
      if (baseEncoding === "bytes") {
        const data = await getStringOrBytesStorage(slot + BigInt(i), label);
        result.push(...data);
      } else {
        const val = await getStorageValue((slot + BigInt(i)).toString());
        result.push({
          slot: (slot + BigInt(i)).toString(),
          value: val,
          label: `${label}[${i}]`,
          noOfParents: depth,
        });
      }
    }

    return result;
  }

  async function getStructStorage(
    storage: any,
    depth = 0
  ): Promise<StorageDataType[]> {
    consoleLog("getting struct type");
    const slotMap = new Map<bigint, StorageDataType>();
    const baseType = storageLayout.types[storage.type];
    const baseSlot = storage.slot;
    const label = storage.label;

    for (const member of baseType.members) {
      consoleLog(`members : ${JSON.stringify(member, null, 2)}`);
      const type = member.type;
      consoleLog(`type : ${JSON.stringify(type, null, 2)}`);
      const slot = toBigInt(parseInt(baseSlot) + parseInt(member.slot));
      consoleLog(`slot : ${slot}`);
      const isPackedType =
        type.startsWith("t_bool") ||
        type.startsWith("t_uint") ||
        type.startsWith("t_int") ||
        type.startsWith("t_address") ||
        type.startsWith("t_enum");
      consoleLog(`is packed : ${isPackedType}`);
      consoleLog("here");
      let dataArray;
      if (isPackedType) {
        consoleLog("getting uint or int or bool or address or enum value");
        if (slotMap.has(slot)) {
          const existing = slotMap.get(slot)!;
          existing.label += `, ${label}`;
          slotMap.set(slot, existing);
        } else {
          const value = await getStorageValue(slot.toString());
          consoleLog(`value is : ${value}`);
          slotMap.set(slot, {
            slot: slot.toString(),
            label: label,
            value: value,
            noOfParents: 0,
          });
        }
      } else if (type.startsWith("t_array") && type.endsWith("dyn_storage")) {
        dataArray = await getDynamicArrayStorage(
          storageLayout.types[storage.type],
          slot,
          label
        );
      } else if (type.startsWith("t_array") && type.endsWith("_storage")) {
        dataArray = await getStaticArrayStorage(slot, label, type);
      } else if (type.startsWith("t_mapping")) {
        slotMap.set(slot, {
          slot: slot.toString(),
          label: label,
          value: await getStorageValue(slot.toString()),
          noOfParents: 0,
        });
      } else if (
        type.startsWith("t_string_storage") ||
        type.startsWith("t_bytes_storage")
      ) {
        dataArray = await getStringOrBytesStorage(slot, label);
      } else if (type.startsWith("t_struct")) {
        dataArray = await getStructStorage(storage, depth + 1);
      }
      if (dataArray !== undefined)
        for (const data of dataArray) {
          const slotKey = BigInt(data.slot);
          slotMap.set(slotKey, data);
        }
    }
    return Array.from(slotMap.values());
  }

  async function getDynamicArrayStorage(
    type: any,
    baseSlot: any,
    labelPrefix: string,
    depth = 0
  ): Promise<StorageDataType[]> {
    consoleLog("getting dynamic array values");
    const base = `${type.base}`.trim();
    const result: StorageDataType[] = [];

    // Get array length
    const rawLength = await getStorageValue(baseSlot);
    result.push({
      slot: `${baseSlot}`,
      label: labelPrefix,
      value: rawLength,
      noOfParents: depth,
    });
    const length = parseInt(ethers.toBigInt(rawLength).toString());
    const baseDataSlot = ethers.keccak256(toSlotHex(baseSlot));

    for (let i = 0; i < length; i++) {
      const elementSlot = ethers.toBigInt(baseDataSlot) + BigInt(i);
      const elementSlotStr = elementSlot.toString();

      if (base.startsWith("t_array") && base.endsWith("dyn_storage")) {
        const nested = await getDynamicArrayStorage(
          storageLayout.types[type.base],
          elementSlotStr,
          `${labelPrefix}[${i}]`,
          depth + 1
        );
        result.push(...nested);
      } else {
        // there is not filter for struct based dynamic array
        if (storageLayout.types[base].encoding === "bytes") {
          const data = await getStringOrBytesStorage(
            ethers.toBigInt(elementSlotStr),
            `${labelPrefix}[${i}]`,
            depth + 1
          );
          result.push(...data);
        } else {
          const value = await getStorageValue(elementSlotStr);
          result.push({
            slot: elementSlotStr,
            label: `${labelPrefix}[${i}]`,
            value: value,
            noOfParents: depth + 1,
          });
        }
      }
    }

    return result;
  }

  async function getStorage(): Promise<StorageDataType[]> {
    const slotMap = new Map<bigint, StorageDataType>();

    for (let i = 0; i < storageLayout.storage.length; i++) {
      const storage = storageLayout.storage[i];

      const type = `${storage.type}`.trim();
      const slot = storage.slot;
      const label = storage.label;
      let dataArray;

      // these types could be packed
      const isPackedType =
        type.startsWith("t_bool") ||
        type.startsWith("t_uint") ||
        type.startsWith("t_int") ||
        type.startsWith("t_address") ||
        type.startsWith("t_enum");

      //normal type variables also could be packed
      if (isPackedType) {
        consoleLog("getting uint or int or bool or address or enum value");
        if (slotMap.has(slot)) {
          // Append label to existing entry
          const existing = slotMap.get(slot)!;
          existing.label += `, ${label}`;
          slotMap.set(slot, existing); // Optional, as the object is mutated
        } else {
          const value = await getStorageValue(slot);
          slotMap.set(slot, {
            slot: slot,
            label: label,
            value: value,
            noOfParents: 0,
          });
        }
      } else if (type.startsWith("t_array") && type.endsWith("dyn_storage")) {
        dataArray = await getDynamicArrayStorage(
          storageLayout.types[storage.type],
          slot,
          label
        );
      } else if (type.startsWith("t_array") && type.endsWith("_storage")) {
        dataArray = await getStaticArrayStorage(
          storage.slot,
          storage.label,
          storage.type
        );
      } else if (type.startsWith("t_mapping")) {
        slotMap.set(slot, {
          slot: slot,
          label: label,
          value: await getStorageValue(slot),
          noOfParents: 0,
        });
      } else if (
        type.startsWith("t_string_storage") ||
        type.startsWith("t_bytes_storage")
      ) {
        dataArray = await getStringOrBytesStorage(slot, label);
      } else if (type.startsWith("t_struct")) {
        dataArray = await getStructStorage(storage);
      }

      if (dataArray !== undefined)
        for (const data of dataArray) {
          const slotKey = BigInt(data.slot);
          slotMap.set(slotKey, data);
        }
    }

    return Array.from(slotMap.values());
  }

  async function getStorageValue(slot: number | string): Promise<string> {
    const provider = new ethers.JsonRpcProvider("http://localhost:8545");
    const slotHex = toSlotHex(slot);
    return provider.getStorage(contractAddress, slotHex);
  }

  return (
    <div>
      <JsonView
        value={nestedTree}
        style={vscodeTheme}
        shortenTextAfterLength={0}
        collapsed={false}
        displayObjectSize={false}
        enableClipboard={false}
        displayDataTypes={false}
      />
    </div>
  );
}

export default StorageLayout;
