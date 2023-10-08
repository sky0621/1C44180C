const main = async () => {
  console.info(process.env.PRIVATE_KEY);
  console.info(process.env.SEPOLIA_URL);
  console.info(process.env.GOERLI_URL);
  console.info(process.env.MUMBAI_URL);
};

main().catch((e) => {
  console.error(e);
});
