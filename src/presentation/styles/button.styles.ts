import { tv } from 'tailwind-variants'

export const button = tv({
  base: [
    'font-semibold rounded-lg transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ],
  variants: {
    variant: {
      primary: [
        'bg-brand-primary text-neutral-light-gray-01',
        'hover:bg-brand-primary-dark',
        'active:bg-brand-primary-dark'
      ],
      outlined: [
        'border-2 border-brand-primary text-brand-primary bg-transparent',
        'hover:bg-brand-primary hover:text-neutral-light-gray-01',
        'active:bg-brand-primary-dark active:border-brand-primary-dark'
      ],
      ghost: [
        'bg-transparent text-neutral-dark-800',
        'hover:bg-neutral-dark-50/10',
        'active:bg-neutral-dark-50/20'
      ]
    },
    size: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-6 py-4 text-lg'
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto'
    },
    loading: {
      true: 'cursor-wait',
      false: 'cursor-pointer'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    loading: false
  }
})
