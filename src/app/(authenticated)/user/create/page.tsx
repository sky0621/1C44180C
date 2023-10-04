import { ethers } from "ethers";

const UserCreatePage = () => {
  const wallet = ethers.Wallet.createRandom();
  console.log(wallet);
  console.log(wallet.privateKey);
  return (
    <>
      <div></div>
    </>
  );
};

export default UserCreatePage;
