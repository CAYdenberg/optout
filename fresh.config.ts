import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import wordfresh from "wordfresh";

export default defineConfig({
  plugins: [
    tailwind(),
    wordfresh((config) => ({
      ...config,

      // purge: true,

      siteTitle: "OptOut",
      siteDescription: "A experiment in rewilding the internet",
      siteUrl: Deno.env.get("SITE_URL") || "http://localhost:8000",
      siteMainAuthor: {
        name: "Casey A. Ydenberg",
      },
      buildAttachments: !Deno.env.get("SITE_URL"),
    })),
  ],
});
