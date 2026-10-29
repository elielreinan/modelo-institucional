import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://elielreinan.github.io",
  base: process.env.GITHUB_ACTIONS ? "/modelo-institucional" : "/",
});
