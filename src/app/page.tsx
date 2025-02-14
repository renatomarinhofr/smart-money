import { Hero } from '@/presentation/components/sections/hero/hero'
import { Solutions } from '@/presentation/components/sections/solutions/solutions'
import { Blog } from '@/presentation/components/sections/blog/blog'
import { Features } from '@/presentation/components/sections/features/features'
import { CallToAction } from '@/presentation/components/sections/call-to-action/call-to-action'
import { Faq } from '@/presentation/components/sections/faq/faq'
import { getBlogPosts } from '@/data/repositories/blog.repository'
import { client } from '@/sanity/lib/client'
import { heroQuery } from '@/sanity/queries/hero'

export const revalidate = 3600

export default async function Home() {
  const posts = await getBlogPosts()
  const heroData = await client.fetch(heroQuery)

  return (
    <main className="min-h-screen">
      <Hero data={heroData} />
      <Solutions />
      <Blog initialPosts={posts} />
      <Features />
      <CallToAction />
      <Faq />
    </main>
  )
}
