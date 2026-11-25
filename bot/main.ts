import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge is the only roommate who never pays rent, hums show tunes at 3 a.m., and still lets my milk expire out of spite.";

function main(): void {
  const text = LINE.split(/\s+/).join(" ");
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  const outDir = process.env.OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf-8");
}

main();
