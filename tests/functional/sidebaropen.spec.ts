import { test, expect } from "@playwright/test";

test.describe(
  "sample testing",
  { annotation: { type: "bug", description: "namigtion of login page" } },
  () => {
    test(
      "test login to navigation",
      {
        annotation: {
          type: "find the page of login",
          description: "my test login page",
        },
        tag: "@smoke",
      },
      async ({ page }) => {
        const email = "shahid.ansari@ledsak.ai";

        await page.goto("https://testing.ledsak.ai/?masterOtp=true");
        await page.getByPlaceholder("example@gmail.com").fill(email);
        await page.getByRole("button", { name: "Login with Email" }).click();

        await page.locator('//input[@name="otp"]').fill("753159");

        await expect(page.locator("//h1")).toContainText("Welcome");
      },
    );

    test(
      "test login to side expand",{ tag: "@smoke" }, async ({ page }, testInfo) => {
        const email = "shahid.ansari@ledsak.ai";

        await page.goto("https://testing.ledsak.ai/?masterOtp=true");
        await page.getByPlaceholder("example@gmail.com").fill(email);

        const loginButon = await page.getByRole("button", {
          name: "Login with Email",
        });
        await loginButon.isVisible();
        await loginButon.hover();
        await loginButon.click({ force: true });

        await page.locator('//input[@name="otp"]').fill("753159");

        await expect(page.locator("//h1")).toContainText("Welcome");

        //open sider expand
        await page.getByTitle("Sidebar Toggle").click();
        const takeScreenshot = await page.screenshot({ fullPage: true });
        testInfo.attach("screenshot", {
          body: takeScreenshot,
          contentType: "image/png",
        });
      },
    );
  },
);
