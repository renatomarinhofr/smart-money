import { Hero } from '@/presentation/components/sections/hero/hero'
import { Solutions } from '@/presentation/components/sections/solutions/solutions'
import { Blog } from '@/presentation/components/sections/blog/blog'
import { Features } from '@/presentation/components/sections/features/features'
import { CallToAction } from '@/presentation/components/sections/call-to-action/call-to-action'
import { Faq } from '@/presentation/components/sections/faq/faq'
import { getBlogPosts } from '@/data/repositories/blog.repository'

export default async function Home() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen">
      <Hero />
      <Solutions />
      <Blog initialPosts={posts} />
      <Features />
      <CallToAction />
      <Faq />
    </main>
  )
}
