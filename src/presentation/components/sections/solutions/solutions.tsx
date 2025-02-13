import { ButtonController } from '@/presentation/controllers/button.controller'
import Image from 'next/image'
import * as S from './solutions.styles'
import { FeatureCard } from './feature-card'

export function Solutions() {
  const features = [
    {
      icon: '/atom.png',
      title: 'Fim da complexidade',
      description: 'Amet, leo turpis facilisi nam fusce nunc molestie. Orci, nibh auctor lacus eleifend tincidunt sceleris',
      alt: 'Fim da complexidade'
    },
    {
      icon: '/wireless-charging.png',
      title: 'Sem burocracia',
      description: 'Eu arcu arcu vitae ipsum sed. Purus volutpat laoreet sed nisi, imperdiet sit aliquam viverra.',
      alt: 'Sem burocracia'
    },
    {
      icon: '/mouse-click.png',
      title: 'Tudo digital',
      description: 'Dictum mi risus auctor donec et amet duis tincidunt gravida. Tellus amet, porttitor quis mauris.',
      alt: 'Tudo digital'
    },
    {
      icon: '/const-evolution.png',
      title: 'Evolução constante',
      description: 'Commodo egestas dolor, sapien nam posuere at. Ultrices dictum cras vel gravida gravida vehicula',
      alt: 'Evolução constante'
    }
  ]

  return (
    <section className="bg-white pt-32 pb-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-32">
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <div className="max-w-[592px] space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h2 className="text-[32px] font-bold text-neutral-dark-800">
                Conheça nossas<br />
                solução customizadas
              </h2>
              <p className="text-neutral-dark-100">
                Suscipit pellentesque praesent auctor molestie massa nunc vitae feles eget sed ut gravida in maecenas. Tempus in in in congue proin.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Image src="/check.svg" alt="Check" width={24} height={24} />
                <p className="text-neutral-dark-800 text-left">Sagittis sed cursus sed malesuada ultrices</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/check.svg" alt="Check" width={24} height={24} />
                <p className="text-neutral-dark-800 text-left">Lectus ac at massa ac tellus fringilla aenean</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/check.svg" alt="Check" width={24} height={24} />
                <p className="text-neutral-dark-800 text-left">Cras faucibus tristique volutpat accumsan</p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-4">
              <ButtonController className="w-full lg:w-fit">
                Quero ser cliente
              </ButtonController>
              <ButtonController
                variant="ghost"
                className="flex items-center gap-2 justify-center lg:justify-start px-0 hover:bg-transparent font-archivo text-base leading-6 tracking-[0%] font-normal"
              >
                <Image src="/phone.svg" alt="Phone" width={13.33} height={20} />
                Fale conosco
              </ButtonController>
            </div>
          </div>

          <S.ImagesWrapper>
            <S.ImageGroup>
              <S.SolutionsImage
                src="/group-solutions.svg"
                alt="Solutions illustration"
                width={600}
                height={600}
                priority
              />
            </S.ImageGroup>
          </S.ImagesWrapper>
        </div>

        <div className="flex flex-col items-center lg:grid lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              alt={feature.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
