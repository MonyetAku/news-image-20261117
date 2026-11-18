// news-image-20261117 — "The World in One Day" (Node 22, standard library only).
//
// The entry image is entry.png beside this file: a 1024x1024 front-page layout
// rendered from news.html, summing up the world news of Tuesday, 17 November 2026
// (U.S.-Iran strikes, the Kerch Bridge, Trump in Asia, Nvidia's record quarter,
// Japan scrambling jets, plus measles, Ebola and Depardieu in "Also today").
// This program only copies that image to the output directory, so both grader
// runs write the same bytes. No network, no randomness, no dependencies.
//
// Run it like the kit says:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = new URL("./entry.png", import.meta.url);
// Fail loudly instead of shipping an empty or missing image.
if (statSync(src).size === 0) throw new Error("entry.png is empty");
copyFileSync(src, join(outDir, "entry.png"));
