import axios from 'axios'
import type { ChatMessage, ChatResponse } from '../types'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
})

export const chatService = {
  sendMessage: async (messages: ChatMessage[]): Promise<ChatResponse> => {
    const { data } = await client.post<ChatResponse>('/api/chat', { messages })
    return data
  },
}
