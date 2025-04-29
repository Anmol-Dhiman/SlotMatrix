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
  balance?: string;
};
