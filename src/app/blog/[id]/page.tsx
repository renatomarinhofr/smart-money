import { getBlogPostById } from '@/data/repositories/blog.repository'
import { BlogPostController } from '@/presentation/controllers/blog-post.controller'
import { notFound } from 'next/navigation'

export const revalidate = 3600

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getBlogPostById(id)

  if (!post) {
    notFound()
  }

  return <BlogPostController post={post} />
}
