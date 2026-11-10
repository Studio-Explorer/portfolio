'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
}

/**
 * Standard scroll-reveal wrapper used across all sections.
 * Fades content in and slides it up when it enters the viewport.
 */
export function FadeIn({ children, className, delay = 0, y = 30, duration = 0.8 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
