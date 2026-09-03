'use client'

import { motion } from 'framer-motion'
import { 
  Cloud, 
  Container, 
  Network, 
  Terminal, 
  Code2, 
  GitBranch, 
  Workflow, 
  Shield,
  Database,
  Cpu
} from 'lucide-react'

export default function TechStack() {
  const technologies = [
    {
      name: 'AWS',
      icon: Cloud,
      color: 'text-orange-400',
      description: 'EC2, S3, VPC, Lambda, CloudFormation, IAM',
    },
    {
      name: 'Docker',
      icon: Container,
      color: 'text-blue-400',
      description: 'Containerization, Docker Compose, Multi-stage builds',
    },
    {
      name: 'Kubernetes',
      icon: Cpu,
      color: 'text-blue-500',
      description: 'Orchestration, Helm, Kubectl, Cluster management',
    },
    {
      name: 'Linux',
      icon: Terminal,
      color: 'text-yellow-400',
      description: 'System administration, Bash scripting, Security',
    },
    {
      name: 'Python',
      icon: Code2,
      color: 'text-green-400',
      description: 'Automation, Boto3, Flask, Data processing',
    },
    {
      name: 'Terraform',
      icon: Workflow,
      color: 'text-purple-400',
      description: 'Infrastructure as Code, Modules, State management',
    },
    {
      name: 'Git/GitHub',
      icon: GitBranch,
      color: 'text-gray-400',
      description: 'Version control, CI/CD, Actions, Collaboration',
    },
    {
      name: 'CI/CD',
      icon: Workflow,
      color: 'text-cyan-400',
      description: 'Jenkins, GitHub Actions, GitLab CI, Pipelines',
    },
    {
      name: 'Networking',
      icon: Network,
      color: 'text-blue-300',
      description: 'TCP/IP, DNS, Load Balancing, VPC, Security groups',
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'text-red-400',
      description: 'IAM policies, Encryption, Security best practices',
    },
  ]

  return (
    <section id="tech-stack" className="py-20 px-4 bg-gradient-to-b from-transparent to-cloud-darker">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cloud-accent bg-clip-text text-transparent">
            Cloud Tech Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable cloud solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)'
              }}
              className="glass rounded-xl p-6 text-center cursor-pointer group relative overflow-hidden"
            >
              <div className="relative z-10">
                <tech.icon className={`w-12 h-12 ${tech.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 left-0 right-0 px-2">
                  {tech.description}
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-cloud-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
