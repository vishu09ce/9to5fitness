import { Link } from 'react-router-dom'

export default function AiCoachCta() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 pb-16 text-center">
      <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 bg-gray-50 dark:bg-gray-900">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
          The destination
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
          AI Coach
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
          Read the six pillars first. Then let the AI build your personalised plan.
        </p>
        <Link
          to="/ai-coach"
          className="inline-block px-8 py-3 rounded-full font-semibold text-gray-900 transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#F7DC6F' }}
        >
          Meet your AI Coach →
        </Link>
      </div>
    </section>
  )
}
