import { getBalance } from "@/lib/ethers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const PREFIX = "[api/balance][GET]";
  const apiKey = process.env.INFURA_API_KEY;
  console.log(PREFIX + " apiKey: " + apiKey);
  const toAddress = process.env.TO_ADDRESS;
  console.log(PREFIX + " toAddress: " + toAddress);

  const balance = await getBalance(apiKey, toAddress);
  console.log(PREFIX + " balance: " + balance);

  return new NextResponse(JSON.stringify({ balance: balance }));
}
