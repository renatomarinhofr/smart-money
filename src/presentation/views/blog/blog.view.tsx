'use client'

import * as React from 'react'
import Image from 'next/image'
import { BlogPost } from '@/domain/models/blog-post.model'
import { ButtonController } from '@/presentation/controllers/button.controller'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { BlogCard } from '../../components/sections/blog/blog-card'

interface BlogViewProps {
  posts: BlogPost[]
  currentSlide: number
  api: any
  setApi: (api: any) => void
  handlePrevSlide: () => void
  handleNextSlide: () => void
  handleSlideSelect: (index: number) => void
}

export function BlogView({
  posts,
  currentSlide,
  setApi,
  handlePrevSlide,
  handleNextSlide,
  handleSlideSelect
}: BlogViewProps) {
  return (
    <section className="bg-neutral-light-gray-01 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="space-y-12">
          <div className="flex items-center justify-between gap-4">
            <div className="flex justify-center md:justify-start flex-col flex-1">
              <span className="text-brand-primary text-sm font-semibold hidden md:block">
                Nosso blog
              </span>
              <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold text-neutral-dark-800 mt-2">
                Notícias do mundo da
                <br />
                tecnologia
              </h2>
            </div>

            <div className="items-center hidden md:block">
              <ButtonController
                variant="ghost"
                onClick={handlePrevSlide}
                disabled={currentSlide <= 0}
              >
                <Image src="/vector.png" alt="Prev" width={10} height={20} />
              </ButtonController>
              <ButtonController
                variant="ghost"
                onClick={handleNextSlide}
                disabled={currentSlide >= posts.length - 4}
              >
                <Image
                  src="/vector.png"
                  alt="Next"
                  width={10}
                  height={20}
                  className="rotate-180"
                />
              </ButtonController>
            </div>
          </div>

          <div className="relative">
            <Carousel
              className="w-full"
              setApi={setApi}
              opts={{
                align: 'start'
              }}
            >
              <CarouselContent className="-ml-4">
                {posts.map((post, index) => (
                  <CarouselItem
                    key={post.id}
                    className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <BlogCard
                      post={post}
                      isActive={currentSlide === index}
                      onClick={() => handleSlideSelect(index)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: Math.ceil(posts.length / 4) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handleSlideSelect(i * 4)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentSlide / 4) === i
                      ? 'bg-brand-primary'
                      : 'bg-neutral-dark-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
