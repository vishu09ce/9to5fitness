import chromadb
from chromadb.utils.embedding_functions import SentenceTransformerEmbeddingFunction
from data.knowledge_base import KNOWLEDGE_BASE

_collection = None


def _chunk_knowledge_base() -> list[str]:
    sections = KNOWLEDGE_BASE.strip().split("\n\n---\n\n")
    return [s.strip() for s in sections[1:] if s.strip()]  # skip header


def init_vector_store() -> None:
    global _collection
    embed_fn = SentenceTransformerEmbeddingFunction(model_name="all-MiniLM-L6-v2")
    client = chromadb.Client()
    _collection = client.create_collection("fitness_knowledge", embedding_function=embed_fn)
    chunks = _chunk_knowledge_base()
    _collection.add(
        documents=chunks,
        ids=[f"chunk_{i}" for i in range(len(chunks))],
    )


def retrieve(query: str, top_k: int = 3) -> str:
    results = _collection.query(query_texts=[query], n_results=top_k)
    return "\n\n---\n\n".join(results["documents"][0])
