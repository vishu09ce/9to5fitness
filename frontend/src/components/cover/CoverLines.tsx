import { Link } from 'react-router-dom'
import { SECTIONS } from '../../data/sections'

export default function CoverLines() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6 text-center">
        In this issue
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {SECTIONS.map(section => (
          <Link
            key={section.id}
            to={`/section/${section.slug}`}
            className="group block p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
          >
            <div
              className="w-2 h-2 rounded-full mb-2"
              style={{ backgroundColor: section.color }}
            />
            <p
              className="text-sm font-semibold mb-1 group-hover:underline"
              style={{ color: section.color }}
            >
              {section.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
              {section.tagline}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
