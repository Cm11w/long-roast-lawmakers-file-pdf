import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast (141 chars; gate: 1-320): lawmakers who would write the
// rules for AI, crypto and the internet, undercut by the one file format
// they cannot produce on their own. "Summon" carries the authority:
// they command people like royalty, yet only for the most trivial task.
const LINE =
  "The lawmakers who will write the rules for AI, crypto, and the entire internet still summon an intern to turn their Word document into a PDF.";
const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
