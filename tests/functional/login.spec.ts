import { test, expect } from '@playwright/test';


test.describe("ledsak login and verify all lead link", ()=> {

  test('test', async ({ page }) => {
  await page.goto('about:blank');
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
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
  await page.getByRole('button', { name: 'Today' }).click();
  
});

test('test matching with all lead to lead table', async ({ page }) => {
  await page.goto('about:blank');
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
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
  
  await expect(page.getByRole('link', { name: 'All Leads' })).toBeVisible();
  await page.getByRole('link', { name: 'All Leads' }).click();
  await expect(page.getByRole('combobox').filter({ hasText: 'All Leads' })).toBeVisible();
  
});
})


