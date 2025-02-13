import styled from 'styled-components'
import Image from 'next/image'

export const PreTitle = styled.span`
  font-size: 0.875rem; /* 14px */
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem; /* 16px */
  }
`

export const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.neutral.light['gray-01']};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 6rem 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: flex-start;
  }
`

export const ContainerTitle = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 40px
  }
`

export const Subtitle = styled.p`
  margin-bottom: 3rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Icon = styled(Image)`
  flex-shrink: 0;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`

export const CardDescription = styled.p`
  font-size: 16px;
`

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const QuestionItem = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  min-height: 7rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
`

export const QuestionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  cursor: pointer;
  width: 100%;

  > div {
    flex: 1;
    min-width: 0;
    min-width: 0;
  }

  > svg {
    flex-shrink: 0;
    margin-left: auto;
  }
`

export const QuestionId = styled.span`
  color: ${({ theme }) => theme.colors.brand.primary.DEFAULT};
  font-weight: 600;
`

export const Question = styled.h4`
  font-size: 16px;
  font-weight: 600;
`

export const Answer = styled.p`
  font-size: 16px;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &[data-expanded="true"] {
    height: auto;
    opacity: 1;
    margin-top: 1rem;
  }
`
