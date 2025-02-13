export interface BlogPost {
  id: string
  category: string
  date: string
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
  }
  image: string
}
