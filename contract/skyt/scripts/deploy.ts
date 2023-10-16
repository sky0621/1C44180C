import { ethers } from "hardhat";
import skyTokenArtifacts from "../artifacts/contracts/skyt.sol/SkyTokenOLD.json";
import { getNetworkInfo, getOwnerInfo, NetworkInfo, OwnerInfo } from "./util";

const main = async () => {
  const networkInfo: NetworkInfo = getNetworkInfo();
  console.table(networkInfo);

  const ownerInfo: OwnerInfo = getOwnerInfo();
  console.table(ownerInfo);

  const provider = new ethers.JsonRpcProvider(networkInfo.rpcProviderUrl);
  console.info("got provider");

  const wallet = new ethers.Wallet(ownerInfo.privateKey, provider);
  console.info("got wallet");

  const factory = new ethers.ContractFactory(
    skyTokenArtifacts.abi,
    skyTokenArtifacts.bytecode,
    wallet,
  );
  console.info("got factory");

  const contract = await factory.deploy(13000000);
  await contract.waitForDeployment();
  console.info("Deploy completed");

  console.info(
    `${
      skyTokenArtifacts.contractName
    } contract deploy address: ${await contract.getAddress()}`,
  );
  console.info(
    `Transaction URL: ${
      networkInfo.transactionUrlBase
    }${contract.deploymentTransaction()?.hash}`,
  );
};

main().catch((e) => {
  console.error(e);
});
