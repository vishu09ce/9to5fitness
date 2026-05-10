import { useEffect, useRef } from 'react'
import type { ChatMessage } from '../../types'
import ChatMessageBubble from './ChatMessageBubble'
import TypingIndicator from './TypingIndicator'

interface Props {
  messages: ChatMessage[]
  isLoading: boolean
  error: string | null
}

export default function ChatWindow({ messages, isLoading, error }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl w-full mx-auto">
      {messages.map((message, index) => (
        <ChatMessageBubble key={index} message={message} />
      ))}

      {isLoading && <TypingIndicator />}

      {error && (
        <div className="text-center text-sm text-red-500 dark:text-red-400 py-2">
          {error}
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  )
}
