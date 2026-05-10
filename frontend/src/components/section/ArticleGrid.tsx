import type { Article } from '../../types'
import ArticleCard from './ArticleCard'

interface Props {
  articles: Article[]
  accentColor: string
}

export default function ArticleGrid({ articles, accentColor }: Props) {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} accentColor={accentColor} />
        ))}
      </div>
    </section>
  )
}
