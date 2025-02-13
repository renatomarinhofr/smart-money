export interface CallToActionCard {
  icon: string
  title: string
  description: string
  buttonText: string
  buttonVariant?: 'primary' | 'outlined' | 'ghost'
}

export interface CallToActionModel {
  cards: CallToActionCard[]
}
