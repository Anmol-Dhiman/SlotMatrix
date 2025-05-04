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
    (async () => {
      const items = storageLayout.storage;
      const result = await processStorage(storageLayout, items);
      consoleLog(
        JSON.stringify(
          await getStaticArrayStorage(
            storageLayout.types[storageLayout.storage[0].type],
            0n,
            "static_array"
          ),
          null,
          2
        ),
        vscode
      );

      setStorageData(result);
    })();
  }, [refreshTick]);

  function toSlotHex(slot: any) {
    return ethers.zeroPadValue(ethers.toBeHex(BigInt(slot)), 32);
  }

  //   correct string and bytes storage funciton
  async function getStringOrBytesStorage(
    slot: bigint,
    label: string,
    depth = 0
  ): Promise<StorageDataType[]> {
    const slotStorageValue = await getStorageValue(slot.toString());

    const rawBytes = ethers.getBytes(slotStorageValue);

    const isShortString = rawBytes[0] !== 0; // this means that storage slot starts with string bytes value and string is shorter than 31 bytes

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

  async function getStaticArrayStorage(
    type: any,
    slot: bigint,
    label: string,
    depth = 0
  ): Promise<StorageDataType[]> {
    const result: StorageDataType[] = [];
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

  async function getDynamicBytesOrString(slot: bigint): Promise<string> {
    const val = await getStorageValue(slot.toString());

    const isShort = (parseInt(val.slice(-2), 16) & 1) === 1;

    if (isShort) {
      return val;
    } else {
      const baseSlot = ethers.keccak256(
        ethers.zeroPadValue(ethers.toBeHex(slot), 32)
      );
      const data = await getStorageValue(BigInt(baseSlot).toString());
      return data;
    }
  }

  async function processDynamicArray(
    baseSlot: bigint,
    label: string,
    depth: number
  ): Promise<StorageDataType[]> {
    const lengthRaw = await getStorageValue(baseSlot.toString());
    const length = parseInt(ethers.toBigInt(lengthRaw).toString());
    const startSlot = ethers.keccak256(
      ethers.zeroPadValue(ethers.toBeHex(baseSlot), 32)
    );
    const baseSlotNum = BigInt(startSlot);

    const result: StorageDataType[] = [
      {
        slot: baseSlot.toString(),
        value: length.toString(),
        label: `${label}.length`,
        noOfParents: depth,
      },
    ];

    for (let i = 0; i < length; i++) {
      const elemSlot = baseSlotNum + BigInt(i);
      const val = await getStorageValue(elemSlot.toString());
      result.push({
        slot: elemSlot.toString(),
        value: val,
        label: `${label}[${i}]`,
        noOfParents: depth + 1,
      });
    }

    return result;
  }

  async function processFixedArray(
    type: any,
    baseSlot: bigint,
    label: string,
    depth: number
  ): Promise<StorageDataType[]> {
    const length = parseInt(type.label.match(/\[(\d+)\]$/)?.[1] || "0");
    const result: StorageDataType[] = [];

    for (let i = 0; i < length; i++) {
      const val = await getStorageValue((baseSlot + BigInt(i)).toString());
      result.push({
        slot: (baseSlot + BigInt(i)).toString(),
        value: val,
        label: `${label}[${i}]`,
        noOfParents: depth,
      });
    }

    return result;
  }

  // Decode packed variables within a struct slot
  function decodePackedStructValues(slotValue: string, structType: any) {
    let offset = 0;
    const decodedValues: any = {};

    structType.members.forEach((member: any) => {
      const memberType = member.type.trim();
      const memberLabel = member.label;

      if (memberType === "uint256") {
        decodedValues[memberLabel] = ethers.toBigInt(
          slotValue.slice(offset, offset + 64)
        );
        offset += 64;
      } else if (memberType === "uint128") {
        decodedValues[memberLabel] = ethers.toBigInt(
          slotValue.slice(offset, offset + 32)
        );
        offset += 32;
      }
      // Add cases for other types as necessary
    });

    return decodedValues;
  }

  async function processStruct(
    type: any,
    baseSlot: bigint,
    label: string,
    depth: number
  ): Promise<StorageDataType[]> {
    const result: StorageDataType[] = [];
    let offsetSlot = baseSlot;

    for (const member of type.members) {
      const memberTypeId = member.type.trim();
      const memberType = storageLayout.types[memberTypeId];
      const memberLabel = `${label}.${member.label}`;

      if (memberType.label.startsWith("struct ")) {
        const nested = await processStruct(
          memberType,
          offsetSlot,
          memberLabel,
          depth + 1
        );
        result.push(...nested);
      } else {
        const val = await getStorageValue(offsetSlot.toString());

        // Check if the value is packed and decode
        if (memberType.label.includes("packed")) {
          const packedDecoded = decodePackedStructValues(val, memberType);
          for (const [key, value] of Object.entries(packedDecoded)) {
            result.push({
              slot: offsetSlot.toString(),
              value: `${value}`,
              label: `${memberLabel}.${key}`,
              noOfParents: depth,
            });
          }
        } else {
          result.push({
            slot: offsetSlot.toString(),
            value: val,
            label: memberLabel,
            noOfParents: depth,
          });
        }
      }

      offsetSlot += 1n;
    }

    return result;
  }

  async function processStorage(
    layout: any,
    storageItems: any[],
    depth = 0
  ): Promise<StorageDataType[]> {
    let result: StorageDataType[] = [];

    for (const item of storageItems) {
      const label = item.label;
      const typeId = item.type.trim();
      const slot = BigInt(item.slot);
      const typeInfo = layout.types[typeId];
      const typeLabel = typeInfo.label;

      if (typeLabel.startsWith("struct ")) {
        const nested = await processStruct(typeInfo, slot, label, depth + 1);
        result.push(...nested);
      } else if (
        typeId.startsWith("t_array") &&
        typeId.endsWith("dyn_storage")
      ) {
        const array = await processDynamicArray(slot, label, depth);
        result.push(...array);
      } else if (typeId.startsWith("t_array") && typeId.includes("_storage")) {
        const array = await processFixedArray(typeInfo, slot, label, depth);
        result.push(...array);
      } else if (
        typeId.includes("string") ||
        typeId.includes("bytes_storage")
      ) {
        const val = await getDynamicBytesOrString(slot);

        result.push({
          slot: slot.toString(),
          value: val,
          label,
          noOfParents: depth,
        });
      } else {
        const val = await getStorageValue(slot.toString());
        result.push({
          slot: slot.toString(),
          value: val,
          label,
          noOfParents: depth,
        });
      }
    }

    return result;
  }

  async function getStorageValue(slot: number | string): Promise<string> {
    const provider = new ethers.JsonRpcProvider("http://localhost:8545");

    const slotHex = toSlotHex(slot);

    return provider.getStorage(contractAddress, slotHex);
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Solidity Storage Inspector</h1>
      <ul className="space-y-2">
        {storageData.map((entry, i) => (
          <li key={i} className="ml-4">
            <strong>{entry.label}</strong> @ slot <code>{entry.slot}</code> →{" "}
            <code>{entry.value}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StorageLayout;
