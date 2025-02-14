import { getBlogPosts } from '@/data/repositories/blog.repository'
import { Blog } from '@/presentation/components/sections/blog/blog'

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return <Blog initialPosts={posts} />
}
