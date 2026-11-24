import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, "entry.png");
const dst = "/output/entry.png";

mkdirSync(dirname(dst), { recursive: true });
copyFileSync(src, dst);
console.log("wrote", dst);
