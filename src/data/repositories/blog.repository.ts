import { GraphQLClient } from 'graphql-request'
import { BlogPost } from '@/domain/models/blog-post.model'
import { WordPressPost } from '@/domain/models/wordpress-post.model'

const endpoint = 'https://devblog.insanydesign.com/graphql'
const graphQLClient = new GraphQLClient(endpoint, {
  fetch: (url: RequestInfo | URL, init?: RequestInit) => fetch(url, { ...init, cache: 'force-cache' })
})

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${month} ${year}`
}

const defaultPost: BlogPost = {
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
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `
    query {
      posts {
        nodes {
          id
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `

  try {
    const data = await graphQLClient.request<{
      posts: { nodes: WordPressPost[] }
    }>(query)

    return data.posts.nodes.map((post) => ({
      id: post.id,
      category: 'Blog',
      date: formatDate(post.date),
      title: post.title,
      excerpt: post.excerpt || 'Clique para ler mais...',
      author: {
        name: post.author?.node?.name || 'Autor',
        avatar: post.author?.node?.avatar?.url || '/autor-blog.png'
      },
      image: post.featuredImage?.node?.sourceUrl || '/woman-blog.png'
    }))
  } catch (error) {
    console.error('Error fetching posts:', error)
    return [defaultPost]
  }
}

export async function getBlogPostById(
  id: string
): Promise<BlogPost | undefined> {
  const query = `
    query GetPost($id: ID!) {
      post(id: $id) {
        id
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  `

  try {
    const data = await graphQLClient.request<{ post: WordPressPost }>(query, {
      id
    })
    const post = data.post

    if (!post) return undefined

    return {
      id: post.id,
      category: 'Blog',
      date: formatDate(post.date),
      title: post.title,
      excerpt: post.excerpt || 'Clique para ler mais...',
      author: {
        name: post.author?.node?.name || 'Autor',
        avatar: post.author?.node?.avatar?.url || '/autor-blog.png'
      },
      image: post.featuredImage?.node?.sourceUrl || '/woman-blog.png'
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return undefined
  }
}

export async function getBlogPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.category === category)
}
