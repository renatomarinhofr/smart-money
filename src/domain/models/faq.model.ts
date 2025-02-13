export interface FaqCard {
  icon: string
  title: string
  description: string
}

export interface FaqQuestion {
  id: string
  question: string
  answer: string
}

export interface FaqModel {
  title: string
  subtitle: string
  cards: FaqCard[]
  questions: FaqQuestion[]
}
