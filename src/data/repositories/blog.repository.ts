import { BlogPost } from '@/domain/models/blog-post.model'

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    category: 'Business',
    date: 'Outubro 2021',
    title: 'Como o Open Finance está revolucionando o mercado financeiro',
    excerpt: 'Descubra as mudanças e oportunidades trazidas pelo Open Finance.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '2',
    category: 'Tecnologia',
    date: 'Outubro 2021',
    title: 'Inteligência Artificial no setor bancário: tendências para 2024',
    excerpt: 'As principais aplicações de IA em serviços financeiros.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '3',
    category: 'Finanças',
    date: 'Outubro 2021',
    title: 'Gestão financeira: como organizar as finanças da sua empresa',
    excerpt: 'Dicas práticas para uma gestão financeira eficiente.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '4',
    category: 'Business',
    date: 'Outubro 2021',
    title: 'PIX: como essa tecnologia transformou os pagamentos no Brasil',
    excerpt: 'O impacto do PIX na economia brasileira.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '5',
    category: 'Tecnologia',
    date: 'Outubro 2021',
    title: 'Blockchain e o futuro das transações financeiras',
    excerpt: 'Como a tecnologia blockchain está mudando o setor financeiro.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '6',
    category: 'Finanças',
    date: 'Outubro 2021',
    title: 'Investimentos: estratégias para diversificar sua carteira',
    excerpt: 'Aprenda a montar uma carteira de investimentos equilibrada.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '7',
    category: 'Business',
    date: 'Outubro 2021',
    title: 'ESG no setor financeiro: práticas sustentáveis em alta',
    excerpt: 'A importância das práticas ESG para instituições financeiras.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '8',
    category: 'Tecnologia',
    date: 'Outubro 2021',
    title: 'Cloud Computing: otimizando processos financeiros',
    excerpt: 'Benefícios da computação em nuvem para o setor financeiro.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '9',
    category: 'Finanças',
    date: 'Outubro 2021',
    title: 'Análise de dados: tomada de decisão baseada em dados',
    excerpt: 'Como usar dados para melhorar resultados financeiros.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '10',
    category: 'Business',
    date: 'Outubro 2021',
    title: 'Tendências em meios de pagamento para 2024',
    excerpt: 'As principais inovações em pagamentos digitais.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '11',
    category: 'Tecnologia',
    date: 'Outubro 2021',
    title: 'Cibersegurança: protegendo ativos financeiros',
    excerpt: 'Melhores práticas em segurança digital para empresas.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '12',
    category: 'Finanças',
    date: 'Outubro 2021',
    title: 'Planejamento financeiro: preparando-se para o futuro',
    excerpt: 'Guia completo para um planejamento financeiro eficaz.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '13',
    category: 'Business',
    date: 'Outubro 2021',
    title: 'Marketing digital para instituições financeiras',
    excerpt: 'Estratégias de marketing para o setor financeiro.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '14',
    category: 'Tecnologia',
    date: 'Outubro 2021',
    title: 'APIs financeiras: integrando serviços e sistemas',
    excerpt: 'Como as APIs estão transformando serviços financeiros.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '15',
    category: 'Finanças',
    date: 'Outubro 2021',
    title: 'Gestão de riscos: protegendo seu negócio',
    excerpt: 'Principais aspectos da gestão de riscos financeiros.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  },
  {
    id: '16',
    category: 'Business',
    date: 'Outubro 2021',
    title: 'Transformação digital no setor financeiro',
    excerpt: 'Como a digitalização está mudando o mercado financeiro.',
    author: {
      name: 'Savannah Nguyen',
      avatar: '/autor-blog.png'
    },
    image: '/woman-blog.png'
  }
]

export function getBlogPosts(): BlogPost[] {
  return BLOG_POSTS
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.id === id)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter(post => post.category === category)
}
