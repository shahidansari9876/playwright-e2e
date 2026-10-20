/* 
launch the url- "https://ledsak.ai"

verify the title

verify the heade 
*/

import { test, expect, Locator } from "@playwright/test";

test("to verify the url", async ({ page }) => {
  //launch the url
  await page.goto("https://ledsak.ai");

  //check weather popup open or not

  const closeVideo = await page.getByLabel("Close video");
  await closeVideo.visible().click();

  //verify the title
  expect(page).toHaveTitle(
    "All-in-One AI CRM & Sales Automation Software - LEDSAK",
  );

  //verity the page header
  //    const header:Locator=  page.locator('//h1')
  //    expect(header).toHaveText('Ledsak: AI-Powered CRM Built for Smarter Sales')

  expect(page.locator("//h1")).toHaveText(
    "Ledsak: AI-Powered CRM Built for Smarter Sales",
  );
});
