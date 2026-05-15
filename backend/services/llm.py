from litellm import acompletion
from models.schemas import ChatMessage
from data.system_prompt import SYSTEM_PROMPT
from services.vector_store import retrieve


async def get_chat_response(messages: list[ChatMessage]) -> str:
    query = messages[-1].content
    context = retrieve(query)
    system_content = f"{SYSTEM_PROMPT}\n\n## RELEVANT KNOWLEDGE\n{context}"
    formatted = [{"role": "system", "content": system_content}] + [
        {"role": m.role, "content": m.content} for m in messages
    ]

    response = await acompletion(
        model="groq/llama-3.3-70b-versatile",
        messages=formatted,
        temperature=0.7,
        max_tokens=1024,
    )

    return response.choices[0].message.content
