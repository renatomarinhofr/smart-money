'use client'

import Image from 'next/image'
import { BlogPost } from '@/domain/models/blog-post.model'
import { formatDate } from '@/utils/formatters/date-formatter'

interface BlogCardProps {
  post: BlogPost
  isActive?: boolean
  onClick?: () => void
}

export function BlogCard({ post, isActive, onClick }: BlogCardProps) {
  return (
    <article
      className={`rounded-lg overflow-hidden min-w-[280px] max-w-[280px] h-[520px] shadow-lg mb-4 ${
        isActive ? 'ring-2 ring-brand-primary' : ''
      } cursor-pointer transition-all duration-200`}
      onClick={onClick}
    >
      <div className="relative h-[320px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex gap-2 items-center">
          <span className="text-brand-primary text-sm font-semibold">
            {post.category}
          </span>
          <span className="text-neutral-dark-100 text-sm">
            {formatDate(post.date)}
          </span>
        </div>

        <h3 className="text-xl font-bold text-neutral-dark-800 leading-tight">
          {post.title}
        </h3>

        <div className="flex items-center gap-2">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm text-neutral-dark-800">
              {post.author.name}
            </span>
            <span className="text-sm text-neutral-dark-100">Autor</span>
          </div>
        </div>
      </div>
    </article>
  )
}
