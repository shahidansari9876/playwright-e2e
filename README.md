# Playwright E2E Tests

End-to-end test suite built with [Playwright](https://playwright.dev/). Tests are located in the `e2e/` directory and run against Chromium, Firefox, and WebKit, as configured in `playwright.config.ts`.

## Prerequisites

- Node.js 18 or later
- npm

## Project setup

1. Clone the repository and open the project directory.

   ```bash
   git clone <repository-url>
   cd PLAYWRGHT-E2E-TESTS
   ```

2. Install the project dependencies.

   ```bash
   npm ci
   ```

   Use `npm install` if you are adding or updating dependencies.

3. Install the Playwright browser binaries.

   ```bash
   npx playwright install
   ```

   On Linux, install any required system dependencies with:

   ```bash
   npx playwright install-deps
   ```

4. Create a local environment file when your tests need environment-specific values.

   ```bash
   cp .env.example .env
   ```

   `.env` is ignored by Git. The current example tests do not require environment variables.

## Run tests

Run the full suite in all configured browsers:

```bash
npx playwright test
```

Useful alternatives:

```bash
npx playwright test --project=chromium  # Run only Chromium tests
npx playwright test --headed            # Run with a visible browser
npx playwright test --debug             # Run tests in Playwright Inspector
```

## View the HTML report

After a test run, open the generated report with:

```bash
npx playwright show-report
```

## Add a test

Add Playwright spec files to `e2e/`. For example:

```ts
import { expect, test } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```
