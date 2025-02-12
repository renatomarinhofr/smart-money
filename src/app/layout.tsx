import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from '@/components/Header'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'SmartMoney',
  description: 'SmartMoney - Sua plataforma financeira inteligente'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>): ReactNode {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} antialiased font-archivo bg-neutral-light-gray-01`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
