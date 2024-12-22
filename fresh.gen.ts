// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $image_slug_ from "./routes/image/[slug].ts";
import * as $index from "./routes/index.tsx";
import * as $Hero from "./islands/Hero.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/image/[slug].ts": $image_slug_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Hero.tsx": $Hero,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
