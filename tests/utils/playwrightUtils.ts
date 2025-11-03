import { Locator, Page, expect } from "@playwright/test";

/** ---- ENV HELPERS ---- */
function required(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return v;
}

const LOGIN_EMAIL = () => required("LOGIN_EMAIL");
const LOGIN_PASSWORD = () => required("LOGIN_PASSWORD");

export async function login(page: Page) {
  // baseURL is loaded via playwright.config.ts
  await page.goto("/");

  const emailInput = page.locator("#username");

  const passwordInput = page.locator("#password");
  const submitBtn = page.locator("//button[@type='submit']");

  await emailInput.fill(LOGIN_EMAIL());
  await passwordInput.fill(LOGIN_PASSWORD());

  await submitBtn.click();
}

export async function navigateToNavItem(page: Page, navItem: string) {
  const webAppButton = page.locator(`//nav//button//h2[text()='${navItem}']`);
  await expect(webAppButton).toBeVisible();
  await webAppButton.click();
}

export async function assertPageLoaded(page: Page, headerName: string) {
  await expect(
    page.getByRole("heading", { level: 1, name: new RegExp(headerName, "i") })
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
