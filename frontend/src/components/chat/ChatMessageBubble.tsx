import type { ChatMessage } from '../../types'

interface Props {
  message: ChatMessage
}

export default function ChatMessageBubble({ message }: Props) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="shrink-0 w-8 h-8 rounded-full bg-amber-200 dark:bg-amber-700 flex items-center justify-center mr-2 mt-1">
          <span className="text-xs font-bold text-amber-800 dark:text-amber-100">DH</span>
        </div>
      )}

      <div className={`max-w-[75%] ${isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        {!isUser && (
          <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-1 ml-1">
            Dwayne Hogan
          </span>
        )}
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
            isUser
              ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-br-sm'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm'
          }`}
        >
          {message.content}
        </div>
      </div>
    </div>
  )
}
