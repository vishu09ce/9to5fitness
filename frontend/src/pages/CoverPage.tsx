import { useDarkMode } from '../hooks/useDarkMode'
import Masthead from '../components/cover/Masthead'
import Pyramid from '../components/cover/Pyramid'
import CoverLines from '../components/cover/CoverLines'
import AiCoachCta from '../components/cover/AiCoachCta'

export default function CoverPage() {
  const { isDark, toggle } = useDarkMode()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Masthead isDark={isDark} onToggleTheme={toggle} />

      <main className="flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto px-6 pt-10 pb-4 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
            The six pillars of office wellness
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto text-sm">
            Click any level to read the section. Start at the base and work your way up.
          </p>
        </div>

        <Pyramid />

        <CoverLines />

        <AiCoachCta />
      </main>
    </div>
  )
}
