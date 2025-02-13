import { motion } from 'framer-motion';

interface MenuIconProps {
  isOpen: boolean;
}

export function MenuIcon({ isOpen }: MenuIconProps) {
  const variant = isOpen ? 'opened' : 'closed';

  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 10,
      translateY: 2,
    }
  };

  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -20,
      translateY: -4
    }
  };

  const lineProps = {
    stroke: '#FFFFFF',
    strokeWidth: 2,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  };

  const unitHeight = 4;
  const unitWidth = 24;

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight * 5}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={24}
      height={24}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1={unitHeight}
        y2={unitHeight}
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1={unitHeight * 2.5}
        y2={unitHeight * 2.5}
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1={unitHeight * 4}
        y2={unitHeight * 4}
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
}
