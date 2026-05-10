import type { ReactNode } from 'react'
import { useDarkMode } from '../../hooks/useDarkMode'
import Masthead from '../cover/Masthead'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const { isDark, toggle } = useDarkMode()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Masthead isDark={isDark} onToggleTheme={toggle} />
      <main>{children}</main>
    </div>
  )
}
