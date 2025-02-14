export type ButtonVariant = 'primary' | 'outlined' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonModel {
  variant?: ButtonVariant
  size?: ButtonSize
  type?: ButtonType
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  className?: string
  children: React.ReactNode
}
