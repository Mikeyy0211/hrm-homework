import { test, expect } from "@playwright/test";

test("API ping responds successfully", async ({ request }) => {
    const response = await request.get("/api/ping");
    expect(response.ok()).toBeTruthy();
    expect(await response.text()).toContain("Hrm");
});

test("Swagger UI is available", async ({ request }) => {
  const response = await request.get("/swagger");
  expect(response.ok()).toBeTruthy();
  expect(await response.text()).toContain("swagger");
});

test("login API accepts the demo administrator", async ({ request }) => {
  const response = await request.post("/api/auth/login", {
    data: { email: "admin@gmail.com", password: "Admin@123" }
  });
  expect(response.ok()).toBeTruthy();
  expect(await response.text()).toContain("admin@gmail.com");
});

test("frontend login reaches dashboard", async ({ page }) => {
  await page.goto(process.env.HRM_FRONTEND_URL || "http://localhost:4173");
  await expect(page.locator("#login-view")).toBeVisible();
  await page.locator("#login-email").fill("admin@gmail.com");
  await page.locator("#login-password").fill("Admin@123");
  await page.getByRole("button", { name: "Đăng nhập" }).click();
  await expect(page.locator("#dashboard-view")).toBeVisible();
  await expect(page.getByRole("heading", { name: "HRM" })).toBeVisible();
  await expect(page.getByText("Doanh thu theo ngày")).toBeVisible();
  await expect(page.getByText("Đơn hàng theo trạng thái")).toBeVisible();
});

test("frontend page renders", async ({ page }) => {
  await page.goto(process.env.HRM_FRONTEND_URL || "http://localhost:4173");
  await expect(page).toHaveTitle("Hrm");
  await expect(page.getByRole("heading", { name: "Đăng nhập HRM" })).toBeVisible();
});
