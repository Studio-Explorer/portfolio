'use client'

import { motion } from 'framer-motion'
import { Cloud, Code, Cpu, Award, GitBranch, Server } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function About() {
  const [counts, setCounts] = useState({
    projects: 0,
    technologies: 0,
    certifications: 0,
    repos: 0,
  })

  useEffect(() => {
    const targetCounts = {
      projects: 15,
      technologies: 20,
      certifications: 5,
      repos: 30,
    }

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      
      setCounts({
        projects: Math.floor(targetCounts.projects * progress),
        technologies: Math.floor(targetCounts.technologies * progress),
        certifications: Math.floor(targetCounts.certifications * progress),
        repos: Math.floor(targetCounts.repos * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(targetCounts)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const whatIDo = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions using AWS services',
    },
    {
      icon: Server,
      title: 'DevOps Automation',
      description: 'Build CI/CD pipelines and automate infrastructure with Terraform',
    },
    {
      icon: Cpu,
      title: 'Container Orchestration',
      description: 'Deploy and manage applications using Docker and Kubernetes',
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'Implement IaC best practices for reproducible deployments',
    },
  ]

  const stats = [
    { icon: Cloud, label: 'Cloud Projects', value: counts.projects, suffix: '+' },
    { icon: Code, label: 'Technologies', value: counts.technologies, suffix: '+' },
    { icon: Award, label: 'Certifications', value: counts.certifications, suffix: '' },
    { icon: GitBranch, label: 'GitHub Repos', value: counts.repos, suffix: '+' },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cloud-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about building scalable cloud infrastructure and automating everything
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a Cloud Engineer specializing in AWS, DevOps, and container orchestration. 
            With a strong foundation in Linux and automation, I help organizations build 
            scalable, secure, and cost-effective cloud infrastructure. I'm passionate about 
            Infrastructure as Code, continuous integration/continuous deployment, and creating 
            robust systems that can handle production workloads.
          </p>
        </motion.div>

        {/* What I Do Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whatIDo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 hover:glow-blue transition-all cursor-pointer"
            >
              <item.icon className="w-12 h-12 text-cloud-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="w-8 h-8 text-cloud-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
