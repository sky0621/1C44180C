import { ethers } from "ethers";
import {
  ContractInfo,
  getContractInfo,
  getNetworkInfo,
  getOwnerInfo,
  NetworkInfo,
  OwnerInfo,
} from "./util";
import skyTokenArtifacts from "../artifacts/contracts/skyt.sol/SkyToken.json";

const main = async () => {
  const networkInfo: NetworkInfo = getNetworkInfo();
  console.table(networkInfo);

  const privateInfo: OwnerInfo = getOwnerInfo();
  console.table(privateInfo);

  const contractInfo: ContractInfo = getContractInfo();
  console.table(contractInfo);

  const provider = new ethers.JsonRpcProvider(networkInfo.rpcProviderUrl);
  console.info("got provider");

  const accounts = await provider.listAccounts();
  console.table(accounts);

  const wallet = new ethers.Wallet(privateInfo.privateKey, provider);
  console.info("got wallet");

  const nonce = await wallet.getNonce();
  console.info(`nonce: ${nonce}`);

  const contract = new ethers.Contract(
    contractInfo.address,
    skyTokenArtifacts.abi,
    wallet,
  );
  console.info("got contract");
};

main().catch((e) => {
  console.error(e);
});
