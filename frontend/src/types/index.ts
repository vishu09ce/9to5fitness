export interface Article {
  id: number
  title: string
  source: string
  url: string
  readTime: string
  summary: string
  thumbnail: string
}

export interface Section {
  id: string
  slug: string
  name: string
  color: string
  pyramidLevel: number
  tagline: string
  intro: string
  articles: Article[]
  aiButtonLabel: string
  aiPreloadedMessage: string
}

export interface PyramidLevel {
  level: number
  sectionId: string
  name: string
  color: string
  slug: string
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatRequest {
  messages: ChatMessage[]
  preloadedMessage?: string
}

export interface ChatResponse {
  message: string
}
