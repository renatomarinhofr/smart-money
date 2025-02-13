import Image from 'next/image'

interface SolutionCardProps {
  icon: string
  title: string
  description: string
  alt: string
}

function SolutionCard({ icon, title, description, alt }: SolutionCardProps) {
  return (
    <div className="p-8 rounded-lg border border-neutral-dark-50 space-y-4">
      <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center">
        <Image src={icon} alt={alt} width={24} height={24} />
      </div>
      <h3 className="text-xl font-bold text-neutral-dark-800">{title}</h3>
      <p className="text-neutral-dark-100">{description}</p>
    </div>
  )
}

export function Solutions() {
  const solutions = [
    {
      icon: '/rocket.svg',
      title: 'Fim da complexidade',
      description: 'Amet sed in massa dui. Purus sed ut sit. Cras sed auctor lacus venenatis tincidunt eoterra.',
      alt: 'Fim da complexidade'
    },
    {
      icon: '/wave.svg',
      title: 'Sem burocracia',
      description: 'Et sem sed in massa dui. Purus sed ut sit. Cras sed auctor lacus venenatis tincidunt eoterra.',
      alt: 'Sem burocracia'
    },
    {
      icon: '/mouse.svg',
      title: 'Tudo digital',
      description: 'Suscipit pellentesque praesent duis tincidunt gravida. Take amet sed in massa dui.',
      alt: 'Tudo digital'
    },
    {
      icon: '/chart.svg',
      title: 'Evolução constante',
      description: 'Nam sed in massa dui. Purus sed ut sit. Cras sed auctor lacus vel gravida praesit volutpa.',
      alt: 'Evolução constante'
    }
  ]

  return (
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
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              alt={solution.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
