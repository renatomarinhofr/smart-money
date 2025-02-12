export const headerStyles = {
  header: 'w-full relative bg-neutral-dark-800 z-50',
  container: 'max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between',
  logo: 'w-40',
  desktopNav: 'hidden lg:flex items-center gap-8',
  navList: 'flex gap-8',
  navLink: 'text-neutral-light-gray-01 text-sm hover:text-brand-primary transition-colors',
  signUpButton: 'bg-neutral-light-gray-01 text-neutral-dark-800 px-4 py-2 rounded hover:bg-brand-primary-dark transition-colors text-sm font-semibold hover:text-neutral-light-gray-01',
  menuButton: 'lg:hidden p-2',
  mobileMenu: 'lg:hidden absolute w-full bg-neutral-dark-800 z-50 overflow-hidden',
  mobileMenuContent: 'px-4 py-6 space-y-6 shadow-lg',
  mobileNavList: 'flex flex-col gap-6',
  mobileNavLink: 'text-neutral-light-gray-01 hover:text-brand-primary block',
  mobileSignUpButton: 'inline-block bg-brand-primary text-neutral-light-gray-01 px-4 py-2 rounded hover:bg-brand-primary-dark transition-colors text-sm w-full text-center'
};
