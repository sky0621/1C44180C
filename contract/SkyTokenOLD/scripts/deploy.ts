import { ethers, upgrades } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("SkyTokenOLD");
  console.info("got factory");

  const contract = await upgrades.deployProxy(factory, [1234567890.12]);
  await contract.waitForDeployment();
  console.info("Deploy completed");
  console.info(await contract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
