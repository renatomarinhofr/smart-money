'use client'

import * as React from 'react'
import { BlogPost } from '@/domain/models/blog-post.model'
import { BlogView } from '../../views/blog/blog.view'

interface BlogControllerProps {
  initialPosts: BlogPost[]
}

export function BlogController({ initialPosts }: BlogControllerProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [api, setApi] = React.useState<any>()

  const handlePrevSlide = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const handleNextSlide = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleSlideSelect = React.useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  React.useEffect(() => {
    if (!api) return
    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <BlogView
      posts={initialPosts}
      currentSlide={currentSlide}
      api={api}
      setApi={setApi}
      handlePrevSlide={handlePrevSlide}
      handleNextSlide={handleNextSlide}
      handleSlideSelect={handleSlideSelect}
    />
  )
}
