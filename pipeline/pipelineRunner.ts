import { generateTestCodeFromStory } from '../utils/aiAgent';
import { analyzeStory } from '../agents/storyAnalyzer';
import { injectAssertions } from '../agents/assertionAgent';
import { handleError } from '../agents/debugAgent';

export async function runPipeline(story: string, page: any) {
  try {
    console.log('🧠 Step 1: Analyzing story...');
    const analyzed = analyzeStory(story);

    console.log('📡 Step 2: Calling Groq...');
    let code = await generateTestCodeFromStory(analyzed);

    // ✅ TEMP override for testing
    code = `
await page.goto('https://ganneesh.github.io/Playwright_Framework/#home');
await page.fill('#username', 'testuser');
await page.fill('#password', 'password123');

page.once('dialog', async dialog => {
  console.log('✅ Dialog message:', dialog.message());
  await dialog.accept();
});

await page.click('button.btn');
await page.waitForTimeout(1000);
await page.screenshot({ path: 'final.png' });
await page.close();
`;

    console.log('✅ Final code to execute:\n', code);

    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
    const steps = new AsyncFunction('page', code);
    await steps(page);

    console.log('✅ Step 5: Execution complete!');
  } catch (error) {
    handleError(error);
    throw error;
  }
}
