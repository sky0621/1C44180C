import { NextResponse } from "next/server";

export const callGetApi = async (path: string) => {
  const url =
    process.env.NEXT_PUBLIC_API_PROTOCOL +
    "://" +
    process.env.NEXT_PUBLIC_API_FQDN +
    "/api" +
    path;

  const init: RequestInit = {
    method: "GET",
    headers: new Headers([["Content-Type", "application/json"]]),
    cache: "no-store",
  };

  let data: any;
  try {
    const res = await fetch(url, init);
    if (res.ok) {
      data = await res.json();
    }
  } catch (e: any) {
    console.error(e);
    throw e;
  }

  if (data) {
    return NextResponse.json(data);
  }

  return new NextResponse(
    JSON.stringify({ success: false, message: "Internal Server Error" }),
    {
      status: 500,
      headers: { "content-type": "application/json" },
    } as ResponseInit,
  );
};
