import { writeFileSync, mkdirSync } from "node:fs";

// One funny line, 141 characters: a concrete scene (dog vs. fridge lock)
// with the laugh landing on the last clause — the roles reverse and the
// dog ends up judging the human.
const LINE =
  "My dog learned to open the fridge, so I installed a child lock, and now he just stares at me like I'm the one who can't be trusted with food.";

// Gate self-check: mirror the scorer's rule so a bad line fails loudly
// here instead of silently scoring 0 in the sandbox.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-blank chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
