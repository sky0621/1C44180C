import { NextResponse } from "next/server";
import { external } from "@/lib/external";

export async function GET(request: Request) {
  try {
    return new NextResponse(JSON.stringify(await external("/todos")));
  } catch (e: unknown) {
    console.error(e);
  }
}
