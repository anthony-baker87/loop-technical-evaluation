# Playwright Data-Driven Test Suite (TS)

This suite logs into the public demo app and verifies Kanban board tasks/tags for **Web Application** and **Mobile Application** projects, using **JSON-driven scenarios** to avoid duplication.

## Stack

- Playwright Test (TypeScript)
- Data-driven via `tests/data/scenarios.ts`
- Reusable helper functions (tests/utils/selectors.ts)
- Page object–style locators and assertions
- Configurable environment variables for credentials

## Quick Start

```bash
# 1) Install
npm i

# 2) Install browsers
npx playwright install

# 3) Add .env file to the root of the project with the following:

BASE_URL=https://animated-gingersnap-8cf7f2.netlify.app/
LOGIN_EMAIL=
LOGIN_PASSWORD=

# Run all tests in headless mode (default)
npx playwright test

# Run a specific test file
npx playwright test tests/e2e.kanban.spec.ts

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Open Playwright UI mode (interactive test explorer)
npx playwright test --ui
```
