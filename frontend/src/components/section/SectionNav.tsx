import { Link } from 'react-router-dom'
import { SECTIONS } from '../../data/sections'

interface Props {
  currentSlug: string
}

export default function SectionNav({ currentSlug }: Props) {
  const currentIndex = SECTIONS.findIndex(s => s.slug === currentSlug)
  const prev = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null
  const isLast = currentIndex === SECTIONS.length - 1

  return (
    <nav className="w-full max-w-4xl mx-auto px-6 pb-16 flex items-center justify-between">
      {prev ? (
        <Link
          to={`/section/${prev.slug}`}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          ← {prev.name}
        </Link>
      ) : (
        <Link
          to="/"
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          ← Cover
        </Link>
      )}

      {isLast ? (
        <Link
          to="/ai-coach"
          className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:underline"
        >
          AI Coach →
        </Link>
      ) : (
        <Link
          to={`/section/${SECTIONS[currentIndex + 1].slug}`}
          className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:underline"
        >
          {SECTIONS[currentIndex + 1].name} →
        </Link>
      )}
    </nav>
  )
}
