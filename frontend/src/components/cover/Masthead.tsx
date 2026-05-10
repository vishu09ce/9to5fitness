import DarkModeToggle from '../layout/DarkModeToggle'

interface Props {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Masthead({ isDark, onToggleTheme }: Props) {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 py-4 px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-none">
            9to5Fitness
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 tracking-wide">
            Health &amp; fitness for the modern 9-to-5 worker
          </p>
        </div>
        <DarkModeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}
