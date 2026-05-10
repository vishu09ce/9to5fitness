import { Link } from 'react-router-dom'
import { SECTIONS } from '../../data/sections'

interface Props {
  currentSlug: string
}

export default function PyramidProgress({ currentSlug }: Props) {
  return (
    <nav className="w-full max-w-4xl mx-auto px-6 py-4" aria-label="Section progress">
      <div className="flex items-center gap-1 justify-center">
        {SECTIONS.map((section, index) => {
          const isCurrent = section.slug === currentSlug
          return (
            <div key={section.id} className="flex items-center">
              <Link
                to={`/section/${section.slug}`}
                title={section.name}
                className="flex flex-col items-center gap-1 group"
              >
                <span
                  className={`rounded-full transition-all duration-150 ${
                    isCurrent ? 'w-6 h-6' : 'w-3 h-3 opacity-50 hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: section.color,
                    outline: isCurrent ? `2px solid ${section.color}` : undefined,
                    outlineOffset: isCurrent ? '2px' : undefined,
                  }}
                />
                {isCurrent && (
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {index + 1} / 6
                  </span>
                )}
              </Link>
              {index < SECTIONS.length - 1 && (
                <div className="w-6 h-px bg-gray-200 dark:bg-gray-700 mx-1" />
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
