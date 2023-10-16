import { ethers, upgrades } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("Box.sol");
  console.info("got factory");
  console.info(factory);

  const contract = await upgrades.deployProxy(factory, [42], {
    initializer: "store",
  });
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
