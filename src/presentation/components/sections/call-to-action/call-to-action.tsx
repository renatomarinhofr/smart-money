import { ButtonController } from '@/presentation/controllers/button.controller'
import { useCallToActionController } from '@/presentation/controllers/call-to-action.controller'
import * as S from './call-to-action.styles'

export function CallToAction() {
  const { cards } = useCallToActionController()

  return (
    <S.Container>
      <S.Grid>
        {cards.map((card, index) => (
          <S.Card key={index}>
            <S.Icon
              src={card.icon}
              alt={`Ícone ${card.title}`}
              width={64}
              height={64}
              priority
            />
            <S.Title>{card.title}</S.Title>
            <S.Description>{card.description}</S.Description>
            <ButtonController
              variant={card.buttonVariant}
              className="min-w-[240px]"
            >
              {card.buttonText}
            </ButtonController>
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  )
}
