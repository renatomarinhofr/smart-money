# Smart Money

Um SPA moderno e responsivo construído com Next.js 15 e Sanity CMS, seguindo padrões de arquitetura MVC e as melhores práticas de desenvolvimento.

## Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Styled Components** - Estilização com CSS-in-JS
- **TailwindCSS** - Utilitários CSS
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

### CMS
- **Sanity CMS** - Headless CMS para gerenciamento de conteúdo
- **GraphQL** - Queries para o Sanity
- **Next.js API Routes** - Backend serverless

## Arquitetura

O projeto utiliza o padrão arquitetural MVC (Model-View-Controller), oferecendo uma clara separação de responsabilidades:

### MVC (Model-View-Controller)

- **Model**: 
  - Representa os dados e a lógica de negócios
  - Interfaces TypeScript
  - Schemas do Sanity CMS
  - Repositórios para acesso aos dados

- **View**: 
  - Interface do usuário (UI)
  - Componentes React
  - Styled Components para estilização
  - Responsável apenas pela apresentação

- **Controller**: 
  - Intermediário entre Model e View
  - Gerenciamento de estado e lógica de negócios
  - Manipulação de eventos e interações do usuário
  - Comunicação com o Sanity CMS

### Estrutura de Pastas
```
/src
  /app - App Router do Next.js
  /data
    /repositories - Acesso aos dados
  /domain
    /models - Interfaces e tipos
  /presentation
    /components - Views (Componentes React)
      /sections - Seções principais do site
      /ui - Componentes base
    /controllers - Controllers
    /styles - Estilos globais
  /sanity
    /schemas - Schemas do Sanity CMS
    /queries - Queries GraphQL
```

### Benefícios da Arquitetura
- **Organização**: Código bem estruturado e fácil de navegar
- **Manutenibilidade**: Separação clara de responsabilidades
- **Escalabilidade**: Facilita a adição de novas features
- **Reusabilidade**: Componentes e lógica reutilizáveis

## Configuração do Ambiente

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta no Sanity.io

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="6mq67gdj"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_TOKEN="skmKIVjjJW2TtAGmf97z18p9NU6E9FEFrEWNVNvpvCI7nBggQ8aNwWaF4TciyezHvv3reCAYPJWAENIK6fEK3qpUrsEPMqIiC8LkNJduI4y7tobKSmO3XERbzhBRdeHTov2eMfBzT60VpzgPYwzK5iDD0d1tyYkfbPvYMFhGtn5StEP7XqpV"
```

### Instalação e Execução

1. **Instalando Dependências**
```bash
npm install
# ou
yarn install
```

2. **Executando em Desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

3. **Build de Produção**
```bash
npm run build
npm start
```

## Integração com Sanity CMS

### Schemas Implementados
- Blog Posts
- Soluções
- Depoimentos
- Configurações Gerais

### Schemas Pendentes
- Hero Section
- Serviços
- FAQ
- Equipe
- Parceiros
- Formulário de Contato (configurações)

### Próximos Passos

1. **Completar Schemas**
   - Implementar schemas pendentes
   - Adicionar validações e campos personalizados
   - Configurar previews personalizados

2. **Studio Customization**
   - Personalizar interface do Sanity Studio
   - Adicionar campos de busca e filtros
   - Implementar workflows de publicação

3. **Integrações**
   - Implementar preview em tempo real
   - Configurar webhooks para revalidação
   - Adicionar sistema de assets

## Boas Práticas Adotadas
- **Clean Code** - Código limpo e manutenível
- **DRY (Don't Repeat Yourself)** - Evitando duplicação
- **SOLID Principles** - Princípios de design de software
- **Semantic HTML** - Markup semântico e acessível
- **Mobile First** - Design responsivo
- **Performance** - Otimizações de carregamento e SSR

## Deploy

### Ambiente de Produção
A aplicação está disponível em:
[https://smart-money-inky.vercel.app/](https://smart-money-inky.vercel.app/)

### Gerenciamento de Conteúdo (CMS)
Para gerenciar o conteúdo do site:
Acesse o Sanity Studio em: [https://smart-money-inky.vercel.app/studio](https://smart-money-inky.vercel.app/studio)


```bash
vercel deploy
```
