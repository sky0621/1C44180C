import { getFeeData } from "@/lib/ethers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const PREFIX = "[api/fee][GET]";
  const apiKey = process.env.INFURA_API_KEY;

  const feeData = await getFeeData(apiKey);
  console.log(PREFIX + " feeData: " + feeData);

  return new NextResponse(JSON.stringify({ feeData: feeData }));
}
