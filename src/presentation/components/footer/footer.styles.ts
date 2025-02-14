import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.footer`
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

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};
  position: relative;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.space[8]};
  }
`

export const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.space[16]};
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

export const NewsletterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: flex-start;
  }
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.neutral.light['gray-02']};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const Form = styled.form`
  position: relative;
  min-width: 80%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 486px;
    flex-direction: row;
  }
`

export const Input = styled.input`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: 2px solid transparent;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.brand.primary.DEFAULT};
  }

  &:not(:placeholder-shown):invalid {
    border-color: #dc2626;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.dark[50]};
  }
`

export const Button = styled.button`
  position: static;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: absolute;
    right: ${({ theme }) => theme.space[2]};
    top: 50%;
    transform: translateY(-50%);
  }
  background-color: ${({ theme }) => theme.colors.brand.primary.DEFAULT};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
  height: 38px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.primary.dark};
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: flex-start;
  }
`

export const LinksTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`

export const LinksList = styled.ul<{ direction?: 'row' | 'column' }>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ theme }) => theme.space[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`

export const LinkItem = styled.li<{ hiddenMobile?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};

  a {
    display: ${({ hiddenMobile }) => (hiddenMobile ? 'none' : 'flex')};
    color: ${({ theme }) => theme.colors.neutral.light['gray-02']};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: flex;
    }
  }
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: auto;
    align-items: flex-start;
  }
`

export const SocialTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`

export const SocialList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};

  a {
    color: ${({ theme }) => theme.colors.neutral.light['gray-02']};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[16]};
  padding-top: ${({ theme }) => theme.space[8]};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.dark[400]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.neutral.light['gray-02']};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.neutral.light['gray-02']};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`
