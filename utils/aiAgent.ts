import axios from 'axios';
import { config } from 'dotenv';

config();

const GROQ_API_KEY = process.env.GROQ_API_KEY!;
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama3-70b-8192';

export async function generateTestCodeFromStory(story: string): Promise<string> {
  const prompt =`
Write Playwright TypeScript steps (no test wrapper, no markdown).

Steps:
1. Go to https://ganneesh.github.io/Playwright_Framework/#home
2. Fill #username with any text
3. Fill #password with any text
4. Attach page.once('dialog', …) BEFORE clicking the button
5. Click the button.btn inside the form (it submits)
6. Accept the alert popup
Return only valid Playwright commands (await page.goto …  etc.)
`;

  const response = await axios.post(
    'https://api.groq.com/openai/v1/chat/completions',
    {
      model: GROQ_MODEL,
      messages: [{ role: 'user', content: prompt }]
    },
    {
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const rawCode = response.data.choices?.[0]?.message?.content ?? '';
  const cleanedCode = rawCode
    .replace(/```[\s\S]*?```/g, '')
    .replace(/^(Here.*?:|Sure!|Below.*?:)/gi, '')
    .trim();

  return cleanedCode + "\nconsole.log('✅ Test case executed successfully');";
}
