export async function external(path: string) {
  const protocol = process.env.EXTERNAL_API_PROTOCOL;
  const fqdn = process.env.EXTERNAL_API_FQDN;
  const url = protocol + "://" + fqdn + path;

  let data: any;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: new Headers([["Content-Type", "application/json"]]),
      cache: "no-store",
    });

    if (res && res.ok) {
      data = await res.json();
    }
  } catch (e: any) {
    throw e;
  }
  return data;
}
