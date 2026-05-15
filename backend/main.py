import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from routers.chat import router as chat_router
from services.vector_store import init_vector_store

load_dotenv()


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_vector_store()
    yield


app = FastAPI(title="9to5Fitness API", lifespan=lifespan)

allowed_origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    os.getenv("FRONTEND_URL", "https://vishu09ce.github.io"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

app.include_router(chat_router)


@app.get("/health")
async def health() -> dict:
    return {"status": "ok"}
