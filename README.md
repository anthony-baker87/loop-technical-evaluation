# Playwright Data-Driven Test Suite (TS)

This suite logs into the public demo app and verifies Kanban board tasks/tags for **Web Application** and **Mobile Application** projects, using **JSON-driven scenarios** to avoid duplication.

## Stack
- Playwright Test (TypeScript)
- Data-driven via `tests/data/scenarios.ts`
- Reusable login + selector utilities

## Quick Start
```bash
# 1) Install
npm i

# 2) Install browsers
npx playwright install

# 3) Run all tests (headless)
npm test

# Or watch it run
npm run test:headed

# Afterward, open HTML report
npm run show-report
