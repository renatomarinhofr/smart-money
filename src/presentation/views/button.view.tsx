'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ButtonModel } from '@/domain/models/button.model';
import { button } from '../styles/button.styles';
import { Spinner } from '@/components/spinner/spinner';

type ButtonViewProps = ButtonModel & Omit<HTMLMotionProps<"button">, keyof ButtonModel>;

export const ButtonView = ({
  variant = 'primary',
  size = 'md',
  type = 'button',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  children,
  className,
  ...props
}: ButtonViewProps) => {
  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={button({ variant, size, fullWidth, loading, className })}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
};
