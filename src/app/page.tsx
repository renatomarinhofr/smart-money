'use client';

import { Hero } from '@/presentation/components/sections/hero/hero';
import { Solutions } from '@/presentation/components/sections/solutions/solutions';
import { Blog } from '@/presentation/components/sections/blog/blog';
import { Features } from '@/presentation/components/sections/features/features';
import { CallToAction } from '@/presentation/components/sections/call-to-action/call-to-action';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Solutions />
      <Blog />
      <Features />
      <CallToAction />
    </main>
  )
}
