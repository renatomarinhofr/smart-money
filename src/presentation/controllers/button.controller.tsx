'use client';

import { useState } from 'react';
import { ButtonModel } from '@/domain/models/button.model';
import { ButtonView } from '../views/button.view';

type ButtonControllerProps = ButtonModel;

export const ButtonController = ({
  onClick,
  disabled = false,
  ...props
}: ButtonControllerProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (onClick) {
      try {
        setIsLoading(true);
        await onClick();
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <ButtonView
      onClick={handleClick}
      loading={isLoading}
      disabled={disabled || isLoading}
      {...props}
    />
  );
};
