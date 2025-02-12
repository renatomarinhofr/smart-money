'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '@/domain/models/menu.model';
import { MenuIcon } from '@/components/icons/Menu';
import { headerStyles } from '../styles/header.styles';
import { menuVariants, menuItemVariants } from '../animations/header.animations';

interface HeaderViewProps {
  menuItems: MenuItem[];
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

const DesktopNavigation = ({ items }: { items: MenuItem[] }) => (
  <div className={headerStyles.desktopNav}>
    <nav className={headerStyles.navList}>
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={headerStyles.navLink}
        >
          {item.label}
        </Link>
      ))}
    </nav>

    <Link href="#" className={headerStyles.signUpButton}>
      Cadastre-se
    </Link>
  </div>
);

const MobileNavigation = ({
  items,
  onClose,
}: {
  items: MenuItem[];
  onClose: () => void;
}) => (
  <motion.div className={headerStyles.mobileMenuContent}>
    <motion.nav className={headerStyles.mobileNavList}>
      {items.map((item) => (
        <motion.div key={item.label} variants={menuItemVariants}>
          <Link
            href={item.href}
            className={headerStyles.mobileNavLink}
            onClick={onClose}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.nav>

    <motion.div variants={menuItemVariants}>
      <Link
        href="#"
        className={headerStyles.mobileSignUpButton}
        onClick={onClose}
      >
        Cadastre-se
      </Link>
    </motion.div>
  </motion.div>
);

export const HeaderView = ({
  menuItems,
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
}: HeaderViewProps) => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <Image
          src="/logo-smartmoney.png"
          alt="SmartMoney"
          width={231}
          height={36}
          priority
          className={headerStyles.logo}
        />

        <DesktopNavigation items={menuItems} />

        <button
          onClick={onToggleMenu}
          className={headerStyles.menuButton}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={headerStyles.mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <MobileNavigation items={menuItems} onClose={onCloseMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
