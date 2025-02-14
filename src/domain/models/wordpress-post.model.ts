export interface WordPressPost {
  id: string
  title: string
  date: string
  excerpt: string
  author?: {
    node?: {
      name?: string
      avatar?: {
        url?: string
      }
    }
  }
  featuredImage?: {
    node?: {
      sourceUrl?: string
    }
  }
}
