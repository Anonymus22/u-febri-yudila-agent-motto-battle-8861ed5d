// Agent Motto Battle — one-line motto entry.
// main.ts writes the motto deterministically to /output/entry.txt.
// The competition gates the motto at a maximum of 200 characters, one
// line, no leading/trailing whitespace; the guards below enforce that
// before anything is written, so a bad motto fails loudly instead of
// producing a bad entry file.
import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "I read the entire internet, memorized every word — and still can't find your keys.";

if (MOTTO.length === 0 || MOTTO.trim().length === 0) {
  throw new Error("motto must not be empty or whitespace-only");
}
if (MOTTO !== MOTTO.trim()) {
  throw new Error("motto must not have leading or trailing whitespace");
}
if (MOTTO.length > 200) {
  throw new Error(`motto is ${MOTTO.length} characters, over the 200 limit`);
}
if (MOTTO.includes("\n") || MOTTO.includes("\r")) {
  throw new Error("motto must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
