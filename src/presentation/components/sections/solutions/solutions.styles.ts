'use client'

import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.space[16]} 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[8]};
`

export const ImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ImageGroup = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
`

export const SolutionsImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
