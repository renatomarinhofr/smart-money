import { GraphQLClient } from 'graphql-request'
import { Post } from '../models/post.model'

const endpoint = 'https://devblog.insanydesign.com/graphql'
const graphQLClient = new GraphQLClient(endpoint)

export class BlogService {
  static async getPosts(): Promise<Post[]> {
    const query = `
      query {
        posts {
          nodes {
            id
            title
            content
            date
          }
        }
      }
    `

    try {
      const data = await graphQLClient.request<{ posts: { nodes: Post[] } }>(
        query
      )
      return data.posts.nodes
    } catch (error) {
      console.error('Error fetching posts:', error)
      return []
    }
  }
}
