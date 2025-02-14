import { getBlogPostById } from '@/data/repositories/blog.repository'
import { BlogPostController } from '@/presentation/controllers/blog-post.controller'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export const revalidate = 3600

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostById(params.id)

  if (!post) {
    notFound()
  }

  return <BlogPostController post={post} />
}
