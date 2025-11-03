import { test, expect } from "@playwright/test";
import {
  login,
  navigateToNavItem,
  assertPageLoaded,
  getColumnByName,
  getCardInColumn,
  getTagsInCard,
  checkConsoleErrors,
} from "../utils/playwrightUtils";

/**
 * Test Case 1
 * Login to Demo App.
 * Navigate to "Web Application."
 * Verify "Implement user authentication" is in the "To Do" column.
 * Confirm tags: "Feature" "High Priority”
 */
test("Test Case 1", async ({ page }) => {
  //login to the kanban board page
  await login(page);

  //navigate to the Web Application page
  await navigateToNavItem(page, "Web Application");

  //assert the page loaded
  await assertPageLoaded(page, "web application");

  //grab the To Do column container
  const todoColumn = getColumnByName(page, "To Do");
  await expect(todoColumn).toBeVisible();

  //find the card title 'Implement user authentication'
  const card = getCardInColumn(todoColumn, "Implement user authentication");
  await expect(card).toBeVisible();

  //find "Feature" and "High Priority" tags within the card
  const featureTag = getTagsInCard(card, "Feature");
  const highPriorityTag = getTagsInCard(card, "High Priority");

  //wait for "Feature" and "High Priority" tags to be visible
  await expect(featureTag).toBeVisible();
  await expect(highPriorityTag).toBeVisible();

  //check console for errors
  const consoleErrors = checkConsoleErrors(page);
  expect(consoleErrors).toHaveLength(0);
});

/**
 * Test Case 2
 * Login to Demo App
 * Navigate to "Wep Application"
 * Verify "Fix navigation bug" is in the "To Do" column.
 * Confirm tags: "Bug"
 */
test("Test Case 2", async ({ page }) => {
  //login to the kanban board page
  await login(page);

  //navigate to the Web Application page
  await navigateToNavItem(page, "Web Application");

  //assert the page loaded
  await assertPageLoaded(page, "web application");

  //grab the To Do column container
  const todoColumn = getColumnByName(page, "To Do");
  await expect(todoColumn).toBeVisible();

  //find the card title 'Fix navigation bug'
  const card = getCardInColumn(todoColumn, "Fix navigation bug");
  await expect(card).toBeVisible();

  //find "Bug" tag within the card
  const bugTag = getTagsInCard(card, "Bug");

  //wait for "Bug" tag to be visible
  await expect(bugTag).toBeVisible();

  //check console for errors
  const consoleErrors = checkConsoleErrors(page);
  expect(consoleErrors).toHaveLength(0);
});

/**
 * Test Case 3
 * Login to Demo App
 * Navigate to "Wep Application"
 * Verify "Design system updates" is in the "In Progress" column.
 * Confirm tags: "Design”
 */
test("Test Case 3", async ({ page }) => {
  //login to the kanban board page
  await login(page);

  //navigate to the Web Application page
  await navigateToNavItem(page, "Web Application");

  //assert the page loaded
  await assertPageLoaded(page, "web application");

  //grab the In Progress column container
  const todoColumn = getColumnByName(page, "In Progress");
  await expect(todoColumn).toBeVisible();

  //find the card title 'Design system updates'
  const card = getCardInColumn(todoColumn, "Design system updates");
  await expect(card).toBeVisible();

  //find "Design" tag within the card
  const designTag = getTagsInCard(card, "Design");

  //wait for "Design" tag to be visible
  await expect(designTag).toBeVisible();

  //check console for errors
  const consoleErrors = checkConsoleErrors(page);
  expect(consoleErrors).toHaveLength(0);
});

/**
 * Test Case 4
 * Login to Demo App
 * Navigate to "Mobile Application"
 * Verify "Push notification system" is in the "To Do" column.
 * Confirm tags: "Feature"
 */
test("Test Case 4", async ({ page }) => {
  //login to the kanban board page
  await login(page);

  //navigate to the Mobile Application page
  await navigateToNavItem(page, "Mobile Application");

  //assert the page loaded
  await assertPageLoaded(page, "mobile application");

  //grab the To Do column container
  const todoColumn = getColumnByName(page, "To Do");
  await expect(todoColumn).toBeVisible();

  //find the card title 'Push notification system'
  const card = getCardInColumn(todoColumn, "Push notification system");
  await expect(card).toBeVisible();

  //find "Feature" tag within the card
  const featureTag = getTagsInCard(card, "Feature");

  //wait for "Feature" tag to be visible
  await expect(featureTag).toBeVisible();

  //check console for errors
  const consoleErrors = checkConsoleErrors(page);
  expect(consoleErrors).toHaveLength(0);
});

/**
 * Test Case 5
 * Login to Demo App
 * Navigate to "Mobile Application"
 * Verify "Offline mode" is in the "In Progress" column.
 * Confirm tags: "Feature" & "High Priority”
 */
test("Test Case 5", async ({ page }) => {
  //login to the kanban board page
  await login(page);

  //navigate to the Mobile Application page
  await navigateToNavItem(page, "Mobile Application");

  //assert the page loaded
  await assertPageLoaded(page, "mobile application");

  //grab the In Progress column container
  const todoColumn = getColumnByName(page, "In Progress");
  await expect(todoColumn).toBeVisible();

  //find the card title 'Offline mode'
  const card = getCardInColumn(todoColumn, "Offline mode");
  await expect(card).toBeVisible();

  //find "Feature" and "High Priority" tags within the card
  const featureTag = getTagsInCard(card, "Feature");
  const highPriorityTag = getTagsInCard(card, "High Priority");

  //wait for "Feature" and "High Priority" tags to be visible
  await expect(featureTag).toBeVisible();
  await expect(highPriorityTag).toBeVisible();

  //check console for errors
  const consoleErrors = checkConsoleErrors(page);
  expect(consoleErrors).toHaveLength(0);
});

/**
 * Test Case 6
 * Login to Demo App
 * Navigate to "Mobile Application"
 * Verify "App icon design" is in the "Done" column.
 * Confirm tags: "Design”
 */
test("Test Case 6", async ({ page }) => {
  //login to the kanban board page
  await login(page);

  //navigate to the Mobile Application page
  await navigateToNavItem(page, "Mobile Application");

  //assert the page loaded
  await assertPageLoaded(page, "mobile application");

  //grab the Done column container
  const todoColumn = getColumnByName(page, "Done");
  await expect(todoColumn).toBeVisible();

  //find the card title 'App icon design'
  const card = getCardInColumn(todoColumn, "App icon design");
  await expect(card).toBeVisible();

  //find "Design" tag within the card
  const designTag = getTagsInCard(card, "Design");

  //wait for "Design" tag to be visible
  await expect(designTag).toBeVisible();

  //check console for errors
  const consoleErrors = checkConsoleErrors(page);
  expect(consoleErrors).toHaveLength(0);
});
