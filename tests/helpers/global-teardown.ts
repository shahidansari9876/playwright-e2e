import { type FullConfig } from "@playwright/test";
import { execSync } from "child_process";
import path from "path";
import fs from "fs";

export default async function globalTeardown(config: FullConfig) {
  console.log(`[INFO]: Starting global teardown...`);

  // Only auto-serve Allure on local runs
  if (process.env.RUNNER?.trim().toUpperCase() === "LOCAL") {
    const resultsDir = path.resolve(process.cwd(), "allure-results");
    const reportDir = path.resolve(process.cwd(), "allure-report");

    // Guard: only generate if allure-results actually has data
    if (!fs.existsSync(resultsDir) || fs.readdirSync(resultsDir).length === 0) {
      console.warn(`[WARN]: No allure-results found at: ${resultsDir}, skipping report generation.`);
      return;
    }

    try {
      console.log(`[INFO]: Generating Allure report into: ${reportDir}`);
      execSync(
        `npx allure generate ${resultsDir} --clean -o ${reportDir}`,
        { stdio: "inherit", cwd: process.cwd() }
      );
      console.log(`[INFO]: Allure report generated successfully.`);

      console.log(`[INFO]: Opening Allure report in browser...`);
      execSync(`npx allure open ${reportDir}`, {
        stdio: "inherit",
        cwd: process.cwd(),
      });
    } catch (err) {
      console.error(`[ERROR]: Failed to generate/open Allure report:`, err);
    }
  }

  console.log(`[INFO]: Global teardown complete.`);
}
