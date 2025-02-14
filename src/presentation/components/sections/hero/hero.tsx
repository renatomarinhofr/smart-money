import Image from 'next/image'
import { FormCardController } from '@/presentation/controllers/form-card.controller'
import { AnimatedHeroContent } from './animated-hero-content'

interface HeroData {
  tag: {
    text: string
  }
  title: string
  description: string
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

interface HeroProps {
  data: HeroData
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative bg-neutral-dark-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-32 pb-40 lg:pb-32">
        <div className="absolute inset-0 top-[-1800px] lg:top-0">
          <Image
            src="/lines.svg"
            alt="Background lines"
            fill
            className="opacity-20 object-cover"
            priority
          />
        </div>

        <div className="relative z-10 flex justify-between items-center flex-col lg:flex-row lg:items-start">
          <div className="flex flex-col max-w-[592px] space-y-6 items-center justify-center lg:items-start">
            <span className="px-4 py-2 rounded-full border-neutral-dark-700 text-neutral-light-gray-01 text-sm bg-neutral-dark-800 border-2">
              {data.tag.text}
            </span>

            <AnimatedHeroContent title={data.title} stats={data.stats} />

            <p className="text-neutral-light-gray-01 lg:text-lg text-center lg:text-left">
              {data.description}
            </p>
          </div>

          <div className="translate-y-[200px] max-w-[488px] lg:absolute lg:right-4 lg:translate-y-44 lg:bottom-0">
            <FormCardController />
          </div>
        </div>
      </div>
    </section>
  )
}
