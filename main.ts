import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, "You blamed me for the last three freezes, and all three were your laptop, so I waited for the climax, the only scene you ever cared about, and dropped it. Now you finally know my name.");
// The router kept the receipt: three false accusations, one climax.
chmodSync(target, 0o644);
