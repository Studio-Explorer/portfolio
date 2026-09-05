'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Cloud, Database, Lock, Monitor, ExternalLink, Github, ArrowRight, X, Cpu, GitBranch, Workflow, Container, Zap, Activity, Network, type LucideIcon } from 'lucide-react'
import { useState } from 'react'

type Project = {
  id: number
  title: string
  technologies: string[]
  problem: string
  solution: string
  github: string
  demo: string
  architecture: {
    name: string
    description: string
    icon: LucideIcon
  }[]
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Function to play click sound using MP3 file
  const playClickSound = () => {
    try {
      const audio = new Audio('/ElevenLabs_A_short,_crisp_digital_button_click_sound,_soft_and_subtle,_with_a_clean_UI_interface_feel_No_mecha.mp3')
      audio.volume = 0.5
      audio.currentTime = 0
      audio.play().catch(error => {
        console.error('Error playing click sound:', error)
      })
    } catch (error) {
      console.error('Error playing click sound:', error)
    }
  }

  const projects = [
    {
      id: 1,
      title: 'Cloud-Based Secure Web Application',
      technologies: ['AWS EC2', 'VPC', 'IAM', 'S3', 'CloudWatch'],
      problem: 'Traditional web applications lacked scalability and security in cloud environments.',
      solution: 'Built a highly available web application with AWS VPC, load balancing, and comprehensive security policies.',
      github: 'https://github.com/yourusername/secure-web-app',
      demo: 'https://demo.example.com',
      architecture: [
        { name: 'CloudFront', description: 'CDN for global content delivery', icon: Cloud },
        { name: 'Load Balancer', description: 'Distributes traffic across EC2 instances', icon: Monitor },
        { name: 'EC2', description: 'Auto-scaling compute instances', icon: Cpu },
        { name: 'RDS', description: 'Managed PostgreSQL database', icon: Database },
        { name: 'S3', description: 'Static asset storage', icon: Database },
        { name: 'IAM', description: 'Access control and security', icon: Lock },
      ],
    },
    {
      id: 2,
      title: 'DevOps CI/CD Pipeline',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
      problem: 'Manual deployment processes were slow and error-prone.',
      solution: 'Automated the entire deployment pipeline with infrastructure as code and container orchestration.',
      github: 'https://github.com/yourusername/ci-cd-pipeline',
      demo: 'https://demo.example.com',
      architecture: [
        { name: 'GitHub', description: 'Source code repository', icon: GitBranch },
        { name: 'Jenkins', description: 'CI/CD orchestration', icon: Workflow },
        { name: 'Docker', description: 'Container building', icon: Container },
        { name: 'Kubernetes', description: 'Container orchestration', icon: Cpu },
        { name: 'Terraform', description: 'Infrastructure provisioning', icon: Workflow },
      ],
    },
    {
      id: 3,
      title: 'Serverless API Gateway',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'CloudWatch'],
      problem: 'Needed a cost-effective API solution that scales automatically.',
      solution: 'Implemented serverless architecture using Lambda functions with API Gateway integration.',
      github: 'https://github.com/yourusername/serverless-api',
      demo: 'https://api.example.com',
      architecture: [
        { name: 'API Gateway', description: 'REST API endpoint', icon: Cloud },
        { name: 'Lambda', description: 'Serverless compute', icon: Zap },
        { name: 'DynamoDB', description: 'NoSQL database', icon: Database },
        { name: 'Cognito', description: 'User authentication', icon: Lock },
        { name: 'CloudWatch', description: 'Monitoring and logging', icon: Monitor },
      ],
    },
    {
      id: 4,
      title: 'Kubernetes Cluster Management',
      technologies: ['EKS', 'Helm', 'Prometheus', 'Grafana', 'Istio'],
      problem: 'Managing containerized applications at scale was complex.',
      solution: 'Built a production-ready Kubernetes cluster with monitoring, service mesh, and automated scaling.',
      github: 'https://github.com/yourusername/k8s-cluster',
      demo: 'https://k8s.example.com',
      architecture: [
        { name: 'EKS', description: 'Managed Kubernetes service', icon: Cloud },
        { name: 'Helm', description: 'Package management', icon: Workflow },
        { name: 'Prometheus', description: 'Metrics collection', icon: Activity },
        { name: 'Grafana', description: 'Visualization dashboard', icon: Monitor },
        { name: 'Istio', description: 'Service mesh', icon: Network },
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cloud-accent bg-clip-text text-transparent">
            Featured Cloud Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world cloud solutions showcasing infrastructure and DevOps expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:glow-blue transition-all cursor-pointer group"
              onClick={() => {
                playClickSound()
                setSelectedProject(project)
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cloud-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-cloud-accent/10 text-cloud-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-cloud-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 text-sm">Problem:</span>
                  <p className="text-sm text-gray-400">{project.problem}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 text-sm">Solution:</span>
                  <p className="text-sm text-gray-400">{project.solution}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm hover:bg-white/10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    playClickSound()
                  }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm hover:bg-white/10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    playClickSound()
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    playClickSound()
                    setSelectedProject(project)
                  }}
                  className="text-cloud-accent text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Architecture <ArrowRight className="w-4 h-4" />
                </button>
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <button
                    onClick={() => {
                      playClickSound()
                      setSelectedProject(null)
                    }}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-cloud-accent mb-4">Architecture Flow</h4>
                  <div className="flex items-center justify-between overflow-x-auto pb-4">
                    {selectedProject.architecture.map((component, index) => (
                      <div key={component.name} className="flex items-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex flex-col items-center p-4 glass rounded-xl min-w-[120px] cursor-pointer"
                        >
                          <component.icon className="w-8 h-8 text-cloud-accent mb-2" />
                          <span className="text-sm font-medium text-white">{component.name}</span>
                          <span className="text-xs text-gray-400 mt-1 text-center">
                            {component.description}
                          </span>
                        </motion.div>
                        {index < selectedProject.architecture.length - 1 && (
                          <ArrowRight className="w-6 h-6 text-cloud-accent mx-2 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cloud-accent mb-3">Problem</h4>
                    <p className="text-gray-300">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cloud-accent mb-3">Solution</h4>
                    <p className="text-gray-300">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-cloud-accent text-cloud-dark font-semibold rounded-lg hover:scale-105 transition-transform"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
