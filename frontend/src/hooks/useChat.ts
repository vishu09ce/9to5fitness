import { useState, useCallback } from 'react'
import type { ChatMessage } from '../types'
import { chatService } from '../services/api'

const OPENING_MESSAGE: ChatMessage = {
  role: 'assistant',
  content:
    "Hey! Great that you made it through the magazine — you've already done the hard part by learning about the six pillars. Now let's put it all together and build a plan that actually fits your life.\n\nJust so you know — I'm not a doctor or medical professional. Everything I recommend is general wellness guidance for healthy adults. If you have any medical conditions, injuries, or health concerns, please check with your doctor before starting any new fitness routine.\n\nLet's start simple: what does a typical weekday look like for you? What time do you start work, and roughly what time do you finish?",
}

interface UseChatReturn {
  messages: ChatMessage[]
  isLoading: boolean
  error: string | null
  sendMessage: (content: string) => Promise<void>
  initWithPreload: (preloadedMessage: string) => Promise<void>
}

export const useChat = (): UseChatReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>([OPENING_MESSAGE])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = { role: 'user', content }
    const updatedMessages = [...messages, userMessage]

    setMessages(updatedMessages)
    setIsLoading(true)
    setError(null)

    try {
      const response = await chatService.sendMessage(updatedMessages)
      setMessages(prev => [...prev, { role: 'assistant', content: response.message }])
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [messages])

  const initWithPreload = useCallback(async (preloadedMessage: string) => {
    await sendMessage(preloadedMessage)
  }, [sendMessage])

  return { messages, isLoading, error, sendMessage, initWithPreload }
}
