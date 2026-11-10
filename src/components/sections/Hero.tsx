'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Cloud, ArrowRight, Cpu, Database, Sparkles, Zap, Terminal } from 'lucide-react'
import { useRef } from 'react'
import { site } from '@/data/site'
import type { BadgeItem } from '@/types'

function createRandom(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

const random = createRandom(2024)
const techParticles = [...Array(50)].map((_, i) => ({
  id: i,
  x: random() * 100,
  y: random() * 100,
  size: random() * 3 + 1,
  duration: random() * 10 + 10,
  delay: random() * 5,
}))

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const floatingBadges: BadgeItem[] = [
    { icon: Cloud, label: 'AWS', color: 'text-orange-400', delay: 0 },
    { icon: Cpu, label: 'EC2', color: 'text-green-400', delay: 0.1 },
    { icon: Database, label: 'S3', color: 'text-blue-400', delay: 0.2 },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cloud-dark via-cloud-darker to-cloud-dark opacity-60" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-cloud-accent/15 rounded-full blur-[100px]"
          animate={{ x: [0, 150, 0], y: [0, -150, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '5%', left: '5%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-cloud-secondary/15 rounded-full blur-[80px]"
          animate={{ x: [0, -120, 0], y: [0, 120, 0], scale: [1, 1.4, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ top: '55%', right: '5%' }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[70px]"
          animate={{ x: [0, 80, 0], y: [0, -80, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{ bottom: '15%', left: '25%' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[60px]"
          animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ top: '30%', right: '30%' }}
        />

        {/* Floating particles */}
        {techParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
            animate={{
              y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
              opacity: [0, 0.6, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.id % 3 === 0 ? '#00d4ff' : particle.id % 3 === 1 ? '#0099cc' : '#a855f7',
              left: `${particle.x}%`,
            }}
          />
        ))}

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              style={{ top: `${i * 5}%`, left: 0, right: 0 }}
            />
          ))}
        </div>
      </div>

      {/* Content with scroll-based animation */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        style={{ opacity, scale, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-cloud-accent to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            {site.name}
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl text-cloud-muted mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="inline-block"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
            >
              {site.headline}
            </motion.span>
            <motion.span
              className="inline-block w-0.5 h-8 bg-cloud-accent ml-2"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 2 }}
            />
          </motion.div>

          {/* Status indicator */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-8 border border-cloud-accent/30"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)" }}
          >
            <motion.div className="relative flex h-4 w-4">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-green-400"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                className="relative inline-flex rounded-full h-4 w-4 bg-green-500"
                animate={{ scale: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <span className="text-sm text-gray-300 font-medium">{site.status}</span>
            <Sparkles className="w-4 h-4 text-cloud-accent" />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-cloud-accent to-cloud-secondary text-cloud-dark font-semibold rounded-lg overflow-hidden transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 212, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="#tech-stack"
              className="group relative px-8 py-4 glass text-white font-semibold rounded-lg overflow-hidden border border-cloud-accent/30 transition-all"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 255, 0.6)", boxShadow: "0 0 30px rgba(0, 212, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cloud-accent" />
                Explore Tech Stack
              </span>
            </motion.a>
          </motion.div>

          {/* Floating tech badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.label}
                className="flex items-center gap-2 px-5 py-3 glass rounded-full border border-white/10 hover:border-cloud-accent/50 transition-colors cursor-default"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.4 + (badge.delay ?? 0),
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)",
                  borderColor: "rgba(0, 212, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <badge.icon className={`w-5 h-5 ${badge.color}`} />
                </motion.div>
                <span className="text-sm font-medium text-white">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

    </section>
  )
}
