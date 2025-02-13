'use client'

import { Feature } from '@/domain/models/feature.model'
import Image from 'next/image'

interface FeatureCardProps {
  feature: Feature
  isHighlighted?: boolean
}

export function FeatureCard({ feature, isHighlighted = false }: FeatureCardProps) {
  return (
    <div className={`space-y-4 ${isHighlighted ? 'bg-white rounded-lg p-6' : ''}`}>
      {feature.tag && (
        <span className="px-4 py-2 rounded-full border-neutral-dark-700 text-neutral-light-gray-01 text-sm bg-neutral-dark-800 border-2">
          {feature.tag}
        </span>
      )}
      <h3 className="text-xl font-semibold text-neutral-dark-800">
        {feature.title}
      </h3>
      <p className="text-neutral-dark-50">
        {feature.description}
      </p>
      {feature.image && isHighlighted && (
        <div className="relative mt-6">
          <Image
            src={feature.image}
            alt={feature.title}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  )
}
