import { ethers, upgrades } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("SkyTokenV2");
  console.info("got factory");
  console.info(factory);

  const contract = await upgrades.upgradeProxy(
    "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    factory,
  );
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
