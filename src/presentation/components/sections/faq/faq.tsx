'use client'

import { useState } from 'react'
import { useFaqController } from '@/presentation/controllers/faq.controller'
import * as S from './faq.styles'
import { Plus, Minus } from 'lucide-react'

export function Faq() {
  const { title, subtitle, cards, questions } = useFaqController()
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)

  const toggleQuestion = (id: string) => {
    setExpandedQuestion(expandedQuestion === id ? null : id)
  }

  return (
    <S.Container>
      <S.Grid>
        <S.Content>
          <S.ContainerTitle>
            <S.PreTitle>Tire suas dúvidas</S.PreTitle>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
          </S.ContainerTitle>

          <S.CardsContainer>
            {cards.map((card, index) => (
              <S.Card key={index}>
                <S.Icon
                  src={card.icon}
                  alt={`Ícone ${card.title}`}
                  width={33}
                  height={32}
                  priority
                />
                <S.CardContent>
                  <S.CardTitle>{card.title}</S.CardTitle>
                  <S.CardDescription>{card.description}</S.CardDescription>
                </S.CardContent>
              </S.Card>
            ))}
          </S.CardsContainer>
        </S.Content>

        <S.QuestionsContainer>
          {questions.map((question) => (
            <S.QuestionItem key={question.id}>
              <S.QuestionHeader onClick={() => toggleQuestion(question.id)}>
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between w-full gap-4">
                    <div className="flex items-center gap-4">
                      <S.QuestionId>{question.id}</S.QuestionId>
                      <S.Question>{question.question}</S.Question>
                    </div>
                    {expandedQuestion === question.id ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </div>
                  <S.Answer data-expanded={expandedQuestion === question.id}>
                    {question.answer}
                  </S.Answer>
                </div>
              </S.QuestionHeader>
            </S.QuestionItem>
          ))}
        </S.QuestionsContainer>
      </S.Grid>
    </S.Container>
  )
}
