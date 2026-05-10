export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="shrink-0 w-8 h-8 rounded-full bg-amber-200 dark:bg-amber-700 flex items-center justify-center mr-2">
        <span className="text-xs font-bold text-amber-800 dark:text-amber-100">DH</span>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" />
      </div>
    </div>
  )
}
