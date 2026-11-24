import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const src = join(root, "entry.png");
const dst = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(src, dst);
console.log("wrote", dst);
// copy entry.png into the output directory for judging.