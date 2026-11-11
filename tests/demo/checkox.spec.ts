import { test, expect } from "@playwright/test";

test.describe("checkbox function test", () => {
  test.beforeEach("check function works", async ({ page }) => {
    await page.goto("https://www.testing.ledsak.ai/");
    const closeWindow = page.getByRole("button", { name: "Close video" });

    if (await closeWindow.isVisible()) {
      await closeWindow.click();
    }

    const loginButton = page.getByRole("link", { name: "Login" });

    if (await loginButton.isVisible()) {
      await loginButton.click();
    }
    await page.getByRole("textbox", { name: "example@gmail.com" }).click();
    await page
      .getByRole("textbox", { name: "example@gmail.com" })
      .fill("demo@ledsak.ai");
    await page.getByRole("button", { name: "Login with Email" }).click();
    await page.getByRole("textbox").fill("753159");
  });

  test("test checkbox work", async ({ page }) => {
    const infoFirst = page.getByRole("dialog");

    if (await infoFirst.isVisible()) {
      // Close the information dialog
      await page
        .locator('(//button[@type="button"])[9]')
        .click({ force: true });

      // Click Got it if it is visible
      const gotItButton = page.getByRole("button", { name: "Got it" });

      if (await gotItButton.isVisible()) {
        await gotItButton.click();
      }
    }

    await page.getByText("Leads", { exact: true }).click();

    const allCheckBox = page.locator('//button[@role="checkbox"]');
    await allCheckBox.first().waitFor({ state: "visible" });

    for (let checkedAll of await allCheckBox.all()) {
      await checkedAll.click({ delay: 200 });
    }
  });
});
