import { useState, type FormEvent, type KeyboardEvent } from 'react'

interface Props {
  onSend: (message: string) => void
  isLoading: boolean
}

export default function ChatInput({ onSend, isLoading }: Props) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed || isLoading) return
    onSend(trimmed)
    setValue('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const trimmed = value.trim()
      if (!trimmed || isLoading) return
      onSend(trimmed)
      setValue('')
    }
  }

  return (
    <div className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto flex items-end gap-3"
      >
        <textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          rows={1}
          disabled={isLoading}
          className="flex-1 resize-none rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 disabled:opacity-50 transition-colors"
          style={{ maxHeight: '120px' }}
        />
        <button
          type="submit"
          disabled={!value.trim() || isLoading}
          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 disabled:opacity-40 hover:opacity-85 transition-opacity"
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </form>
      <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-2 max-w-3xl mx-auto">
        Dwayne Hogan is not a medical professional. Always consult a doctor before starting a new fitness routine.
      </p>
    </div>
  )
}
