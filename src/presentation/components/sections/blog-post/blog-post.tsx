'use client'

import { BlogPost } from '@/domain/models/blog-post.model'
import Link from 'next/link'
import Image from 'next/image'
import * as S from './blog-post.styles'

interface BlogPostViewProps {
  post: BlogPost
}

export function BlogPostView({ post }: BlogPostViewProps) {
  return (
    <S.Container>
      <S.Article>
        <S.Header>
          <S.Breadcrumb>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m0 0l7 7m-7-7l7-7"
                />
              </svg>
              Voltar
            </Link>
            / <Link href="/">artigos</Link> / <S.PostTitle>{post.title}</S.PostTitle>
          </S.Breadcrumb>
          <S.Category>{post.category}</S.Category>
          <S.Title>{post.title}</S.Title>


          <S.AuthorInfo>
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className="avatar"
            />
            <div className="author-details">
              <span>Por</span>
              <span className="name">{post.author.name}</span>
              <span className="bullet">•</span>
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </S.AuthorInfo>

          {post.image && (
            <S.FeaturedImage src={post.image} alt={post.title} />
          )}
        </S.Header>

        <S.Content dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      </S.Article>
    </S.Container>
  )
}
