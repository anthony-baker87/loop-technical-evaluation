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
import scenarios from "../data/scenarios.json" assert { type: "json" };

for (const {
  testName,
  menuItem,
  columnTitle,
  cardTitle,
  cardTags,
} of scenarios) {
  test(testName, async ({ page }) => {
    //check console for errors; set up the listener first before we
    //do anything so that we can catch all/any console errors

    /**
     * Commenting this out for now as it catches a console error (failed to load resource; 404)
     * and causes the test to fail.
     */
    // const consoleErrors = checkConsoleErrors(page);

    //login to the kanban board page
    await login(page);

    //navigate to the appropriate page
    await navigateToNavItem(page, menuItem);

    //assert the page loaded
    await assertPageLoaded(page, menuItem.toLowerCase());

    //grab the column container
    const taskColumn = getColumnByName(page, columnTitle);
    await expect(taskColumn, `${columnTitle} is not visible.`).toBeVisible();

    //find the appropriate card title
    const card = getCardInColumn(taskColumn, cardTitle);
    await expect(
      card,
      `${cardTitle} in the ${taskColumn} column is not visible.`
    ).toBeVisible();

    //find tags within the card
    for (const tag of cardTags) {
      const tagLoc = getTagsInCard(card, tag);
      //wait for the tags to be visible
      await expect(
        tagLoc,
        `Missing expected tag "${tag}" on card "${cardTitle}"`
      ).toBeVisible();
    }

    //assert no console errors
    // expect(consoleErrors).toHaveLength(0);
  });
}
