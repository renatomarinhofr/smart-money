'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/presentation/styles/theme'
import { GlobalStyles } from '@/presentation/styles/global'
import StyledComponentsRegistry from './registry'
import { useEffect, useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {mounted ? children : null}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
