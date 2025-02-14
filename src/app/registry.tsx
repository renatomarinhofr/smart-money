'use client'

import React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({
  children
}: {
  children: React.ReactNode
}) {
  const [sheet] = React.useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement()
    sheet.instance.clearTag()
    return styles
  })

  if (typeof window !== 'undefined') {
    return children
  }

  return (
    <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
  )
}
