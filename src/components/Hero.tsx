'use client'

import { motion } from 'framer-motion'
import { Cloud, Download, Mail, ArrowRight, Cpu, Database, Network } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingBadges = [
    { icon: Cloud, label: 'AWS', color: 'text-orange-400' },
    { icon: Cpu, label: 'EC2', color: 'text-green-400' },
    { icon: Database, label: 'S3', color: 'text-blue-400' },
    { icon: Network, label: 'VPC', color: 'text-purple-400' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Cloud Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cloud-dark via-cloud-darker to-cloud-dark opacity-50" />
        
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cloud-accent rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Data lines */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cloud-accent to-transparent opacity-30"
            initial={{ width: 0, x: Math.random() * 100 + '%' }}
            animate={{ width: [0, 300, 0], x: [0, 100, 200] }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{ top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-cloud-accent to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Laxmikant
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl text-cloud-muted mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Cloud Engineer | DevOps | AWS Specialist
          </motion.p>

          {/* Status indicator */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300">Currently building scalable cloud solutions</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="group relative px-8 py-4 bg-cloud-accent text-cloud-dark font-semibold rounded-lg overflow-hidden glow-blue transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>

            <button className="group px-8 py-4 glass text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all">
              <Download className="w-4 h-4" />
              Download Resume
            </button>

            <button className="group px-8 py-4 glass text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all">
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>

          {/* Floating Tech Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 glass rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <badge.icon className={`w-5 h-5 ${badge.color}`} />
                <span className="text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cloud-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cloud-accent rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
