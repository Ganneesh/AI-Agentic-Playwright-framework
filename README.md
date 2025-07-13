
# 🧠 AI Agentic Playwright Framework with MCP Architecture

This project showcases a real-time AI-driven testing framework using Playwright + TypeScript + Groq + LLaMA 3, extended with **MCP (Multi-Component Pipeline)** agents.

## 🔧 Agents Pipeline

1. ✅ Story Analyzer
2. ✅ Test Code Generator (LLM via Groq)
3. ✅ Assertion Generator (placeholder)
4. ✅ Debug Agent (error handling + logs)

## 🔐 Tested Scenario

Login flow at:
[https://ganneesh.github.io/Playwright_Framework/#home](https://ganneesh.github.io/Playwright_Framework/#home)

## 🚀 To Run

1. Add your Groq API key to `.env`
2. Run:
```bash
npm install
npx playwright test
```

## 📁 Folders

- `/agents` – individual pipeline logic
- `/pipeline` – multi-agent runner
- `/utils` – LLM communication logic
- `/tests` – AI generated test scenarios
