'use client'

import * as React from 'react'
import { BlogPost } from '@/domain/models/blog-post.model'
import { getBlogPosts } from '@/data/repositories/blog.repository'
import { CarouselApi } from '@/components/ui/carousel'

export interface BlogController {
  posts: BlogPost[][]
  currentSlide: number
  api: CarouselApi | null
  setApi: (api: CarouselApi | null) => void
  handlePrevSlide: () => void
  handleNextSlide: () => void
  handleSlideSelect: (index: number) => void
}

export function useBlogController(): BlogController {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const blogPosts = getBlogPosts()

  const posts = React.useMemo(() => {
    const groups = []
    for (let i = 0; i < blogPosts.length; i += 4) {
      groups.push(blogPosts.slice(i, i + 4))
    }
    return groups
  }, [blogPosts])

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])

  const handlePrevSlide = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const handleNextSlide = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleSlideSelect = React.useCallback((index: number) => {
    api?.scrollTo(index)
  }, [api])

  return {
    posts,
    currentSlide,
    api,
    setApi,
    handlePrevSlide,
    handleNextSlide,
    handleSlideSelect
  }
}
