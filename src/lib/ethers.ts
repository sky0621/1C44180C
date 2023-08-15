import { ethers } from "ethers";

const getProvider = (apiKey: string) => {
  console.log(apiKey);
  return ethers.getDefaultProvider("maticmum", {
    infura: apiKey,
  });
};

export const getBalance = async (apiKey: string, toAddress: string) => {
  const b = await getProvider(apiKey).getBalance(toAddress);
  return ethers.formatEther(b);
};

export const getNetwork = async (apiKey: string) => {
  return getProvider(apiKey).getNetwork();
};

export const getFeeData = async (apiKey: string) => {
  return getProvider(apiKey).getFeeData();
};
