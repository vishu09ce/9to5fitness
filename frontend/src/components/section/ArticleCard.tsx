import type { Article } from '../../types'

interface Props {
  article: Article
  accentColor: string
}

export default function ArticleCard({ article, accentColor }: Props) {
  return (
    <article className="flex flex-col rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-gray-900">
      <div className="aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${accentColor}22`, color: accentColor }}
          >
            {article.source}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">{article.readTime} read</span>
        </div>

        <h3 className="text-base font-bold text-gray-900 dark:text-gray-50 mb-2 leading-snug">
          {article.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
          {article.summary}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold transition-opacity hover:opacity-70 mt-auto"
          style={{ color: accentColor }}
        >
          Read article →
        </a>
      </div>
    </article>
  )
}
