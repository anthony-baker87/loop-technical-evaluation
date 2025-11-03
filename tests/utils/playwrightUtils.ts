import { Locator, Page, expect } from "@playwright/test";

export async function login(page: Page) {
  // baseURL is loaded via playwright.config.ts
  await page.goto("/");

  const emailInput = page.locator("#username");
  const passwordInput = page.locator("#password");
  const submitBtn = page.locator("//button[@type='submit']");

  // await emailInput.fill(process.env.LOGIN_EMAIL || "");
  // await passwordInput.fill(process.env.LOGIN_PASSWORD || "");

  await fillSecret(emailInput, process.env.LOGIN_EMAIL || "");
  await fillSecret(passwordInput, process.env.LOGIN_PASSWORD || "");

  await submitBtn.click();
}

export async function navigateToNavItem(page: Page, navItem: string) {
  const webAppButton = page.locator(`//nav//button//h2[text()='${navItem}']`);
  await expect(webAppButton, `${navItem} is not visible.`).toBeVisible();
  await webAppButton.click();
}

export async function assertPageLoaded(page: Page, headerName: string) {
  await expect(
    page.getByRole("heading", { level: 1, name: new RegExp(headerName, "i") }),
    `Expected page heading "${headerName}" to be visible after navigation`
  ).toBeVisible();
}

export function getColumnByName(page: Page, columnName: string): Locator {
  return page.locator(`//h2[(text()='${columnName}')]/following-sibling::*`);
}

export function getCardInColumn(column: Locator, cardTitle: string): Locator {
  return column.locator(
    `//h3[text()='${cardTitle}']/ancestor::div[contains(@class,'bg-white')]`
  );
}

export function getTagsInCard(card: Locator, tag: string): Locator {
  return card.locator(`//span[text()='${tag}']`);
}

export function checkConsoleErrors(page: Page): string[] {
  const errors: string[] = [];

  // Listen for console errors
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const text = msg.text();
      const location = msg.location();
      console.log(`BROWSER ERROR: ${text}`);
      console.log(`LOCATION: ${location.url}`);
      errors.push(
        `${text}${
          location.url ? ` @ ${location.url}:${location.lineNumber}` : ""
        }`
      );
    }
  });

  return errors;
}

/**
 * Sets an input's value without exposing it to the Playwright reporter.
 * Fires input/change events so frameworks (React, etc.) see the update.
 */
export async function fillSecret(locator: Locator, value: string) {
  await locator.evaluate((el, v) => {
    const input = el as HTMLInputElement;
    // Use native setter so React/controlled inputs update correctly
    const proto = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    );
    proto?.set?.call(input, v);
    // Notify listeners
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }, value);
}
