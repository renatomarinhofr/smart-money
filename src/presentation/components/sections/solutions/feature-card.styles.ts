'use client'

import styled from 'styled-components'
import Image from 'next/image'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  max-width: 268px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0;
  }
`

export const Icon = styled(Image)`
  width: ${({ theme }) => theme.space[16]};
  height: ${({ theme }) => theme.space[16]};
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral.dark['800']};
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.neutral.dark['100']};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`
