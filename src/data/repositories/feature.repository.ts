import { Feature } from '@/domain/models/feature.model'

const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Tecnologia de ponta',
    description:
      'Nullam neque, rutrum et enim diam, ligula fringilla aliquet tincidunt ullamcorper elit',
    tag: 'Tecnologia disruptiva',
    image: '/woman-phone.png'
  },
  {
    id: '2',
    title: 'Entrega eficiente',
    description:
      'Posuere sollicitudin semper in posuere habitant. Quis luctus et egestas viverra pellentesque.'
  },
  {
    id: '3',
    title: 'Suporte especializado',
    description:
      'In massa, erat felis massa tincidunt. Aliquam, iaculis rutrum in mauris, integer.'
  }
]

export function getFeatures(): Feature[] {
  return FEATURES
}

export function getFeatureById(id: string): Feature | undefined {
  return FEATURES.find((feature) => feature.id === id)
}
