'use client'

import Link from 'next/link'
import * as S from '@/presentation/components/sections/blog-post/not-found.styles'

export default function BlogNotFound() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Post não encontrado</S.Title>
        <S.Description>
          O post que você está procurando não existe ou foi removido.
        </S.Description>
        <div>
          <Link href="/" passHref legacyBehavior>
            <S.BackLink>Voltar para a página inicial</S.BackLink>
          </Link>
        </div>
      </S.Content>
    </S.Container>
  )
}
