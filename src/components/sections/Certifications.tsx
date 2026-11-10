'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'
import { certifications } from '@/data/certifications'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { Certification } from '@/types'

export default function Certifications() {
  const [expandedCert, setExpandedCert] = useState<number | null>(null)

  const certDetails = (cert: Certification) => (
    <>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-cloud-accent mb-2">Skills Learned</h4>
        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs bg-cloud-accent/10 text-cloud-accent rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <a
        href={cert.verification}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-cloud-accent hover:text-white transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink className="w-4 h-4" />
        Explore Free Course
      </a>
    </>
  )

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-transparent to-cloud-darker">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Certifications"
          title="Certifications"
          subtitle="Free beginner learning resources for Linux, AWS, cybersecurity, Kubernetes, Docker, and cloud security"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
              className="glass rounded-xl p-6 cursor-pointer group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center`}>
                    <cert.icon className="w-6 h-6" />
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-cloud-accent transition-transform ${
                      expandedCert === cert.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cloud-accent transition-colors">
                  {cert.name}
                </h3>

                <div className="space-y-1 text-sm text-gray-400">
                  <p>{cert.issuer}</p>
                  <p>{cert.date}</p>
                </div>

                <AnimatePresence>
                  {expandedCert === cert.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-white/10"
                    >
                      {certDetails(cert)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-cloud-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile detail modal */}
        <AnimatePresence>
          {expandedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:hidden"
              onClick={() => setExpandedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-dark rounded-2xl max-w-md w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const cert = certifications.find(c => c.id === expandedCert)
                  if (!cert) return null
                  return (
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center`}>
                          <cert.icon className="w-6 h-6" />
                        </div>
                        <button
                          onClick={() => setExpandedCert(null)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <X className="w-6 h-6 text-white" />
                        </button>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                      <p className="text-gray-400 mb-4">{cert.issuer} • {cert.date}</p>

                      {certDetails(cert)}
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
