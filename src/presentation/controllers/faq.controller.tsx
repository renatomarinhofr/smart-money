import { FaqModel, FaqCard, FaqQuestion } from '@/domain/models/faq.model'

export function useFaqController(): FaqModel {
  const cards: FaqCard[] = [
    {
      icon: '/questions.svg',
      title: 'Dúvidas?',
      description: 'Envie uma mensagem para nosso time'
    },
    {
      icon: '/be-part.svg',
      title: 'Faça parte',
      description: 'Cadastre-se para transformar sua empresa'
    },
    {
      icon: '/whatsapp.svg',
      title: 'Chama no zap',
      description: 'Fale com o nosso comercial'
    }
  ]

  const questions: FaqQuestion[] = [
    {
      id: '01',
      question: 'Quais recursos ainda posso acessar nas novas Páginas?',
      answer:
        'Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.'
    },
    {
      id: '02',
      question: 'Como faço para abrir a minha nova Página?',
      answer:
        'Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.'
    },
    {
      id: '03',
      question: 'Há algum conteúdo que não migrará com a minha Página?',
      answer:
        'Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.'
    },
    {
      id: '04',
      question: 'Como as pessoas encontrarão a minha nova Página?',
      answer:
        'Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.'
    },
    {
      id: '05',
      question: 'O que é o Feed? Como faço para configurá-lo?',
      answer:
        'Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.'
    }
  ]

  return {
    title: 'Perguntas mais frequentes',
    subtitle:
      'Separamos algumas perguntas e respostas que podem te ajudar na sua decisão',
    cards,
    questions
  }
}
