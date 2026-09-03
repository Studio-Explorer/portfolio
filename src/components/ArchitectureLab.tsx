'use client'

import { motion } from 'framer-motion'
import { 
  Cloud, 
  Server, 
  Database, 
  Lock, 
  Activity, 
  Shield,
  Network,
  HardDrive,
  Globe
} from 'lucide-react'
import { useState } from 'react'

export default function ArchitectureLab() {
  const [selectedComponent, setSelectedComponent] = useState<typeof awsComponents[0] | null>(null)

  const awsComponents = [
    {
      name: 'AWS',
      icon: Cloud,
      color: 'text-orange-400',
      description: 'Amazon Web Services - Cloud computing platform',
      usage: 'Primary cloud provider for all infrastructure',
    },
    {
      name: 'EC2',
      icon: Server,
      color: 'text-green-400',
      description: 'Elastic Compute Cloud - Virtual servers',
      usage: 'Deploy scalable web applications and microservices',
    },
    {
      name: 'VPC',
      icon: Network,
      color: 'text-blue-400',
      description: 'Virtual Private Cloud - Isolated network',
      usage: 'Create secure network environments with subnets and routing',
    },
    {
      name: 'S3',
      icon: HardDrive,
      color: 'text-red-400',
      description: 'Simple Storage Service - Object storage',
      usage: 'Store static assets, backups, and data lakes',
    },
    {
      name: 'RDS',
      icon: Database,
      color: 'text-purple-400',
      description: 'Relational Database Service - Managed databases',
      usage: 'Host PostgreSQL, MySQL, and other relational databases',
    },
    {
      name: 'IAM',
      icon: Lock,
      color: 'text-yellow-400',
      description: 'Identity and Access Management - Security',
      usage: 'Control access to AWS resources and users',
    },
    {
      name: 'CloudWatch',
      icon: Activity,
      color: 'text-cyan-400',
      description: 'Monitoring and observability service',
      usage: 'Monitor applications, collect logs, and set alarms',
    },
    {
      name: 'CloudFront',
      icon: Globe,
      color: 'text-pink-400',
      description: 'Content Delivery Network - Global edge locations',
      usage: 'Deliver content with low latency and high transfer speeds',
    },
  ]

  return (
    <section id="architecture-lab" className="py-20 px-4 bg-gradient-to-b from-cloud-darker to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cloud-accent bg-clip-text text-transparent">
            Cloud Architecture Lab
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interactive playground to explore cloud infrastructure components
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awsComponents.map((component, index) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)'
              }}
              onClick={() => setSelectedComponent(component)}
              className="glass rounded-xl p-6 text-center cursor-pointer group relative overflow-hidden"
            >
              <motion.div
                className={`w-16 h-16 ${component.color} mx-auto mb-4 group-hover:scale-110 transition-transform`}
                animate={{ rotate: selectedComponent?.name === component.name ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <component.icon className="w-full h-full" />
              </motion.div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{component.name}</h3>
              <p className="text-xs text-gray-400">{component.description}</p>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-cloud-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        {/* Component Detail Panel */}
        {selectedComponent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 glass rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <motion.div
                className={`w-20 h-20 ${selectedComponent.color} flex-shrink-0`}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <selectedComponent.icon className="w-full h-full" />
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedComponent.name}</h3>
                <p className="text-gray-300 mb-4">{selectedComponent.description}</p>
                
                <div className="glass-dark rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-cloud-accent mb-2">How I Use It</h4>
                  <p className="text-gray-400">{selectedComponent.usage}</p>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedComponent(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Shield className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Architecture Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Typical Architecture Flow</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {['User', 'CloudFront', 'Load Balancer', 'EC2', 'Database'].map((step, index) => (
              <div key={step} className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="glass rounded-lg p-4 text-center min-w-[100px]"
                >
                  <div className="text-cloud-accent font-semibold mb-1">{step}</div>
                  <div className="text-xs text-gray-400">{getStepDescription(step)}</div>
                </motion.div>
                
                {index < 4 && (
                  <motion.div
                    className="hidden md:block w-8 h-px bg-cloud-accent"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function getStepDescription(step: string): string {
  const descriptions: Record<string, string> = {
    'User': 'Request',
    'CloudFront': 'CDN',
    'Load Balancer': 'Distribution',
    'EC2': 'Processing',
    'Database': 'Storage',
  }
  return descriptions[step] || ''
}
