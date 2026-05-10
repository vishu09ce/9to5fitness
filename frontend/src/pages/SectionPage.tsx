import { useParams, Navigate } from 'react-router-dom'
import { SECTIONS } from '../data/sections'
import Layout from '../components/layout/Layout'
import PyramidProgress from '../components/section/PyramidProgress'
import SectionHeader from '../components/section/SectionHeader'
import ArticleGrid from '../components/section/ArticleGrid'
import SectionAiCta from '../components/section/SectionAiCta'
import SectionNav from '../components/section/SectionNav'

export default function SectionPage() {
  const { slug } = useParams<{ slug: string }>()
  const section = SECTIONS.find(s => s.slug === slug)

  if (!section) return <Navigate to="/" replace />

  return (
    <Layout>
      <PyramidProgress currentSlug={section.slug} />
      <SectionHeader section={section} />
      <ArticleGrid articles={section.articles} accentColor={section.color} />
      <SectionAiCta section={section} />
      <SectionNav currentSlug={section.slug} />
    </Layout>
  )
}
