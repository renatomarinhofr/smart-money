'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  value: number
  label: string
  suffix?: string
}

export function AnimatedNumber({ value, label, suffix = '' }: AnimatedNumberProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 1000
      const steps = 60
      const stepValue = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="space-y-2"
    >
      <p className="text-[40px] text-center lg:text-left font-bold text-neutral-light-gray-01">
        {displayValue}
        {suffix}
      </p>
      <p className="text-neutral-light-gray-01 text-center lg:text-left">{label}</p>
    </motion.div>
  )
}
