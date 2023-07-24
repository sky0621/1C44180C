type Env = Partial<Readonly<typeof import("./env.json")>>;

declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly EXTERNAL_API_PROTOCOL: string;
    readonly EXTERNAL_API_FQDN: string;
    readonly NEXT_PUBLIC_API_PROTOCOL: string;
    readonly NEXT_PUBLIC_API_FQDN: string;
  }
}
