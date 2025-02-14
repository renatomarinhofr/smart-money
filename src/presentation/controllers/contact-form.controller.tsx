'use client'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '../validation/user-schema'
import { UserModel, UserType } from '@/domain/models/user.model'
import { ContactFormView } from '../views/contact-form.view'
import { useEffect } from 'react'

interface ContactFormControllerProps {
  userType: UserType
}

export const ContactFormController = ({
  userType
}: ContactFormControllerProps) => {
  const methods = useForm<UserModel>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      type: userType
    }
  })

  useEffect(() => {
    methods.setValue('type', userType)
  }, [userType, methods])

  const onSubmit = async (data: UserModel) => {
    try {
      console.log('Form submitted with data:', data)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    methods.handleSubmit(onSubmit)(e)
  }

  return (
    <FormProvider {...methods}>
      <ContactFormView onSubmit={handleSubmit} />
    </FormProvider>
  )
}
