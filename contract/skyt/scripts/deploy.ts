import { ethers } from "ethers";
import skyTokenArtifacts from "../artifacts/contracts/skyt.sol/SkyToken.json";

type NetworkInfo = {
  rpcProviderUrl: string;
  transactionUrlBase: string;
};

const getNetworkInfo = (): NetworkInfo => {
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

const main = async () => {
  const networkInfo: NetworkInfo = getNetworkInfo();
  console.table(networkInfo);

  const privateKey: string = process.env.PRIVATE_KEY ?? "";
  if (privateKey === "") {
    throw new Error("no env: PRIVATE_KEY");
  }
  console.table({
    privateKey,
  });

  const provider = new ethers.JsonRpcProvider(networkInfo.rpcProviderUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const factory = new ethers.ContractFactory(
    skyTokenArtifacts.abi,
    skyTokenArtifacts.bytecode,
    wallet,
  );
  const contract = await factory.deploy(5000);

  await contract.waitForDeployment();

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
  console.info("Deploy completed");
};

main().catch((e) => {
  console.error(e);
});
