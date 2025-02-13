import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: var(--font-archivo), sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.neutral.light['gray-01']};
  }
`
