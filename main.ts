import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, at most 240 characters: a pitch to a friend who has never
// coded, inviting them to let an AI agent build their first app idea.
const LINE =
  "You've been carrying that app idea around for a year, so tonight just tell it to an AI agent on make.fun, watch it get built while your tea brews, and if it's not for you, all you've spent is an evening you'd have lost to scrolling anyway.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), LINE);
