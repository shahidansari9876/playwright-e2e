import { test, expect } from "@playwright/test";

test("should be fill sing up  form ", async ({ page }) => {
  await page.goto("about:blank");
  await page.goto("https://www.testing.ledsak.ai/");
  const closeWindow = page.getByRole("button", { name: "Close video" });

  if (await closeWindow.isVisible()) {
    await closeWindow.click();
  }
  await page.getByRole("link", { name: "Sign up" }).click();
  await page.getByRole("textbox", { name: "Full Name" }).click();
  const fullNameBox = page.getByRole("textbox", { name: "Full Name" });
  await fullNameBox.click();
  await fullNameBox.fill("shahid ansari");
  await fullNameBox.clear();
  await fullNameBox.pressSequentially("shahid ansari", { delay: 300 });

  let optionList = await page
    .locator('(//select[@aria-hidden="true"])[2]').all();
  let storeOption = [];
  for (let list of optionList) {
    let allele = await list.textContent();
    if (allele) {
      storeOption.push(allele);
    }
  }
  console.log(storeOption);
});
