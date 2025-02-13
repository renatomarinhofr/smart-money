'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/presentation/styles/theme'
import { GlobalStyles } from '@/presentation/styles/global'
import StyledComponentsRegistry from './registry'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
