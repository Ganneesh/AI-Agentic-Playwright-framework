import { test } from '@playwright/test';
import { runPipeline } from '../../pipeline/pipelineRunner';

test.describe('🧠 Final MCP Login Test (AI Agent)', () => {
  test('Run full pipeline with alert', async ({ page }) => {
    const story = `
Go to https://ganneesh.github.io/Playwright_Framework/#home
Fill username in #username
Fill password in #password
Attach dialog listener BEFORE clicking
Click the login button with class .btn
Accept the alert popup
`;

    await runPipeline(story, page);
  });
});
