import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("frontend entry page mounts the Jarvis React application", async () => {
  const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Hrm<\/title>/);

  const app = await readFile(new URL("./src/App.jsx", import.meta.url), "utf8");
  assert.match(app, /<AdminLayout/);
  assert.match(app, /<DashboardPage/);
  assert.match(app, /<LoginPage/);
});
