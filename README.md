# 9to5Fitness

A digital magazine-style website for full-time office workers covering six wellness pillars, with an AI Coach powered by LiteLLM + Groq.

https://vishu09ce.github.io/9to5fitness

## Stack
- **Frontend:** React 18 + Vite + TypeScript + Tailwind CSS → GitHub Pages
- **Backend:** FastAPI + LiteLLM + Groq → Render

## Structure
```
9to5fitness/
├── frontend/   # React SPA
└── backend/    # FastAPI + LiteLLM
```

## Local Development
```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt && uvicorn main:app --reload
```
