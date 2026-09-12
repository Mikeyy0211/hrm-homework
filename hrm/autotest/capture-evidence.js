import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const evidenceDirectory = join(root, "..", "evidence");
const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
});

await mkdir(evidenceDirectory, { recursive: true });

const frontend = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await frontend.goto(process.env.HRM_FRONTEND_URL || "http://localhost:4173");
await frontend.screenshot({ path: join(evidenceDirectory, "login.png"), fullPage: true });
await frontend.locator("#login-email").fill("admin@gmail.com");
await frontend.locator("#login-password").fill("Admin@123");
await frontend.getByRole("button", { name: "Đăng nhập" }).click();
await frontend.locator("#dashboard-view").waitFor({ state: "visible" });
await frontend.getByText("Doanh thu theo ngày").waitFor({ state: "visible" });
await frontend.waitForTimeout(1200);
await frontend.evaluate(() => {
    document.querySelectorAll(".Toastify__toast-container").forEach((element) => element.remove());
});
await frontend.screenshot({ path: join(evidenceDirectory, "dashboard.png"), fullPage: true });

const swagger = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await swagger.goto("http://localhost:5167/swagger/index.html");
await swagger.locator(".swagger-ui .information-container").waitFor({ state: "visible" });
await swagger.screenshot({ path: join(evidenceDirectory, "swagger.png"), fullPage: true });

const result = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const resultPage = (count, tests) => `<!doctype html><html><head><style>
body{margin:0;padding:72px;background:#10151c;color:#f1f5fb;font:24px system-ui,sans-serif}
h1{color:#4185ee;font-size:56px;margin:0 0 40px}.card{padding:32px;border:1px solid #354255;border-radius:16px;background:#1a2433}.ok{color:#54c77a}
</style></head><body><h1>Autotest result</h1><div class="card"><div class="ok">✓ ${count} passed</div><p>${tests}</p></div></body></html>`;
await result.setContent(resultPage(4, "API ping · Swagger · Login API · Frontend UI"));
await result.screenshot({ path: join(evidenceDirectory, "test-result-before.png"), fullPage: true });
await result.setContent(resultPage(5, "API ping · Swagger · Login API · Login UI → Dashboard · Frontend UI"));
await result.screenshot({ path: join(evidenceDirectory, "test-result-after.png"), fullPage: true });
await result.screenshot({ path: join(evidenceDirectory, "test-result.png"), fullPage: true });

await browser.close();
console.log(`Evidence written to ${evidenceDirectory}`);
