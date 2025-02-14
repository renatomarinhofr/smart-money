'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { AnimatedNumber } from '@/components/AnimatedNumber'
import { FormCardController } from '@/presentation/controllers/form-card.controller'

export function Hero() {
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
              ✨ Tecnologia disruptiva
            </span>

            <h1 className="text-[32px] lg:text-[56px] font-semibold text-neutral-light-gray-01 text-center lg:text-left">
              <TypeAnimation
                sequence={['Conta digital que não é só uma conta digital.']}
                wrapper="span"
                cursor={true}
                repeat={1}
                speed={50}
              />
            </h1>

            <p className="text-neutral-light-gray-01 lg:text-lg text-center lg:text-left">
              Pellentesque rutrum turpis non est turpis pretium morbi urna.
            </p>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-16 pb-4 md:pb-0">
              <AnimatedNumber value={120} label="Projeto realizado 2021" />

              <AnimatedNumber value={12} label="Escritórios no Brasil" />

              <AnimatedNumber value={15} label="Faturamento 2021" suffix="mi" />
            </div>
          </div>

          <div className="translate-y-[200px] max-w-[488px] lg:absolute lg:right-4 lg:translate-y-44 lg:bottom-0">
            <FormCardController />
          </div>
        </div>
      </div>
    </section>
  )
}
