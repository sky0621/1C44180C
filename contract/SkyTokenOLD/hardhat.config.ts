import * as dotenv from "dotenv"; // 他より先に読み込む必要があるらしい
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  paths: {
    root: "./contracts",
  },
  networks: {
    sepolia: {
      url: String(process.env.SEPOLIA_RPC_PROVIDER_URL!),
      accounts: [String(process.env.PRIVATE_KEY!)],
    },
    goerli: {
      url: String(process.env.GOERLI_RPC_PROVIDER_URL!),
      accounts: [String(process.env.PRIVATE_KEY!)],
    },
    mumbai: {
      url: String(process.env.MUMBAI_RPC_PROVIDER_URL!),
      accounts: [String(process.env.PRIVATE_KEY!)],
    },
  },
};

export default config;
