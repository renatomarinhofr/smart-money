'use client';

import Image from 'next/image'
import { AnimatedNumber } from '@/components/AnimatedNumber'
import { FormCardController } from '@/presentation/controllers/form-card.controller';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <main className="min-h-screen">
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
                  sequence={[
                    'Conta digital que não é só uma conta digital.',
                  ]}
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
                <AnimatedNumber
                  value={120}
                  label="Projeto realizado 2021"
                />

                <AnimatedNumber
                  value={12}
                  label="Escritórios no Brasil"
                />

                <AnimatedNumber
                  value={15}
                  label="Faturamento 2021"
                  suffix="mi"
                />
              </div>
            </div>

            <div className="translate-y-[200px] max-w-[488px] lg:absolute lg:right-4 lg:translate-y-44 lg:bottom-0">
              <FormCardController />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-32 pb-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="max-w-[592px] space-y-6 mb-16">
            <h2 className="text-[32px] font-bold text-neutral-dark-800">
              Conheça nossas<br />
              solução customizadas
            </h2>
            <p className="text-neutral-dark-100">
              Suscipit pellentesque praesent auctor molestie massa nunc vitae feles eget sed ut gravida in maecenas. Tempus in in in congue proin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-lg border border-neutral-dark-50 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                <Image src="/rocket.svg" alt="Fim da complexidade" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark-800">Fim da complexidade</h3>
              <p className="text-neutral-dark-100">Amet sed in massa dui. Purus sed ut sit. Cras sed auctor lacus venenatis tincidunt eoterra.</p>
            </div>

            <div className="p-8 rounded-lg border border-neutral-dark-50 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                <Image src="/wave.svg" alt="Sem burocracia" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark-800">Sem burocracia</h3>
              <p className="text-neutral-dark-100">Et sem sed in massa dui. Purus sed ut sit. Cras sed auctor lacus venenatis tincidunt eoterra.</p>
            </div>

            <div className="p-8 rounded-lg border border-neutral-dark-50 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                <Image src="/mouse.svg" alt="Tudo digital" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark-800">Tudo digital</h3>
              <p className="text-neutral-dark-100">Suscipit pellentesque praesent duis tincidunt gravida. Take amet sed in massa dui.</p>
            </div>

            <div className="p-8 rounded-lg border border-neutral-dark-50 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                <Image src="/chart.svg" alt="Evolução constante" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark-800">Evolução constante</h3>
              <p className="text-neutral-dark-100">Nam sed in massa dui. Purus sed ut sit. Cras sed auctor lacus vel gravida praesit volutpa.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
