import { test, expect } from "@playwright/test";

test.describe("checkbox function test", () => {
  test.beforeEach("check function works", async ({ page }) => {
   await page.goto('https://www.testing.ledsak.ai/');
  const closeWindow= page.getByRole('button', { name: 'Close video' })

  if(await closeWindow.isVisible()){
    await closeWindow.click()
  }

  const loginButton= page.getByRole('link', { name: 'Login' })

  if(await loginButton.isVisible()){
    await loginButton.click()
  }
  await page.getByRole('textbox', { name: 'example@gmail.com' }).click();
  await page.getByRole('textbox', { name: 'example@gmail.com' }).fill('demo@ledsak.ai');
  await page.getByRole('button', { name: 'Login with Email' }).click();
  await page.getByRole('textbox').fill('753159');
  });

  test("test checkbox work", async ({ page }) => {
  await page.getByTitle('Leads').click()
  const allCheckBox= page.locator('//button[@role="checkbox"]')
  await allCheckBox.first().waitFor({state:'visible'})

  for(let checkedAll of await allCheckBox.all()){
    await checkedAll.click({delay:200})
  }

  });
});
