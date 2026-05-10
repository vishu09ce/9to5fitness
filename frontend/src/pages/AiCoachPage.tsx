import { useEffect, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'
import { useChat } from '../hooks/useChat'
import DarkModeToggle from '../components/layout/DarkModeToggle'
import ChatWindow from '../components/chat/ChatWindow'
import ChatInput from '../components/chat/ChatInput'

interface LocationState {
  preloadedMessage?: string
}

export default function AiCoachPage() {
  const { isDark, toggle } = useDarkMode()
  const { messages, isLoading, error, sendMessage, initWithPreload } = useChat()
  const location = useLocation()
  const preloadHandled = useRef(false)

  useEffect(() => {
    if (preloadHandled.current) return
    const state = location.state as LocationState | null
    if (state?.preloadedMessage) {
      preloadHandled.current = true
      initWithPreload(state.preloadedMessage)
    }
  }, [location.state, initWithPreload])

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors">

      {/* Header */}
      <header className="shrink-0 border-b border-gray-100 dark:border-gray-800 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              ← 9to5Fitness
            </Link>
            <div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-200 dark:bg-amber-700 flex items-center justify-center">
                <span className="text-xs font-bold text-amber-800 dark:text-amber-100">DH</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50 leading-none">
                  Dwayne Hogan
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">AI Fitness Coach</p>
              </div>
            </div>
          </div>
          <DarkModeToggle isDark={isDark} onToggle={toggle} />
        </div>
      </header>

      {/* Intro banner — shown before first user message */}
      {messages.length === 1 && (
        <div className="shrink-0 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-100 dark:border-amber-900/40 px-6 py-3 text-center">
          <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
            You've covered the six pillars. Now let's build your plan.
          </p>
        </div>
      )}

      {/* Chat messages */}
      <ChatWindow messages={messages} isLoading={isLoading} error={error} />

      {/* Input */}
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  )
}
