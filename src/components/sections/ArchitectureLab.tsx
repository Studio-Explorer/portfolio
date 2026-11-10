'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, Zap, Cpu } from 'lucide-react'
import { useState } from 'react'
import { awsComponents, architectureFlow } from '@/data/architecture'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { CloudComponent } from '@/types'

export default function ArchitectureLab() {
  const [selectedComponent, setSelectedComponent] = useState<CloudComponent | null>(null)
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)

  return (
    <section id="architecture-lab" className="py-20 px-4 bg-gradient-to-b from-cloud-darker to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute w-96 h-96 bg-cloud-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '20%', left: '10%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          badge="Interactive Playground"
          badgeIcon={Zap}
          title="Cloud Architecture Lab"
          subtitle="Explore cloud infrastructure components with interactive visualizations"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awsComponents.map((component, index) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.08,
                y: -12,
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)',
                borderColor: 'rgba(0, 212, 255, 0.5)'
              }}
              onHoverStart={() => setHoveredComponent(component.name)}
              onHoverEnd={() => setHoveredComponent(null)}
              onClick={() => setSelectedComponent(component)}
              className={`glass rounded-xl p-6 text-center cursor-pointer group relative overflow-hidden border border-white/10 transition-all duration-300 ${
                selectedComponent?.name === component.name ? 'border-cloud-accent ring-2 ring-cloud-accent/50' : ''
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-cloud-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                animate={{ opacity: hoveredComponent === component.name ? 1 : 0 }}
              />

              <motion.div
                className={`w-16 h-16 ${component.color} mx-auto mb-4 relative z-10`}
                animate={{
                  rotate: selectedComponent?.name === component.name ? 360 : 0,
                  scale: hoveredComponent === component.name ? 1.2 : 1
                }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <component.icon className="w-full h-full" />
              </motion.div>

              <h3 className="text-lg font-semibold text-white mb-2 relative z-10">{component.name}</h3>
              <p className="text-xs text-gray-400 relative z-10 line-clamp-2">{component.description}</p>

              <motion.div
                className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: hoveredComponent === component.name ? 0 : 10 }}
              >
                <ArrowRight className="w-4 h-4 text-cloud-accent" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Component detail panel */}
        <AnimatePresence>
          {selectedComponent && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-12 glass rounded-2xl p-8 border border-cloud-accent/30 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cloud-accent/5 to-purple-500/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`w-24 h-24 ${selectedComponent.color} flex-shrink-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-4`}
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <selectedComponent.icon className="w-full h-full" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{selectedComponent.name}</h3>
                        <p className="text-gray-300 text-lg">{selectedComponent.description}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedComponent(null)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <X className="w-6 h-6 text-gray-400" />
                      </motion.button>
                    </div>

                    <div className="glass-dark rounded-xl p-6 mb-6">
                      <h4 className="text-sm font-semibold text-cloud-accent mb-3 flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        How I Use It
                      </h4>
                      <p className="text-gray-300">{selectedComponent.usage}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {selectedComponent.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="glass rounded-lg p-3 text-center"
                        >
                          <div className="text-cloud-accent text-sm font-medium">{feature}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Architecture flow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Typical Architecture Flow</h3>
            <p className="text-gray-400 text-sm">Click on components to learn more</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {architectureFlow.map((step, index) => (
              <div key={step.name} className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass rounded-xl p-5 text-center min-w-[120px] cursor-pointer group border border-white/10 hover:border-cloud-accent/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="text-cloud-accent font-bold mb-2 text-lg"
                    animate={{
                      color: index % 2 === 0 ? '#00d4ff' : '#a855f7'
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {step.name}
                  </motion.div>
                  <div className="text-xs text-gray-400 group-hover:text-white transition-colors">
                    {step.description}
                  </div>
                </motion.div>

                {index < architectureFlow.length - 1 && (
                  <motion.div
                    className="hidden md:flex items-center justify-center w-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-px bg-gradient-to-r from-cloud-accent to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-cloud-accent rounded-full absolute"
                      animate={{
                        x: [0, 40, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
