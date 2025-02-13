import Image from 'next/image'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  alt: string
}

export function FeatureCard({ icon, title, description, alt }: FeatureCardProps) {
  return (
    <div className="space-y-4 max-w-[268px] text-center lg:text-left">
      <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mx-auto lg:mx-0">
        <Image src={icon} alt={alt} width={64} height={64} />
      </div>
      <h3 className="text-xl font-bold text-neutral-dark-800">{title}</h3>
      <p className="text-neutral-dark-100 text-sm">{description}</p>
    </div>
  )
}
