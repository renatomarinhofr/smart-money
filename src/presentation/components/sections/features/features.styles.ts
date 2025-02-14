'use client'

import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral.dark[500]};
  padding: ${({ theme }) => theme.space[16]} 0;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space[24]} 0;
  }
`

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[6]};
  position: relative;
  z-index: 10;
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[12]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[16]};
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[8]};
`

export const Title = styled.h2`
  text-align: center;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    font-size: 3.5rem;
  }
`

export const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.space[6]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  max-width: 28rem;
`

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral.dark['800']};
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral.dark['800']};
`

export const ProgressBar = styled.div`
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.neutral.light['gray-02']};
  border-radius: 9999px;
  overflow: hidden;
`

export const Progress = styled.div`
  height: 100%;
  width: 33.33%;
  background-color: ${({ theme }) => theme.colors.brand.primary.DEFAULT};
  border-radius: 9999px;
`

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[16]};
`

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`

export const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral.light['gray-02']};
`

export const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral.light['gray-02']};
`

export const RightColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.space[12]};
  padding-top: ${({ theme }) => theme.space[8]};
`

export const ImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.space[12]} 0;
`

export const ImageGroup = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
`

export const FeaturesImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
