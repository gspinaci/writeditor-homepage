import type { NextConfig } from "next";

// fully static: `pnpm build` writes ./out. BASE_PATH is set in CI for the github.io project URL; unset for a custom domain.
const config: NextConfig = { output: "export", basePath: process.env.BASE_PATH };

export default config;
