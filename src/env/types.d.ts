type Env = Partial<Readonly<typeof import("./env")>>;

declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly DATABASE_URL: string;
    readonly EXTERNAL_API_PROTOCOL: string;
    readonly EXTERNAL_API_FQDN: string;
    readonly NEXT_PUBLIC_API_PROTOCOL: string;
    readonly NEXT_PUBLIC_API_FQDN: string;
    readonly INFURA_API_KEY: string;
    readonly TO_ADDRESS: string;
  }
}
