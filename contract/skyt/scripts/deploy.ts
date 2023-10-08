const main = async () => {
  const privateKey: string = process.env.PRIVATE_KEY ?? "";
  if (privateKey === "") {
    throw new Error("no env: PRIVATE_KEY");
  }

  const sepoliaUrl: string = process.env.SEPOLIA_URL ?? "";
  if (sepoliaUrl === "") {
    throw new Error("no env: SEPOLIA_URL");
  }

  const goerliUrl: string = process.env.GOERLI_URL ?? "";
  if (goerliUrl === "") {
    throw new Error("no env: GOERLI_URL");
  }

  const mumbaiUrl: string = process.env.MUMBAI_URL ?? "";
  if (mumbaiUrl === "") {
    throw new Error("no env: MUMBAI_URL");
  }

  const tokenName: string = process.env.TOKEN_NAME ?? "";
  if (tokenName === "") {
    throw new Error("no env: TOKEN_NAME");
  }

  const tokenSymbol: string = process.env.TOKEN_SYMBOL ?? "";
  if (tokenSymbol === "") {
    throw new Error("no env: TOKEN_SYMBOL");
  }

  const tokenDecimals: string = process.env.TOKEN_DECIMALS ?? "";
  if (tokenDecimals === "") {
    throw new Error("no env: TOKEN_DECIMALS");
  }

  console.table({
    privateKey,
    sepoliaUrl,
    goerliUrl,
    mumbaiUrl,
    tokenName,
    tokenSymbol,
    tokenDecimals,
  });
};

main().catch((e) => {
  console.error(e);
});
