'use client'

import { motion } from 'framer-motion'
import { Activity, Cpu, Terminal, Container, Lock, Shield, Cloud, Code2, Workflow, FolderKanban, Award, Calendar, GitBranch } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function SkillsDashboard() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedWidths, setAnimatedWidths] = useState({
    aws: 0,
    linux: 0,
    python: 0,
    docker: 0,
    terraform: 0,
    kubernetes: 0,
  })

  const skills = [
    { name: 'AWS', level: 85, icon: Cloud, color: 'bg-orange-400' },
    { name: 'Linux', level: 78, icon: Terminal, color: 'bg-yellow-400' },
    { name: 'Python', level: 72, icon: Code2, color: 'bg-green-400' },
    { name: 'Docker', level: 68, icon: Container, color: 'bg-blue-400' },
    { name: 'Terraform', level: 75, icon: Workflow, color: 'bg-purple-400' },
    { name: 'Kubernetes', level: 65, icon: Cpu, color: 'bg-cyan-400' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          setTimeout(() => {
            setAnimatedWidths({
              aws: 85,
              linux: 78,
              python: 72,
              docker: 68,
              terraform: 75,
              kubernetes: 65,
            })
          }, 500)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('skills-dashboard')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills-dashboard" className="py-20 px-4 bg-gradient-to-b from-transparent to-cloud-darker">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cloud-accent bg-clip-text text-transparent">
            Skills Dashboard
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cloud monitoring dashboard style visualization of technical expertise
          </p>
        </motion.div>

        {/* Dashboard-style layout */}
        <div className="glass rounded-2xl p-8 border border-cloud-accent/20">
          {/* Dashboard header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-cloud-accent animate-pulse" />
              <span className="text-white font-semibold">System Metrics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">Live</span>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-cloud-accent" />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <motion.span
                    className="text-cloud-accent font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                  >
                    {isVisible ? skill.level : 0}%
                  </motion.span>
                </div>
                
                {/* Progress bar with terminal effect */}
                <div className="h-4 bg-black/50 rounded-lg overflow-hidden relative">
                  <motion.div
                    className={`h-full ${skill.color} relative`}
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedWidths[skill.name.toLowerCase() as keyof typeof animatedWidths] || 0}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  >
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                  
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="flex-1 border-r border-white/5" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dashboard footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-sm text-gray-400"
          >
            <div className="flex items-center gap-4">
              <span>STATUS: OPERATIONAL</span>
              <span>UPTIME: 99.9%</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SECURE</span>
            </div>
          </motion.div>
        </div>

        {/* Additional metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'Projects', value: '15', icon: FolderKanban },
            { label: 'Certifications', value: '5', icon: Award },
            { label: 'Years Exp', value: '2+', icon: Calendar },
            { label: 'Contributions', value: '500+', icon: GitBranch },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <metric.icon className="w-6 h-6 text-cloud-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
