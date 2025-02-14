import {
  CallToActionModel,
  CallToActionCard
} from '@/domain/models/call-to-action.model'

export function useCallToActionController(): CallToActionModel {
  const cards: CallToActionCard[] = [
    {
      icon: '/money.png',
      title: 'Faça parte do mercado digital financeiro!',
      description: 'Pellentesque urna commodo, elementum, est nullam.',
      buttonText: 'Quero ser cliente',
      buttonVariant: 'primary'
    },
    {
      icon: '/message.png',
      title: 'Um time de suporte incrível para lhe atender',
      description: 'Pellentesque urna commodo, elementum, est nullam.',
      buttonText: 'Fale conosco',
      buttonVariant: 'outlined'
    }
  ]

  return {
    cards
  }
}
