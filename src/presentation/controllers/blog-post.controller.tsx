'use client'

import { BlogPost } from '@/domain/models/blog-post.model'
import { BlogPostView } from '../components/sections/blog-post/blog-post'

interface BlogPostControllerProps {
  post: BlogPost
}

export function BlogPostController({ post }: BlogPostControllerProps) {
  return <BlogPostView post={post} />
}
