'use client'

import { useState, useCallback } from 'react'
import { HeaderView } from '../views/header.view'
import { MenuItem } from '@/domain/models/menu.model'

export const HeaderController = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems: MenuItem[] = [
    { label: 'Quem somos', href: '#' },
    { label: 'Soluções', href: '#' },
    { label: 'Carreira', href: '#' },
    { label: 'Contato', href: '#' },
    { label: 'Suporte', href: '#' }
  ]

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState)
  }, [])

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <HeaderView
      menuItems={menuItems}
      isMenuOpen={isMenuOpen}
      onToggleMenu={handleToggleMenu}
      onCloseMenu={handleCloseMenu}
    />
  )
}
