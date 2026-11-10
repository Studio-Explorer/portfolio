'use client'

import { motion } from 'framer-motion'
import { technologies } from '@/data/tech-stack'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 bg-gradient-to-b from-transparent to-cloud-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute w-96 h-96 bg-cloud-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 70, 0], y: [0, -70, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '20%', left: '10%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          badge="Tech Stack"
          title="Cloud Tech Stack"
          subtitle="Technologies and tools I use to build scalable cloud solutions"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.12,
                y: -12,
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)',
                borderColor: 'rgba(0, 212, 255, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="glass rounded-2xl p-6 text-center cursor-pointer group relative overflow-hidden border border-white/10 hover:border-cloud-accent/50 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-15 transition-opacity`} />
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <tech.icon className={`w-7 h-7 ${tech.color}`} />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cloud-accent transition-colors">{tech.name}</h3>
                <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity mt-2 line-clamp-2">
                  {tech.description}
                </p>
              </div>

              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cloud-accent/30"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
