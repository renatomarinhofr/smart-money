'use client'

import { Feature } from '@/domain/models/feature.model'
import { getFeatures } from '@/data/repositories/feature.repository'

export interface FeatureController {
  features: Feature[]
}

export function useFeatureController(): FeatureController {
  const features = getFeatures()

  return {
    features
  }
}
