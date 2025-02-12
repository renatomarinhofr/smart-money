import { useFormContext, Controller } from 'react-hook-form';
import { formatPhoneNumber } from '@/utils/formatters/phone-formatter';
import { UserModel } from '@/domain/models/user.model';
import { ButtonController } from '../controllers/button.controller';

interface ContactFormViewProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ContactFormView = ({ onSubmit }: ContactFormViewProps) => {
  const { control, formState: { errors, isSubmitting }, watch } = useFormContext<UserModel>();
  const userType = watch('type');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(e);
    }} className="space-y-4">
        <div className="space-y-2">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Nome completo"
                className="w-full p-3 border border-neutral-dark-50 rounded-lg bg-white text-neutral-dark-800 placeholder:text-neutral-dark-50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                placeholder="E-mail"
                className="w-full p-3 border border-neutral-dark-50 rounded-lg bg-white text-neutral-dark-800 placeholder:text-neutral-dark-50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                type="text"
                value={formatPhoneNumber(value)}
                onChange={(e) => {
                  const raw = e.target.value.replace(/\D/g, '');
                  onChange(raw);
                }}
                placeholder="Telefone"
                className="w-full p-3 border border-neutral-dark-50 rounded-lg bg-white text-neutral-dark-800 placeholder:text-neutral-dark-50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">
              {errors.phone.message}
            </p>
          )}
        </div>

        <ButtonController
          type="submit"
          fullWidth
          size="md"
          loading={isSubmitting}
        >
          {userType === 'personal' ? 'Quero ser cliente' : 'Quero para minha empresa'}
        </ButtonController>
      </form>
  );
};
