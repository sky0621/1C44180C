import skyTokenArtifacts from "../artifacts/contracts/skyt.sol/SkyToken.json";
import { getNetworkInfo, getOwnerInfo, NetworkInfo, OwnerInfo } from "./util";
import { ethers } from "ethers";
import { upgrades } from "hardhat";

const main = async () => {
  const networkInfo: NetworkInfo = getNetworkInfo();
  console.table(networkInfo);

  const ownerInfo: OwnerInfo = getOwnerInfo();
  console.table(ownerInfo);

  const factory = await ethers.getContractFactory("SkyToken");
  console.info("got factory");

  const contract = await upgrades.deployProxy(factory, [1234567890.12]);
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
