# Playwright Data-Driven Test Suite (TS)

This suite performs end-to-end (E2E) testing on a Kanban-style demo application.
It logs in, navigates between projects, and verifies that specific cards and tags appear in the correct columns (To Do, In Progress, Done).
All tests are data-driven, generated dynamically from a JSON data source to minimize duplication and simplify maintenance.

## Stack

- Playwright Test (TypeScript)
- JSON-driven scenarios (tests/data/scenarios.json)
- Reusable helper functions (tests/utils/playwrightUtils.ts)
- Page object–style locators and assertions
- Configurable environment variables for credentials

### Data-Driven Testing

All test cases are dynamically generated from a JSON data source:

**tests/data/scenarios.json**
contains the scenario definitions (menu item, column, card, tags).  
This allows easy scaling by simply adding new entries to the JSON file without modifying test logic.

## Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Install Playwright browsers
npx playwright install

# 3) Create a .env file in the project root with the following:
BASE_URL=https://animated-gingersnap-8cf7f2.netlify.app/
LOGIN_EMAIL=
LOGIN_PASSWORD=

# 4) Run all tests (headless)
npx playwright test

# Run a specific test file
npx playwright test tests/e2e/kanban.dataDriven.spec.ts

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Open Playwright UI mode (interactive test explorer)
npx playwright test --ui

```
