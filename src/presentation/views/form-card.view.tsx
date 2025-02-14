'use client'

import Image from 'next/image'
import { UserType } from '@/domain/models/user.model'
import { ContactFormController } from '../controllers/contact-form.controller'

interface FormCardViewProps {
  userType: UserType
  onTypeChange: (type: UserType) => void
}

export const FormCardView = ({ userType, onTypeChange }: FormCardViewProps) => {
  return (
    <div className="mx-1 w-full max-w-[488px] bg-white rounded-lg p-8 space-y-8 shadow-lg">
      <div className="space-y-2">
        <p className="text-sm text-neutral-dark-50">
          Faça parte da revolução digital!
        </p>
        <h2 className="text-2xl font-bold text-neutral-dark-800">
          Cadastre-se e faça parte do lançamento oficial
        </h2>
      </div>

      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="type"
            className="w-4 h-4 accent-brand-primary"
            checked={userType === 'personal'}
            onChange={() => onTypeChange('personal')}
          />
          <span className="text-sm text-neutral-dark-100 font-semibold">
            Para você
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="type"
            className="w-4 h-4 accent-brand-primary"
            checked={userType === 'business'}
            onChange={() => onTypeChange('business')}
          />
          <span className="text-sm text-neutral-dark-100 font-semibold">
            Para empresa
          </span>
        </label>
      </div>

      <ContactFormController userType={userType} />

      <p className="text-sm text-neutral-dark-100 font-['Calibri',_sans-serif] mb-5">
        Ao enviar seus dados, você autoriza que a SmartMoney entre em contato e
        declara estar ciente da{' '}
        <a href="#" className="underline hover:text-brand-primary">
          Política de Privacidade
        </a>
      </p>

      <div className="w-full h-[3px] bg-neutral-light-gray-02 my-5 rounded-full"></div>

      <div className="flex items-center gap-2 text-neutral-dark-100">
        <Image
          src="/shield-check.svg"
          alt="Seus dados estão seguros"
          width={20}
          height={20}
        />
        <span className="text-sm font-['Calibri',_sans-serif]">
          Seus dados estão seguros
        </span>
      </div>
    </div>
  )
}
