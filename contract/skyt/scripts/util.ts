export type NetworkInfo = {
  rpcProviderUrl: string;
  transactionUrlBase: string;
};

export const getNetworkInfo = (): NetworkInfo => {
  const useNetwork: string = process.env.USE_NETWORK ?? "";
  if (useNetwork === "") {
    throw new Error("no env: USE_NETWORK");
  }
  console.info("useNetwork: ", useNetwork);

  let rpcProviderUrl: string = "";
  let transactionUrlBase: string = "";
  switch (useNetwork) {
    case "sepolia":
      rpcProviderUrl = process.env.SEPOLIA_RPC_PROVIDER_URL ?? "";
      transactionUrlBase = process.env.SEPOLIA_TRANSACTION_URL_BASE ?? "";
      break;
    case "goerli":
      rpcProviderUrl = process.env.GOERLI_RPC_PROVIDER_URL ?? "";
      transactionUrlBase = process.env.GOERLI_TRANSACTION_URL_BASE ?? "";
      break;
    case "mumbai":
      rpcProviderUrl = process.env.MUMBAI_RPC_PROVIDER_URL ?? "";
      transactionUrlBase = process.env.MUMBAI_TRANSACTION_URL_BASE ?? "";
      break;
  }
  if (rpcProviderUrl === "") {
    throw new Error("no env: XXXX_RPC_PROVIDER_URL");
  }
  if (transactionUrlBase === "") {
    throw new Error("no env: XXXX_TRANSACTION_URL_BASE");
  }

  return {
    rpcProviderUrl,
    transactionUrlBase,
  };
};

export type PrivateInfo = {
  privateKey: string;
};

export const getPrivateInfo = (): PrivateInfo => {
  const privateKey: string = process.env.PRIVATE_KEY ?? "";
  if (privateKey === "") {
    throw new Error("no env: PRIVATE_KEY");
  }
  return {
    privateKey,
  };
};

export type MintInfo = {
  toAddress: string;
  amount: number;
};

export const getMintInfo = (): MintInfo => {
  const toAddress: string = process.env.MINT_TO_ADDRESS ?? "";
  if (toAddress === "") {
    throw new Error("no env: MINT_TO_ADDRESS");
  }
  const amount: number = Number(process.env.MINT_AMOUNT) ?? 0;
  if (amount === 0) {
    throw new Error("no env: MINT_AMOUNT");
  }
  return {
    toAddress,
    amount,
  };
};

export type ContractInfo = {
  address: string;
};

export const getContractInfo = (): ContractInfo => {
  const address: string = process.env.CONTRACT_ADDRESS ?? "";
  if (address === "") {
    throw new Error("no env: CONTRACT_ADDRESS");
  }
  return {
    address,
  };
};
