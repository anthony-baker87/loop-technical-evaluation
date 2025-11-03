import { test, expect } from "@playwright/test";
import {
  login,
  navigateToNavItem,
  assertPageLoaded,
  getColumnByName,
  getCardInColumn,
} from "./data/selectors";

/**
 * Test Case 1
 * Login to Demo App.
 * Navigate to "Web Application."
 * Verify "Implement user authentication" is in the "To Do" column.
 * Confirm tags: "Feature" "High Priority”
 */
test("Test Case 1", async ({ page }) => {
  await login(page);
  await navigateToNavItem(page, "Web Application");
  await assertPageLoaded(page, "web application");

  //grab the To Do column contianer
  const todoColumn = getColumnByName(page, "To Do");
  await expect(todoColumn).toBeVisible();

  //find the card title 'Fix navigation bug'
  const card = getCardInColumn(todoColumn, "Fix navigation bug");
  await expect(card).toBeVisible();

  //find tags "Feature" and "High Priority" within the card
  const featureTag = card.locator("//span[text()='Feature']");
  const highPriorityTag = card.locator("//span[text()='High Priority']");

  //wait for "Feature" and "High Priority" tag to be visible
  await expect(featureTag).toBeVisible();
  await expect(highPriorityTag).toBeVisible();
});

/**
 * Test Case 2
 * Login to Demo App
 * Navigate to "Wep Application"
 * Verify "Fix navigation bug" is in the "To Do" column.
 * Confirm tags: "Bug"
 */
test("Test Case 2", async ({ page }) => {
  //login
  await login(page);

  //navigate to "Web Application"
  await navigateToNavItem(page, "Web Application");

  await expect(
    page.getByRole("heading", { level: 1, name: /web application/i })
  ).toBeVisible();

  //grab the To Do column container
  const todoColumn = getColumnByName(page, "To Do");
  await expect(todoColumn).toBeVisible();

  //find the card title 'Fix navigation bug'
  const card = todoColumn.locator(
    "//h3[text()='Fix navigation bug']/ancestor::div[contains(@class,'bg-white')]"
  );
  await expect(card).toBeVisible();

  //find tag "Bug" within the card
  const bugTag = card.locator("//span[text()='Bug']");

  //wait for "Bug" tag to be visible
  await expect(bugTag).toBeVisible();
});

/**
 * Test Case 3
 * Login to Demo App
 * Navigate to "Wep Application"
 * Verify "Design system updates" is in the "In Progress" column.
 * Confirm tags: "Design”
 */
test("Test Case 3", async ({ page }) => {
  //login
  await login(page);

  //navigate to "Web Application"
  await navigateToNavItem(page, "Web Application");

  await expect(
    page.getByRole("heading", { level: 1, name: /web application/i })
  ).toBeVisible();

  //grab the In Progress column container
  const todoColumn = page.locator(
    "//h2[(text()='In Progress')]/following-sibling::*"
  );
  await expect(todoColumn).toBeVisible();

  //find the card title 'Design system updates'
  const card = todoColumn.locator(
    "//h3[text()='Design system updates']/ancestor::div[contains(@class,'bg-white')]"
  );
  await expect(card).toBeVisible();

  //find tag "Design" within the card
  const designTag = card.locator("//span[text()='Design']");

  //wait for "Design" tag to be visible
  await expect(designTag).toBeVisible();
});

/**
 * Test Case 4
 * Login to Demo App
 * Navigate to "Mobile Application"
 * Verify "Push notification system" is in the "To Do" column.
 * Confirm tags: "Feature"
 */
test("Test Case 4", async ({ page }) => {
  //login
  await login(page);

  //navigate to "Mobile Application"
  await navigateToNavItem(page, "Mobile Application");

  await expect(
    page.getByRole("heading", { level: 1, name: /mobile application/i })
  ).toBeVisible();

  //grab the To Do column container
  const todoColumn = page.locator(
    "//h2[(text()='To Do')]/following-sibling::*"
  );
  await expect(todoColumn).toBeVisible();

  //find the card title 'Push notification system'
  const card = todoColumn.locator(
    "//h3[text()='Push notification system']/ancestor::div[contains(@class,'bg-white')]"
  );
  await expect(card).toBeVisible();

  //find tag "Feature" within the card
  const featureTag = card.locator("//span[text()='Feature']");

  //wait for "Feature" tag  to be visible
  await expect(featureTag).toBeVisible();
});

/**
 * Test Case 5
 * Login to Demo App
 * Navigate to "Mobile Application"
 * Verify "Offline mode" is in the "In Progress" column.
 * Confirm tags: "Feature" & "High Priority”
 */
test("Test Case 5", async ({ page }) => {
  //login
  await login(page);

  //navigate to "Mobile Application"
  await navigateToNavItem(page, "Mobile Application");

  await expect(
    page.getByRole("heading", { level: 1, name: /mobile application/i })
  ).toBeVisible();

  //grab the To Do column container
  const todoColumn = page.locator(
    "//h2[(text()='In Progress')]/following-sibling::*"
  );
  await expect(todoColumn).toBeVisible();

  //find the card title 'Push notification system'
  const card = todoColumn.locator(
    "//h3[text()='Offline mode']/ancestor::div[contains(@class,'bg-white')]"
  );
  await expect(card).toBeVisible();

  //find tag "Feature" and "High Priority" within the card
  const featureTag = card.locator("//span[text()='Feature']");
  const highPriorityTag = card.locator("//span[text()='High Priority']");

  //wait for "Feature" and "High Priority" tag  to be visible
  await expect(featureTag).toBeVisible();
  await expect(highPriorityTag).toBeVisible();
});

/**
 * Test Case 6
 * Login to Demo App
 * Navigate to "Mobile Application"
 * Verify "App icon design" is in the "Done" column.
 * Confirm tags: "Design”
 */
test("Test Case 6", async ({ page }) => {
  //login
  await login(page);

  //navigate to "Mobile Application"
  await navigateToNavItem(page, "Mobile Application");

  await expect(
    page.getByRole("heading", { level: 1, name: /mobile application/i })
  ).toBeVisible();

  //grab the Done column container
  const todoColumn = page.locator("//h2[(text()='Done')]/following-sibling::*");
  await expect(todoColumn).toBeVisible();

  //find the card title 'App icon design'
  const card = todoColumn.locator(
    "//h3[text()='App icon design']/ancestor::div[contains(@class,'bg-white')]"
  );
  await expect(card).toBeVisible();

  //find tag "Design”" within the card
  const designTag = card.locator("//span[text()='Design']");

  //wait for "Design”" tag  to be visible
  await expect(designTag).toBeVisible();
});
