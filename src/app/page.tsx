'use client';

import { Hero } from '@/presentation/components/sections/hero/hero';
import { Solutions } from '@/presentation/components/sections/solutions/solutions';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Solutions />
    </main>
  )
}
