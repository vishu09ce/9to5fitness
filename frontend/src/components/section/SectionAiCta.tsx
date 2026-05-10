import { Link } from 'react-router-dom'
import type { Section } from '../../types'

interface Props {
  section: Section
}

export default function SectionAiCta({ section }: Props) {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-8">
      <div
        className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        style={{ backgroundColor: `${section.color}18`, borderLeft: `4px solid ${section.color}` }}
      >
        <div>
          <p className="text-sm font-semibold mb-1" style={{ color: section.color }}>
            Ready to apply what you've learned?
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm max-w-md">
            Take this section to the AI Coach and get a personalised plan built around your schedule.
          </p>
        </div>
        <Link
          to="/ai-coach"
          state={{ preloadedMessage: section.aiPreloadedMessage }}
          className="shrink-0 inline-block px-6 py-2.5 rounded-full font-semibold text-sm text-gray-900 transition-opacity hover:opacity-85 whitespace-nowrap"
          style={{ backgroundColor: section.color }}
        >
          {section.aiButtonLabel}
        </Link>
      </div>
    </section>
  )
}
