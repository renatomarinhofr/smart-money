'use client'

import { useFeatureController } from '@/presentation/controllers/feature.controller'
import { FeatureCard } from './feature-card'
import { ButtonController } from '@/presentation/controllers/button.controller'
import Image from 'next/image'
import * as S from './features.styles'

export function Features() {
  const { features } = useFeatureController()

  return (
    <S.Section>
      <S.BackgroundImage>
        <Image
          src="/background-lines.png"
          alt="Background lines"
          fill
          priority
          quality={100}
        />
      </S.BackgroundImage>

      <S.Container>
        <S.Grid>
          <S.Column>
            <S.TitleWrapper>
              <S.Title>
                03 vantagens exclusivas<br />
                da SmartMoney
              </S.Title>

              <S.FeatureCard>
                <S.CardTitle>
                  Tecnologia de ponta
                </S.CardTitle>
                <S.CardDescription>
                  Nullam neque, rutrum et enim diam, ligula fringilla aliquet tincidunt ullamcorper elit
                </S.CardDescription>
                <S.ProgressBar>
                  <S.Progress />
                </S.ProgressBar>
              </S.FeatureCard>
            </S.TitleWrapper>

            <S.FeatureList>
              {features.slice(1).map((feature) => (
                <S.FeatureItem key={feature.id}>
                  <S.FeatureTitle>
                    {feature.title}
                  </S.FeatureTitle>
                  <S.FeatureDescription>
                    {feature.description}
                  </S.FeatureDescription>
                </S.FeatureItem>
              ))}
            </S.FeatureList>
          </S.Column>

          <S.Column>
            <S.RightColumn>
              <ButtonController className='w-full lg:w-auto'>
                Quero ser cliente
              </ButtonController>

              <S.ImagesWrapper>
                <S.ImageGroup>
                  <S.FeaturesImage
                    src="/features-group.svg"
                    alt="Features illustration"
                    width={600}
                    height={600}
                    priority
                  />
                </S.ImageGroup>
              </S.ImagesWrapper>
            </S.RightColumn>
          </S.Column>
        </S.Grid>


      </S.Container>
    </S.Section>
  )
}
