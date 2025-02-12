export const menuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.1,
    },
  },
} as const;

export const menuItemVariants = {
  closed: {
    x: -20,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
  },
} as const;
