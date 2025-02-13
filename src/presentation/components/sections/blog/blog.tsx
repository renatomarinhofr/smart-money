'use client'

import * as React from 'react'
import Image from 'next/image'
import { useBlogController } from '@/presentation/controllers/blog.controller'
import { ButtonController } from '@/presentation/controllers/button.controller'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { BlogCard } from './blog-card'

export function Blog() {
  const { 
    posts,
    currentSlide,
    api,
    setApi,
    handlePrevSlide,
    handleNextSlide,
    handleSlideSelect
  } = useBlogController()

  return (
    <section className="bg-neutral-light-gray-01 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="space-y-12">
          <div className="flex items-center justify-between gap-4">
            <div className='flex justify-center md:justify-start flex-col flex-1'>
              <span className="text-brand-primary text-sm font-semibold hidden md:block">Nosso blog</span>
              <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold text-neutral-dark-800 mt-2">
                Notícias do mundo da<br />
                tecnologia
              </h2>
            </div>

            <div className='items-center hidden md:block'>
              <ButtonController
                variant='ghost'
                onClick={() => api?.scrollPrev()}
              >
                <Image
                  src="/vector.png"
                  alt="Prev"
                  width={10}
                  height={20}
                />
              </ButtonController>
              <ButtonController
                variant='ghost'
                onClick={() => api?.scrollNext()}
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
                align: "start",
              }}
            >
              <CarouselContent className="-ml-4">
                {posts.map((pagePost, pageIndex) => (
                  <CarouselItem key={pageIndex} className="pl-4 basis-full">
                    <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {pagePost.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

            </Carousel>

            <div className="flex justify-center gap-3 mt-8">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-brand-primary' : 'bg-neutral-light-gray-02'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
