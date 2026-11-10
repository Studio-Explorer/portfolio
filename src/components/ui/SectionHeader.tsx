'use client'

import { motion } from 'framer-motion'
import { Sparkles, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  /** Small pill label above the title (e.g. "Portfolio", "Tech Stack") */
  badge: string
  title: string
  subtitle?: string
  /** Icon shown inside the badge pill. Defaults to Sparkles. */
  badgeIcon?: LucideIcon
}

/**
 * Standard section heading: animated badge pill, gradient title, subtitle.
 * Used by every section to keep headers visually consistent.
 */
export function SectionHeader({ badge, title, subtitle, badgeIcon: BadgeIcon = Sparkles }: SectionHeaderProps) {
  return (
    <FadeInHeader>
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-cloud-accent/30"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <BadgeIcon className="w-4 h-4 text-cloud-accent" />
        <span className="text-sm text-cloud-accent font-medium">{badge}</span>
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cloud-accent to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
    </FadeInHeader>
  )
}

function FadeInHeader({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center mb-16"
    >
      {children}
    </motion.div>
  )
}
