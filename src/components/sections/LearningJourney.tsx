'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, BookOpen, Award, Server } from 'lucide-react'
import {
  milestones,
  journeyStats,
  currentFocus,
  upcomingTopics,
  graduation,
  advancedLearningPath,
} from '@/data/journey'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { MilestoneStatus } from '@/types'

const statusStyles: Record<MilestoneStatus, { dot: string; badge: string; label: string }> = {
  completed: { dot: 'bg-green-400 border-green-500', badge: 'bg-green-500/20 text-green-400', label: '✓ Completed' },
  'in-progress': { dot: 'bg-blue-400 border-blue-500', badge: 'bg-blue-500/20 text-blue-400', label: '→ In Progress' },
  current: { dot: 'bg-yellow-400 border-yellow-500', badge: 'bg-yellow-500/20 text-yellow-400', label: '● Current' },
  upcoming: { dot: 'bg-gray-400 border-gray-500', badge: 'bg-gray-500/20 text-gray-400', label: '○ Upcoming' },
  future: { dot: 'bg-gray-400 border-gray-500', badge: 'bg-gray-500/20 text-gray-400', label: '○ Upcoming' },
}

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
const backgroundParticles = [...Array(20)].map((_, i) => ({
  id: i,
  x: random() * 100,
  y: random() * 100,
  duration: random() * 10 + 10,
  delay: random() * 5,
}))

export default function LearningJourney() {
  return (
    <section id="learning-journey" className="py-20 px-4 bg-gradient-to-b from-cloud-darker to-transparent relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-cloud-accent rounded-full opacity-10"
            initial={{
              x: particle.x + '%',
              y: particle.y + '%',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="Journey"
          title="Learning Journey"
          subtitle="From programming fundamentals to cloud engineering excellence"
        />

        {/* Journey stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {journeyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-4 text-center cursor-pointer"
            >
              <stat.icon className="w-6 h-6 text-cloud-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cloud-accent via-cloud-secondary to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const status = statusStyles[milestone.status]
              return (
                <motion.div
                  key={`${milestone.year}-${milestone.title}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-full h-full rounded-full border-4 ${status.dot}`}
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: milestone.status === 'current'
                          ? ['0 0 0px rgba(255, 200, 0, 0)', '0 0 20px rgba(255, 200, 0, 0.5)', '0 0 0px rgba(255, 200, 0, 0)']
                          : 'none',
                      }}
                      transition={{ duration: 2, repeat: milestone.status === 'current' ? Infinity : 0 }}
                    />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8 }}
                      className={`glass rounded-2xl p-6 cursor-pointer relative overflow-hidden group ${
                        milestone.status === 'current' ? 'border-2 border-yellow-400/50' :
                        milestone.status === 'in-progress' ? 'border-2 border-blue-400/50' :
                        ''
                      }`}
                    >
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status.badge}`}>
                          {status.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                          <milestone.icon className={`w-6 h-6 ${milestone.color}`} />
                        </div>
                        <div>
                          <span className="px-3 py-1 bg-cloud-accent/10 text-cloud-accent rounded-full text-sm font-semibold">
                            {milestone.year}
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-400">{milestone.duration}</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cloud-accent transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-cloud-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Current focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass rounded-2xl p-8 border border-yellow-400/30"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              className="w-4 h-4 bg-yellow-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: ['0 0 0px rgba(255, 200, 0, 0)', '0 0 20px rgba(255, 200, 0, 0.5)', '0 0 0px rgba(255, 200, 0, 0)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <h3 className="text-2xl font-bold text-white">Currently Focused On</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentFocus.map((focus, index) => (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-dark rounded-xl p-6 text-center cursor-pointer"
              >
                <focus.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">{focus.title}</h4>
                <p className="text-sm text-gray-400">{focus.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming learning path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-cloud-accent" />
            <h3 className="text-2xl font-bold text-white">Upcoming Learning Path</h3>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {upcomingTopics.map((topic) => (
                <motion.span
                  key={topic}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 glass rounded-full text-sm text-cloud-accent hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Graduation highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-cloud-accent/20 via-cloud-accent/10 to-cloud-accent/20 rounded-2xl p-8 border border-cloud-accent/30 text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Award className="w-16 h-16 text-cloud-accent" />
          </motion.div>
          <h3 className="text-3xl font-bold text-white mb-2">{graduation.title}</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">{graduation.description}</p>
          <div className="flex justify-center gap-4 mt-6">
            {graduation.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-cloud-accent/20 text-cloud-accent rounded-lg text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Advanced learning path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Server className="w-6 h-6 text-indigo-400" />
            <h3 className="text-2xl font-bold text-white">2028 Advanced Learning Path</h3>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {advancedLearningPath.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-dark rounded-xl p-6 cursor-pointer"
                >
                  <topic.icon className={`w-8 h-8 ${topic.color} mb-3`} />
                  <h4 className="text-lg font-semibold text-white mb-2">{topic.title}</h4>
                  <p className="text-sm text-gray-400">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
