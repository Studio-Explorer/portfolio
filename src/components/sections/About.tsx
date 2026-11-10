'use client'

import { motion } from 'framer-motion'
import { Cloud, Code, Award, GitBranch } from 'lucide-react'
import { useState, useEffect } from 'react'
import { aboutBio, whatIDo, aboutStats } from '@/data/about'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'

const COUNT_UP_DURATION = 2000
const COUNT_UP_STEPS = 60

export default function About() {
  const [counts, setCounts] = useState({
    projects: 0,
    technologies: 0,
    certifications: 0,
    repos: 0,
  })

  useEffect(() => {
    const interval = COUNT_UP_DURATION / COUNT_UP_STEPS
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / COUNT_UP_STEPS

      setCounts({
        projects: Math.floor(aboutStats.projects * progress),
        technologies: Math.floor(aboutStats.technologies * progress),
        certifications: Math.floor(aboutStats.certifications * progress),
        repos: Math.floor(aboutStats.repos * progress),
      })

      if (step >= COUNT_UP_STEPS) {
        clearInterval(timer)
        setCounts({ ...aboutStats })
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    { icon: Cloud, label: 'Cloud Projects', value: counts.projects, suffix: '+', color: 'text-orange-400' },
    { icon: Code, label: 'Technologies', value: counts.technologies, suffix: '+', color: 'text-green-400' },
    { icon: Award, label: 'Certifications', value: counts.certifications, suffix: '', color: 'text-yellow-400' },
    { icon: GitBranch, label: 'GitHub Repos', value: counts.repos, suffix: '+', color: 'text-purple-400' },
  ]

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute w-96 h-96 bg-cloud-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '30%', right: '5%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          badge="About Me"
          title="About Me"
          subtitle="Passionate about building scalable cloud infrastructure and automating everything"
        />

        {/* Introduction */}
        <FadeIn delay={0.2} className="glass rounded-2xl p-8 mb-12 border border-white/10 hover:border-cloud-accent/30 transition-all relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cloud-accent/5 to-purple-500/5 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-lg text-gray-300 leading-relaxed">{aboutBio}</p>
          </div>
        </FadeIn>

        {/* What I do cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whatIDo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.08,
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-cloud-accent/50 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-4"
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-7 h-7 text-cloud-accent" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cloud-accent transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated statistics */}
        <FadeIn delay={0.5} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
                boxShadow: '0 15px 30px rgba(0, 212, 255, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="glass rounded-2xl p-8 text-center border border-white/10 hover:border-cloud-accent/50 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cloud-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center"
                  whileHover={{ rotate: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </motion.div>
                <motion.div
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
