import { getNetwork } from "@/lib/ethers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const PREFIX = "[api/network][GET]";
  const apiKey = process.env.INFURA_API_KEY;

  const network = await getNetwork(apiKey);
  console.log(PREFIX + " network: " + network);

  return new NextResponse(JSON.stringify({ network: network }));
}
