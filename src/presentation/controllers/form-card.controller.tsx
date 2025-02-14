'use client'

import { useState } from 'react'
import { UserType } from '@/domain/models/user.model'
import { FormCardView } from '../views/form-card.view'

export const FormCardController = () => {
  const [userType, setUserType] = useState<UserType>('personal')

  const handleTypeChange = (type: UserType) => {
    setUserType(type)
  }

  return <FormCardView userType={userType} onTypeChange={handleTypeChange} />
}
