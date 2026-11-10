'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2, Minimize2, Clock, Sparkles, GitBranch, FolderKanban, Cpu, Activity, type LucideIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { commandCenterTabs, commandCenterData, commandCenterMeta } from '@/data/command-center'
import { site } from '@/data/site'
import { playClickSound } from '@/lib/sounds'

export default function CommandCenter() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isOpen])

  return (
    <>
      {/* Floating command button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          playClickSound()
          setIsOpen(true)
        }}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-gradient-to-br from-cloud-accent to-blue-500 rounded-full shadow-2xl flex items-center justify-center transition-all"
        style={{ boxShadow: '0 0 40px rgba(0, 212, 255, 0.4), 0 0 80px rgba(0, 212, 255, 0.2)' }}
        aria-label="Open command center"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="relative w-10 h-10"
        >
          {/* Animated rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/40"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-white/60"
            animate={{ scale: [1, 0.7, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-white/80"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.avatar}
              alt={`${site.name} avatar`}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* Pulsing glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-cloud-accent/30 blur-xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.button>

      {/* Command center modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`glass-dark rounded-3xl w-full max-w-7xl border border-cloud-accent/40 relative overflow-hidden ${
                isMinimized ? 'max-h-24' : 'max-h-[90vh]'
              }`}
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: '0 0 60px rgba(0, 212, 255, 0.3), 0 0 120px rgba(0, 212, 255, 0.1)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cloud-accent/5 via-transparent to-purple-500/5 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/50 relative z-10">
                <div className="flex items-center gap-4">
                  <motion.div className="relative" whileHover={{ scale: 1.1, rotate: 5 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={site.avatar}
                      alt={`${site.name} avatar`}
                      className="w-14 h-14 rounded-2xl object-cover"
                    />
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <div>
                    <motion.h2
                      className="text-2xl font-bold text-white"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {site.dashboardName}
                    </motion.h2>
                    <motion.p
                      className="text-sm text-gray-400 flex items-center gap-2"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Sparkles className="w-4 h-4 text-cloud-accent" />
                      System Dashboard
                    </motion.p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="w-2.5 h-2.5 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-green-400 text-sm font-medium">Online</span>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label={isMinimized ? 'Maximize' : 'Minimize'}
                  >
                    {isMinimized ? <Maximize2 className="w-5 h-5 text-white" /> : <Minimize2 className="w-5 h-5 text-white" />}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      playClickSound()
                      setIsOpen(false)
                    }}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close command center"
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
              </div>

              {!isMinimized && (
                <div className="flex h-[calc(90vh-100px)]">
                  {/* Sidebar */}
                  <div className="w-72 border-r border-white/10 p-4 bg-black/30 relative z-10">
                    <nav className="space-y-2">
                      {commandCenterTabs.map((tab) => (
                        <motion.button
                          key={tab.id}
                          whileHover={{ x: 8 }}
                          onClick={() => {
                            playClickSound()
                            setActiveTab(tab.id)
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all ${
                            activeTab === tab.id
                              ? 'bg-gradient-to-r from-cloud-accent/20 to-purple-500/20 text-cloud-accent border border-cloud-accent/30'
                              : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                          }`}
                        >
                          <motion.div
                            animate={{ rotate: activeTab === tab.id ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <tab.icon className="w-5 h-5" />
                          </motion.div>
                          <span className="font-medium">{tab.label}</span>
                          {activeTab === tab.id && (
                            <motion.div
                              className="ml-auto w-2 h-2 bg-cloud-accent rounded-full"
                              layoutId="activeTab"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </nav>

                    {/* Uptime widget */}
                    <motion.div
                      className="mt-8 p-4 glass rounded-xl border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4 text-cloud-accent" />
                        <span className="text-sm text-gray-400">Uptime</span>
                      </div>
                      <div className="text-2xl font-bold text-white">{commandCenterMeta.uptime}</div>
                      <div className="text-xs text-green-400 mt-1">{commandCenterMeta.uptimeLabel}</div>
                    </motion.div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-6 overflow-y-auto relative z-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {activeTab === 'overview' && (
                          <div>
                            <TabHeading icon={Activity} title={commandCenterData.overview.title} />
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                              {commandCenterData.overview.metrics.map((metric, index) => (
                                <MetricCard key={metric.label} metric={metric} index={index} />
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === 'projects' && (
                          <div>
                            <TabHeading icon={FolderKanban} title={commandCenterData.projects.title} />
                            <div className="space-y-4">
                              {commandCenterData.projects.items.map((item, index) => (
                                <ProjectStatusCard key={item.name} item={item} index={index} />
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === 'skills' && (
                          <div>
                            <TabHeading icon={Cpu} title={commandCenterData.skills.title} />
                            <div className="space-y-5">
                              {commandCenterData.skills.skills.map((skill, index) => (
                                <SkillMetricCard key={skill.name} skill={skill} index={index} />
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === 'github' && (
                          <div>
                            <TabHeading icon={GitBranch} title={commandCenterData.github.title} />
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                              {commandCenterData.github.stats.map((stat, index) => (
                                <GitHubStatCard key={stat.label} stat={stat} index={index} />
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
/* ---------- Tab sub-components ---------- */

function TabHeading({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <motion.h3
      className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <Icon className="w-6 h-6 text-cloud-accent" />
      {title}
    </motion.h3>
  )
}

function MetricCard({ metric, index }: { metric: (typeof commandCenterData.overview.metrics)[number]; index: number }) {
  const statusColor =
    metric.status === 'operational' ? 'text-green-400' :
    metric.status === 'active' ? 'text-blue-400' :
    metric.status === 'connected' ? 'text-cyan-400' :
    'text-yellow-400'
  const dotColor =
    metric.status === 'operational' ? 'bg-green-400' :
    metric.status === 'active' ? 'bg-blue-400' :
    metric.status === 'connected' ? 'bg-cyan-400' :
    'bg-yellow-400'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass rounded-2xl p-6 border border-white/10 hover:border-cloud-accent/50 transition-all cursor-pointer group"
    >
      <motion.div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-4 ${statusColor}`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <metric.icon className="w-6 h-6" />
      </motion.div>
      <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
      <div className="text-xl font-bold text-white mb-3">{metric.value}</div>
      <div className="flex items-center gap-2">
        <motion.span
          className={`w-2.5 h-2.5 rounded-full ${dotColor}`}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs text-gray-500 capitalize group-hover:text-white transition-colors">{metric.status}</span>
      </div>
    </motion.div>
  )
}

function ProjectStatusCard({ item, index }: { item: (typeof commandCenterData.projects.items)[number]; index: number }) {
  const statusBadge =
    item.status === 'Production' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
    item.status === 'Active' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
    item.status === 'Development' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
    'bg-purple-500/20 text-purple-400 border border-purple-500/30'

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.02, x: 5 }}
      className="glass rounded-2xl p-6 border border-white/10 hover:border-cloud-accent/50 transition-all cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center"
            whileHover={{ rotate: 15 }}
          >
            <item.icon className="w-5 h-5 text-cloud-accent" />
          </motion.div>
          <span className="text-white font-semibold">{item.name}</span>
        </div>
        <motion.span
          className={`px-3 py-1 text-xs rounded-full font-medium ${statusBadge}`}
          whileHover={{ scale: 1.1 }}
        >
          {item.status}
        </motion.span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-cloud-accent font-medium">{item.progress}%</span>
        </div>
        <div className="h-3 bg-black/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${item.progress}%` }}
            transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-cloud-accent to-purple-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}

function SkillMetricCard({ skill, index }: { skill: (typeof commandCenterData.skills.skills)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.02, x: 5 }}
      className="glass rounded-2xl p-6 border border-white/10 hover:border-cloud-accent/50 transition-all cursor-pointer"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center"
            whileHover={{ rotate: -15 }}
          >
            <skill.icon className="w-5 h-5 text-cloud-accent" />
          </motion.div>
          <span className="text-white font-semibold">{skill.name}</span>
        </div>
        <motion.span
          className="text-2xl font-bold text-cloud-accent"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-3 bg-black/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cloud-accent to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}

function GitHubStatCard({ stat, index }: { stat: (typeof commandCenterData.github.stats)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08, y: -8 }}
      className="glass rounded-2xl p-8 text-center border border-white/10 hover:border-cloud-accent/50 transition-all cursor-pointer group"
    >
      <motion.div
        className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <stat.icon className="w-7 h-7 text-cloud-accent" />
      </motion.div>
      <motion.div
        className="text-4xl font-bold text-cloud-accent mb-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.1 }}
      >
        {stat.value}
      </motion.div>
      <div className="text-sm text-gray-400 group-hover:text-white transition-colors">{stat.label}</div>
    </motion.div>
  )
}
