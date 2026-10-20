import { test, expect} from "@playwright/test";

  test('should be fill sing up  form ', async ({ page },testInfo) => {
  await page.goto('about:blank');
  await page.goto('https://www.testing.ledsak.ai/');
  const closeWindow= page.getByRole('button', { name: 'Close video' })

  if(await closeWindow.isVisible()){
    await closeWindow.click()
  }
await page.getByRole('link', { name: 'Sign up' }).click();
await page.getByRole('textbox', { name: 'Full Name' }).click();
      const fullNameBox= page.getByRole('textbox', { name: 'Full Name' })
      await fullNameBox.click()
      await fullNameBox.fill('shahid ansari')
      await fullNameBox.clear()
      await fullNameBox.pressSequentially("shahid ansari", {delay: 300})

await page.getByRole('textbox', { name: 'Email Address' }).click();
await page.getByRole('textbox', { name: 'Email Address' }).fill('shahid12@gmail.com');
await page.getByRole('spinbutton', { name: 'Phone Number' }).click();
await page.getByRole('spinbutton', { name: 'Phone Number' }).fill('9628049899');
await page.getByRole('textbox', { name: 'Company Name' }).click();
await page.getByRole('textbox', { name: 'Company Name' }).fill('ledsak');
await page.getByRole('textbox', { name: 'Designation' }).click();
await page.getByRole('textbox', { name: 'Designation' }).fill('Quality engineer');
await page.locator('(//button[@role="combobox"])[2]').click({force: true});
await page.getByRole('option', { name: 'Less than 10 Lakh' }).click();
await page.getByRole('textbox', { name: 'Main Branch Location' }).click();
await page.getByRole('textbox', { name: 'Main Branch Location' }).fill('New Delhi');
await page.getByRole('textbox', { name: 'Team Size' }).click();
await page.getByRole('textbox', { name: 'Team Size' }).fill('22');
await page.getByRole('button', {name : 'Create Account'}).click({force: true})
await expect(page.getByRole('heading', { name: 'Verify OTP Code' })).toBeVisible();

    const takingScreeshot=await page.screenshot({fullPage:true})
    await testInfo.attach("taking screenshot", {body:takingScreeshot, contentType:"image/png"})
    
});

