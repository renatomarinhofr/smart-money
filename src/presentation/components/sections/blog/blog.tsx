import { BlogController } from '@/presentation/controllers/blog/blog.controller'
import { BlogPost } from '@/domain/models/blog-post.model'

interface BlogProps {
  initialPosts: BlogPost[]
}

export function Blog({ initialPosts }: BlogProps) {
  return <BlogController initialPosts={initialPosts} />
}
