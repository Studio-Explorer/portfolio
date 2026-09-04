'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Cloud, X, Activity, FolderKanban, Cpu, GitBranch, Maximize2, Minimize2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CommandCenter() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'github', label: 'GitHub', icon: GitBranch },
  ]

  const dashboardData = {
    overview: {
      title: 'System Overview',
      metrics: [
        { label: 'AWS Status', value: 'Connected', status: 'operational' },
        { label: 'Projects', value: '5', status: 'active' },
        { label: 'GitHub', value: 'Active', status: 'connected' },
        { label: 'CI/CD', value: 'Operational', status: 'running' },
      ],
    },
    projects: {
      title: 'Project Status',
      items: [
        { name: 'Cloud Web App', status: 'Production', progress: 100 },
        { name: 'DevOps Pipeline', status: 'Active', progress: 85 },
        { name: 'Serverless API', status: 'Development', progress: 60 },
        { name: 'K8s Cluster', status: 'Testing', progress: 40 },
      ],
    },
    skills: {
      title: 'Skill Metrics',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Linux', level: 78 },
        { name: 'Python', level: 72 },
        { name: 'Docker', level: 68 },
        { name: 'Kubernetes', level: 65 },
      ],
    },
    github: {
      title: 'GitHub Activity',
      stats: [
        { label: 'Repositories', value: 30 },
        { label: 'Stars', value: 150 },
        { label: 'Forks', value: 45 },
        { label: 'Contributions', value: 500 },
      ],
    },
  }

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
      {/* Floating Command Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 px-6 py-3 bg-cloud-accent text-cloud-dark font-semibold rounded-full shadow-lg glow-blue flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <Cloud className="w-5 h-5" />
        <span>Command Center</span>
      </motion.button>

      {/* Command Center Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-dark rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden border border-cloud-accent/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/50">
                <div className="flex items-center gap-3">
                  <Cloud className="w-8 h-8 text-cloud-accent animate-pulse" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Cloud Command Center</h2>
                    <p className="text-sm text-gray-400">System Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              <div className="flex h-[calc(90vh-80px)]">
                {/* Sidebar */}
                <div className="w-64 border-r border-white/10 p-4 bg-black/30">
                  <nav className="space-y-2">
                    {tabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        whileHover={{ x: 5 }}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-cloud-accent/20 text-cloud-accent'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <tab.icon className="w-5 h-5" />
                        <span className="font-medium">{tab.label}</span>
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeTab === 'overview' && (
                        <div>
                          <h3 className="text-xl font-bold text-white mb-6">{dashboardData.overview.title}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {dashboardData.overview.metrics.map((metric, index) => (
                              <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-4"
                              >
                                <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
                                <div className="text-lg font-bold text-white mb-2">{metric.value}</div>
                                <div className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${
                                    metric.status === 'operational' ? 'bg-green-400' :
                                    metric.status === 'active' ? 'bg-blue-400' :
                                    metric.status === 'connected' ? 'bg-cyan-400' :
                                    'bg-yellow-400'
                                  }`} />
                                  <span className="text-xs text-gray-500 capitalize">{metric.status}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === 'projects' && (
                        <div>
                          <h3 className="text-xl font-bold text-white mb-6">{dashboardData.projects.title}</h3>
                          <div className="space-y-4">
                            {dashboardData.projects.items.map((item, index) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-4"
                              >
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-white font-medium">{item.name}</span>
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    item.status === 'Production' ? 'bg-green-500/20 text-green-400' :
                                    item.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                                    item.status === 'Development' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-purple-500/20 text-purple-400'
                                  }`}>
                                    {item.status}
                                  </span>
                                </div>
                                <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.progress}%` }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    className="h-full bg-cloud-accent"
                                  />
                                </div>
                                <div className="text-right text-xs text-gray-400 mt-1">{item.progress}%</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === 'skills' && (
                        <div>
                          <h3 className="text-xl font-bold text-white mb-6">{dashboardData.skills.title}</h3>
                          <div className="space-y-4">
                            {dashboardData.skills.skills.map((skill, index) => (
                              <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-4"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-white font-medium">{skill.name}</span>
                                  <span className="text-cloud-accent">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    className="h-full bg-gradient-to-r from-cloud-accent to-cloud-secondary"
                                  />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === 'github' && (
                        <div>
                          <h3 className="text-xl font-bold text-white mb-6">{dashboardData.github.title}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {dashboardData.github.stats.map((stat, index) => (
                              <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 text-center"
                              >
                                <div className="text-3xl font-bold text-cloud-accent mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
