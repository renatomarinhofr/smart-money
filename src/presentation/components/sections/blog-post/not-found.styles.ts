import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  padding: 8rem 0;
`

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral.dark[800]};

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

export const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.neutral.dark[100]};
`

export const BackLink = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.neutral.light[100]};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.primaryDark};
  }
`
