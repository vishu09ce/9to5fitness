import type { Section } from '../../types'

interface Props {
  section: Section
}

export default function SectionHeader({ section }: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pt-8 pb-6">
      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: section.color }}>
        Level {section.pyramidLevel} of 6
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-4">
        {section.name}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
        {section.intro}
      </p>
      <div className="mt-6 h-1 w-16 rounded-full" style={{ backgroundColor: section.color }} />
    </div>
  )
}
