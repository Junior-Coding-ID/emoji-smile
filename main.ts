import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🌞";

// Satu matahari berwajah: hangat dan ceria buat orang asing tanpa
// perlu konteks, tanpa kesan intim — senyum yang universal.

// Guard: entry harus tepat satu emoji, satu karakter.
if ([...EMOJI].length !== 1) {
  throw new Error("entry harus tepat satu emoji");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
