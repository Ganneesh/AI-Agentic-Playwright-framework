# 🤖 AI-Agentic Playwright Framework

A real-world **AI-driven Playwright automation framework** using **Groq + LLaMA3**, designed for smart end-to-end testing with features like dynamic test generation, CI pipelines, and Allure reporting.

## 🚀 Live Demo Website
🌐 [Automation Practice Site](https://ganneesh.github.io/Playwright_Framework/#home)

## 🧠 Key Features

| Feature                        | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| ✅ AI Agent (Groq + LLaMA3)   | Auto-generates Playwright steps from a user story                          |
| 🧪 Playwright Framework       | End-to-end UI automation using modern Playwright test runner               |
| ⚙️ Multi-Component Pipeline   | Modular architecture: story analyzer, code generator, assertion injector   |
| 🔐 Secret Management          | Uses GitHub Actions secrets for secure key handling                        |
| 📦 GitHub Actions CI          | Automated test execution on each push or pull request                      |
| 📊 Allure Reports             | Interactive HTML test reports for better visibility                        |
| 📁 Modular Structure          | Clean and scalable TypeScript codebase                                     |

---

## 📁 Project Structure

├── .github/
│ └── workflows/
│ └── playwright.yml # CI pipeline
├── agents/ # storyAnalyzer, assertionAgent, debugAgent
├── pipeline/
│ └── pipelineRunner.ts # orchestrates AI → Playwright execution
├── tests/
│ └── ai-generated/ # specs that call the pipeline
├── utils/
│ └── aiAgent.ts # Groq API integration
├── playwright.config.ts # Playwright settings
└── README.md

---

## ⚙️ Local Setup

```bash
git clone https://github.com/Ganneesh/AI-Agentic-Playwright-framework.git
cd AI-Agentic-Playwright-framework
npm install
npx playwright install

## Create a local .env (never commit this):

GROQ_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
GROQ_MODEL=llama3-70b-8192
BASE_URL=https://ganneesh.github.io/Playwright_Framework/

## Headless(Run the test locally)
npx playwright test

# Headed (see browser)
npx playwright test --headed

## 📊 View Allure Report Locally
# After a local run
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

## 🛠 Tech Stack
Playwright – Browser automation

Groq – Low‑latency LLM inference

LLaMA 3 – Large Language Model

TypeScript – Typed JavaScript

Allure – Test reporting

GitHub Actions – Continuous Integration

## 📄 License
Ganesh Shivdas Madane


