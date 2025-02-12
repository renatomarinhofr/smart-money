'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon } from '@/components/icons/Menu'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full relative">
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
        <Image
          src="/logo-smartmoney.png"
          alt="SmartMoney"
          width={231}
          height={36}
          priority
          className="w-40 lg:w-auto"
        />

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-8">
            <Link href="#" className="text-neutral-dark-100 text-sm hover:text-brand-primary transition-colors">
              Quem somos
            </Link>
            <Link href="#" className="text-neutral-dark-100 text-sm hover:text-brand-primary transition-colors">
              Soluções
            </Link>
            <Link href="#" className="text-neutral-dark-100 text-sm hover:text-brand-primary transition-colors">
              Carreira
            </Link>
            <Link href="#" className="text-neutral-dark-100 text-sm hover:text-brand-primary transition-colors">
              Contato
            </Link>
            <Link href="#" className="text-neutral-dark-100 text-sm hover:text-brand-primary transition-colors">
              Suporte
            </Link>
          </nav>

          <Link
            href="#"
            className="bg-brand-primary text-neutral-light-gray-01 px-4 py-2 rounded hover:bg-brand-primary-dark transition-colors text-sm"
          >
            Cadastre-se
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2"
          aria-label="Abrir menu"
        >
          <MenuIcon />
        </button>
      </div>

      <div className={`lg:hidden absolute w-full bg-white z-50 shadow-lg transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-6 space-y-6">
          <nav className="flex flex-col gap-6">
            <Link href="#" className="text-neutral-dark-100 hover:text-brand-primary" onClick={() => setIsMenuOpen(false)}>
              Quem somos
            </Link>
            <Link href="#" className="text-neutral-dark-100 hover:text-brand-primary" onClick={() => setIsMenuOpen(false)}>
              Soluções
            </Link>
            <Link href="#" className="text-neutral-dark-100 hover:text-brand-primary" onClick={() => setIsMenuOpen(false)}>
              Carreira
            </Link>
            <Link href="#" className="text-neutral-dark-100 hover:text-brand-primary" onClick={() => setIsMenuOpen(false)}>
              Contato
            </Link>
            <Link href="#" className="text-neutral-dark-100 hover:text-brand-primary" onClick={() => setIsMenuOpen(false)}>
              Suporte
            </Link>
          </nav>

          <Link
            href="#"
            className="inline-block bg-brand-primary text-neutral-light-gray-01 px-4 py-2 rounded hover:bg-brand-primary-dark transition-colors text-sm w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </header>
  )
}