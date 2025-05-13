export type Input = {
  name: string;
  type: string;
  value: string;
};

export type Output = Input;

export type FuncState = {
  name?: string;
  stateMutability: string;
  inputs: Input[];
  outputs?: string;
};

export type ABIEntry = {
  type: string;
  name?: string;
  stateMutability: string;
  inputs?: { name: string; type: string; internalType: string }[];
  outputs?: { name: string; type: string; internalType: string }[];
};

export type DeployedContract = {
  name: string;
  address: string;
  functions: FuncState[];
  abi: any;
  balance: string;
  refreshTick: number;
  storageLayout: any;
};

export type LogData = {
  heading: string;
  status: string;
  transactionHash?: string;
  blockHash?: string;
  blockNumber?: number;
  contractAddress?: string;
  from: string;
  to: string;
  gas: string;
  transactionCost?: string;
  executionCost?: string;
  input: string;
  output: string;
  decodedInput: Record<string, any>;
  decodedOutput: Record<string, any>;
  eventLogs?: any[];
  rawLogs?: any[];
};

export type WalletData = {
  privateKey: string;
  publicKey: string;
  balance: number;
};
