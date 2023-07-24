import { getUser } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const user = await getUser(1);
    console.log(user);
    return new NextResponse(JSON.stringify(user));
  } catch (e: unknown) {
    console.error(e);
    throw e;
  }
}
