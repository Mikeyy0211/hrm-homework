import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    timeout: 30_000,
    use: {
        baseURL: process.env.HRM_BASE_URL || "http://localhost:5167",
        launchOptions: {
            executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
        }
    }
});
