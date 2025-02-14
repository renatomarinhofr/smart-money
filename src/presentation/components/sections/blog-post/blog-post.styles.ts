import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 0;
`

export const Breadcrumb = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.neutral.dark[100]};
  font-size: 0.875rem;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: ${({ theme }) => theme.colors.brand.primary.DEFAULT};
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`

export const PostTitle = styled.p`
  color: ${({ theme }) => theme.colors.brand.primary.DEFAULT};
  font-weight: 600;
`

export const Article = styled.article`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Header = styled.header`
  max-width: 768px;
  margin: 0 auto 2rem;
`

export const Category = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.brand.primary.dark};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.2rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral.dark[800]};
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.neutral.dark[100]};
  font-size: 0.875rem;
  margin-bottom: 2rem;
`

export const AuthorInfo = styled.div`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.neutral.dark[400]};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .avatar {
    border-radius: 50%;
  }

  .author-details {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .name {
      color: ${({ theme }) => theme.colors.neutral.dark[800]};
      font-weight: 600;
    }

    .bullet {
      color: ${({ theme }) => theme.colors.brand.primary.DEFAULT};
    }

    time {
      color: ${({ theme }) => theme.colors.neutral.dark[400]};
    }
  }
`

export const FeaturedImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`

export const Content = styled.div`
  max-width: 768px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.neutral.dark[800]};

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 2rem 0 1rem;
    color: ${({ theme }) => theme.colors.neutral.dark[800]};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 1.5rem 0 1rem;
    color: ${({ theme }) => theme.colors.neutral.dark[800]};
  }

  p {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.neutral.dark[600]};
  }

  a {
    color: ${({ theme }) => theme.colors.brand.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }
`
