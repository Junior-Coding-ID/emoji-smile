// One Emoji, One Smile — v1: a sun with a face.
// The entry is exactly one emoji: U+1F31E SUN WITH FACE.
// One character, 4 bytes in UTF-8. No trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🌞";

// Why this one: a smiling sun reads warm and friendly at first glance,
// is understood the same way by a stranger of any age, and carries no
// intimacy, sarcasm or flirtation — and it is a more deliberate pick
// than the plain default smiley.

if ([...EMOJI].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
