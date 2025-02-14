import * as S from './feature-card.styles'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  alt: string
}

export function FeatureCard({
  icon,
  title,
  description,
  alt
}: FeatureCardProps) {
  return (
    <S.Card>
      <S.IconWrapper>
        <S.Icon src={icon} alt={alt} width={64} height={64} />
      </S.IconWrapper>

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Card>
  )
}
