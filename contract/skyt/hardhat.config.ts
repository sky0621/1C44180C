import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  paths: {
    root: "./contracts",
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_PROVIDER_URL,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;
