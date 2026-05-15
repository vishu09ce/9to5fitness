# 9to5 Fitness — Full Stack AI Wellness Application

> A production-deployed fitness coaching application demonstrating end-to-end RAG architecture, full stack AI integration, and cloud deployment — built to showcase practical LLM application development beyond tutorial-level projects.

https://vishu09ce.github.io/9to5fitness

---

## The Problem

Most fitness apps offer generic advice disconnected from a user's actual context. This application demonstrates how a RAG-based AI coaching system can deliver grounded, knowledge-specific responses by retrieving relevant content from a curated domain knowledge base — rather than relying solely on LLM parametric memory.

---

## What It Does

- **AI Fitness Coach** — conversational interface powered by a RAG pipeline grounded in 21 curated wellness articles
- **Knowledge-Grounded Responses** — answers retrieved from structured topic sections, not hallucinated from general training data
- **Full Stack Deployment** — React frontend (GitHub Pages) + FastAPI backend (Render) running in production
- **Provider-Agnostic LLM Layer** — LiteLLM abstraction enables switching LLM providers without code changes

---

## Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Vector Database | ChromaDB | Lightweight, local-first, no infrastructure overhead for a personal project |
| Knowledge Chunking | 8 topic sections | Domain-driven chunking (Nutrition, Hydration, Walking, Flexibility, Workouts, Rest, Exercise when Tired, Morning Workouts) improves retrieval precision over arbitrary token-based splits |
| LLM Abstraction | LiteLLM | Decouples application logic from any single LLM provider — production best practice for maintainability |
| LLM Provider | Groq + Llama 3 | High-throughput inference suitable for conversational latency requirements |
| Backend Framework | FastAPI | Async support, automatic OpenAPI docs, production-grade performance |
| Frontend | React | Component-based architecture, deployed statically via GitHub Pages |

---

## RAG Pipeline

\`\`\`
User Query
    ↓
Query Embedding
    ↓
ChromaDB Similarity Search (8 topic sections, 21 articles)
    ↓
Top-K Relevant Chunks Retrieved
    ↓
Augmented Prompt → LiteLLM → Groq (Llama 3)
    ↓
Grounded Response Returned to User
\`\`\`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, GitHub Pages |
| Backend | Python, FastAPI |
| RAG / Vector DB | ChromaDB |
| LLM Abstraction | LiteLLM |
| LLM Provider | Groq (Llama 3) |
| Deployment | Render (backend), GitHub Pages (frontend) |

---

## Development Approach

This application was built using Claude Code as an AI-assisted development environment. All architectural decisions — including RAG pipeline design, vector store selection, chunking strategy, LLM provider abstraction, and deployment architecture — were directed, validated, and owned by the author.

AI-assisted development is treated here as a professional productivity tool, equivalent to using a framework or IDE.

---

## Future Roadmap

- [ ] Add user session memory to maintain conversation context across turns
- [ ] Expand knowledge base with structured medical/nutritional data sources
- [ ] Implement confidence scoring to flag low-retrieval-quality responses
- [ ] Migrate vector store to Pinecone for scalable multi-user deployments
- [ ] Add observability layer (LangSmith or similar) for RAG pipeline monitoring

---

## About This Project

This project was built to demonstrate practical, production-grade AI application development — including architectural decision-making, full stack deployment, and RAG pipeline design. It is part of a broader portfolio focused on applied AI in regulated and data-sensitive industries.

---

*Built by Vashishth Purohit — AI Solutions Consultant | Life Sciences & Healthcare IT*
