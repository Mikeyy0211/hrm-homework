import { access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));
await access(join(root, "playwright.config.js"));
await access(join(root, "tests", "smoke.spec.js"));

console.log("Autotest build complete: Playwright config and smoke tests are present.");
