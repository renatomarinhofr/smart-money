'use client'

import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.space[24]} 0;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[16]};
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.neutral.light['gray-02']};
    border-radius: 2px;
    width: 80%;
    height: 4px;
    top: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.space[8]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);

    &::after {
      width: 4px;
      height: 80%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.space[4]};
`

export const Icon = styled(Image)`
  margin-bottom: ${({ theme }) => theme.space[4]};
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral.dark['800']};
  max-width: 280px;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.neutral.dark['100']};
  margin-bottom: ${({ theme }) => theme.space[6]};
`
