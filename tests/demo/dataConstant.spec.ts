import { test, expect, Locator } from "@playwright/test";

import Constant1 from "../../data/constants.json";
import { json } from "node:stream/consumers";

test("let another class data", async ({ page }) => {
  console.log(JSON.stringify(Constant1.statusCode));
});
