'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, X, Zap, Activity, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { projects } from '@/data/projects'
import { playClickSound } from '@/lib/sounds'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { Project } from '@/types'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute w-96 h-96 bg-cloud-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '20%', left: '5%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          badge="Portfolio"
          title="Featured Cloud Projects"
          subtitle="Real-world cloud solutions showcasing infrastructure and DevOps expertise"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)'
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => {
                playClickSound()
                setSelectedProject(project)
              }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-cloud-accent/50 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cloud-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-white mb-2 group-hover:text-cloud-accent transition-colors"
                      animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                    >
                      {project.title}
                    </motion.h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-3 py-1 text-xs bg-cloud-accent/10 text-cloud-accent rounded-full border border-cloud-accent/20 hover:border-cloud-accent/50 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: hoveredProject === project.id ? 0 : 10 }}
                  >
                    <ArrowRight className="w-5 h-5 text-cloud-accent" />
                  </motion.div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <motion.span
                      className="text-red-400 text-sm font-medium flex-shrink-0"
                      animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                    >
                      Problem:
                    </motion.span>
                    <p className="text-sm text-gray-400">{project.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <motion.span
                      className="text-green-400 text-sm font-medium flex-shrink-0"
                      animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                    >
                      Solution:
                    </motion.span>
                    <p className="text-sm text-gray-400">{project.solution}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm hover:bg-white/10 transition-colors border border-white/10 hover:border-cloud-accent/50"
                    onClick={(e) => {
                      e.stopPropagation()
                      playClickSound()
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm hover:bg-white/10 transition-colors border border-white/10 hover:border-cloud-accent/50"
                    onClick={(e) => {
                      e.stopPropagation()
                      playClickSound()
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      playClickSound()
                      setSelectedProject(project)
                    }}
                    className="text-cloud-accent text-sm flex items-center gap-2 hover:gap-3 transition-all group/btn"
                    whileHover={{ x: 5 }}
                  >
                    View Architecture
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="glass-dark rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 border border-cloud-accent/30 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cloud-accent/5 to-purple-500/5 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-cloud-accent/20 text-cloud-accent rounded-full border border-cloud-accent/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                    <motion.button
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        playClickSound()
                        setSelectedProject(null)
                      }}
                      className="p-3 hover:bg-white/10 rounded-xl transition-colors"
                    >
                      <X className="w-6 h-6 text-white" />
                    </motion.button>
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <h4 className="text-lg font-semibold text-cloud-accent mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Architecture Flow
                    </h4>
                    <div className="flex items-center justify-between overflow-x-auto pb-4 gap-4">
                      {selectedProject.architecture.map((component, index) => (
                        <div key={component.name} className="flex items-center flex-shrink-0">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="flex flex-col items-center p-5 glass rounded-xl min-w-[140px] cursor-pointer border border-white/10 hover:border-cloud-accent/50 transition-all"
                          >
                            <motion.div
                              className="w-10 h-10 mb-3"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <component.icon className="w-full h-full text-cloud-accent" />
                            </motion.div>
                            <span className="text-sm font-medium text-white">{component.name}</span>
                            <span className="text-xs text-gray-400 mt-1 text-center">
                              {component.description}
                            </span>
                          </motion.div>
                          {index < selectedProject.architecture.length - 1 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className="px-2"
                            >
                              <ArrowRight className="w-6 h-6 text-cloud-accent" />
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid md:grid-cols-2 gap-6 mb-8"
                  >
                    <div className="glass rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                        <Activity className="w-5 h-5" />
                        Problem
                      </h4>
                      <p className="text-gray-300">{selectedProject.problem}</p>
                    </div>
                    <div className="glass rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Solution
                      </h4>
                      <p className="text-gray-300">{selectedProject.solution}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4"
                  >
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-cloud-accent to-cloud-secondary text-cloud-dark font-semibold rounded-lg transition-all"
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 212, 255, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </motion.a>
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 glass text-white font-semibold rounded-lg border border-white/10 hover:border-cloud-accent/50 transition-all"
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 212, 255, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
