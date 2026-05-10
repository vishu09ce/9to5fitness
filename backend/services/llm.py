from litellm import acompletion
from models.schemas import ChatMessage
from data.system_prompt import SYSTEM_PROMPT
from data.knowledge_base import KNOWLEDGE_BASE


def _build_system_message() -> dict:
    content = f"{SYSTEM_PROMPT}\n\n## KNOWLEDGE BASE\n{KNOWLEDGE_BASE}"
    return {"role": "system", "content": content}


async def get_chat_response(messages: list[ChatMessage]) -> str:
    system_message = _build_system_message()
    formatted = [system_message] + [
        {"role": m.role, "content": m.content} for m in messages
    ]

    response = await acompletion(
        model="groq/llama-3.3-70b-versatile",
        messages=formatted,
        temperature=0.7,
        max_tokens=1024,
    )

    return response.choices[0].message.content
