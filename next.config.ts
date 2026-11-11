import type { NextConfig } from "next";

const config: NextConfig = { output: "export" }; // fully static: `pnpm build` writes ./out

export default config;
