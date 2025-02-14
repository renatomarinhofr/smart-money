'use client'

import { TypeAnimation } from 'react-type-animation'
import { AnimatedNumber } from '@/components/AnimatedNumber'

interface AnimatedHeroContentProps {
  title: string
  stats: {
    projects: {
      value: number
      label: string
    }
    offices: {
      value: number
      label: string
    }
    revenue: {
      value: number
      label: string
      suffix: string
    }
  }
}

export function AnimatedHeroContent({ title, stats }: AnimatedHeroContentProps) {
  return (
    <>
      <h1 className="text-[32px] lg:text-[56px] font-semibold text-neutral-light-gray-01 text-center lg:text-left">
        <TypeAnimation
          sequence={[title]}
          wrapper="span"
          cursor={true}
          repeat={1}
          speed={50}
        />
      </h1>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-16 pb-4 md:pb-0">
        <AnimatedNumber 
          value={stats.projects.value} 
          label={stats.projects.label} 
        />

        <AnimatedNumber 
          value={stats.offices.value} 
          label={stats.offices.label} 
        />

        <AnimatedNumber 
          value={stats.revenue.value} 
          label={stats.revenue.label} 
          suffix={stats.revenue.suffix} 
        />
      </div>
    </>
  )
}
