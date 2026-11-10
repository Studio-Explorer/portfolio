'use client'

import { motion } from 'framer-motion'
import { Activity, Shield } from 'lucide-react'
import { skills, dashboardMetrics } from '@/data/skills'
import { siteStats } from '@/data/site'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function SkillsDashboard() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent to-cloud-darker">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Skills"
          title="Skills Dashboard"
          subtitle="Cloud monitoring dashboard style visualization of technical expertise"
        />

        {/* Dashboard-style layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 border border-cloud-accent/20"
        >
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
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                {/* Progress bar with terminal effect */}
                <div className="h-4 bg-black/50 rounded-lg overflow-hidden relative">
                  <div
                    className={`h-full ${skill.color} relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

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
              <span>UPTIME: {siteStats.uptime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SECURE</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {dashboardMetrics.map((metric, index) => (
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
