'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Target, Zap, Cloud, Award, Workflow, Container, Network, Terminal, Server, Database, Shield, Clock, BookOpen, Code2, GitBranch } from 'lucide-react'

export default function LearningJourney() {
  const milestones = [
    {
      year: '2026',
      title: 'Programming Fundamentals',
      description: 'Started journey with Python and JavaScript basics',
      icon: Zap,
      color: 'text-green-400',
      duration: '6 months',
      status: 'completed',
    },
    {
      year: '2026',
      title: 'Cloud Computing Introduction',
      description: 'Discovered AWS and cloud fundamentals',
      icon: Cloud,
      color: 'text-orange-400',
      duration: '4 months',
      status: 'completed',
    },
    {
      year: '2026',
      title: 'Networking (4 Months)',
      description: 'Deep dive into networking concepts, TCP/IP, DNS, routing',
      icon: Network,
      color: 'text-blue-400',
      duration: '4 months',
      status: 'completed',
    },
    {
      year: '2026',
      title: 'Linux Administration (3 Months)',
      description: 'Mastered Linux system administration, shell scripting, security',
      icon: Terminal,
      color: 'text-yellow-400',
      duration: '3 months',
      status: 'completed',
    },
    {
      year: '2027',
      title: 'AWS Certifications',
      description: 'Earned AWS Solutions Architect and Developer Associate',
      icon: Award,
      color: 'text-purple-400',
      duration: '6 months',
      status: 'completed',
    },
    {
      year: '2027',
      title: 'Docker & Containers',
      description: 'Containerization, Docker Compose, multi-stage builds',
      icon: Container,
      color: 'text-cyan-400',
      duration: '3 months',
      status: 'completed',
    },
    {
      year: '2027',
      title: 'DevOps & CI/CD',
      description: 'Jenkins, GitHub Actions, GitLab CI, automation pipelines',
      icon: Workflow,
      color: 'text-pink-400',
      duration: '4 months',
      status: 'completed',
    },
    {
      year: '2027',
      title: 'PG Graduation',
      description: 'Post Graduation completed - Major milestone achieved',
      icon: Award,
      color: 'text-cloud-accent',
      duration: '2 years',
      status: 'completed',
    },
    {
      year: '2028',
      title: 'Kubernetes & Orchestration',
      description: 'Container orchestration, Helm, cluster management',
      icon: Server,
      color: 'text-indigo-400',
      duration: '4 months',
      status: 'in-progress',
    },
    {
      year: '2028',
      title: 'Terraform & IaC',
      description: 'Infrastructure as Code, modules, state management',
      icon: Database,
      color: 'text-emerald-400',
      duration: '3 months',
      status: 'current',
    },
    {
      year: '2028',
      title: 'Advanced Cloud Architecture',
      description: 'Multi-cloud, serverless, microservices architecture',
      icon: Cloud,
      color: 'text-rose-400',
      duration: '6 months',
      status: 'upcoming',
    },
    {
      year: 'Future',
      title: 'Cloud Engineer Career',
      description: 'Building scalable cloud solutions and architectural expertise',
      icon: Target,
      color: 'text-cloud-accent',
      duration: 'Ongoing',
      status: 'future',
    },
  ] as const

  return (
    <section id="learning-journey" className="py-20 px-4 bg-gradient-to-b from-cloud-darker to-transparent relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cloud-accent rounded-full opacity-10"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cloud-accent to-white bg-clip-text text-transparent">
            Learning Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From programming fundamentals to cloud engineering excellence
          </p>
        </motion.div>

        {/* Journey Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { label: 'Total Learning', value: '2+ Years', icon: Calendar },
            { label: 'Technologies', value: '6+', icon: Code2 },
            { label: 'Certifications', value: '3+', icon: Award },
            { label: 'Projects', value: '7+', icon: GitBranch },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-4 text-center cursor-pointer"
            >
              <stat.icon className="w-6 h-6 text-cloud-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cloud-accent via-cloud-secondary to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />

          {/* Milestones */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={`${milestone.year}-${milestone.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot with status indicator */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-full h-full rounded-full border-4 ${
                      milestone.status === 'completed' ? 'bg-green-400 border-green-500' :
                      milestone.status === 'in-progress' ? 'bg-blue-400 border-blue-500' :
                      milestone.status === 'current' ? 'bg-yellow-400 border-yellow-500' :
                      'bg-gray-400 border-gray-500'
                    }`}
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: milestone.status === 'current' ? ['0 0 0px rgba(255, 200, 0, 0)', '0 0 20px rgba(255, 200, 0, 0.5)', '0 0 0px rgba(255, 200, 0, 0)'] : 'none',
                    }}
                    transition={{ duration: 2, repeat: milestone.status === 'current' ? Infinity : 0 }}
                  />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    className={`glass rounded-2xl p-6 cursor-pointer relative overflow-hidden group ${
                      milestone.status === 'current' ? 'border-2 border-yellow-400/50' :
                      milestone.status === 'in-progress' ? 'border-2 border-blue-400/50' :
                      ''
                    }`}
                  >
                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        milestone.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                        milestone.status === 'current' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {milestone.status === 'completed' ? '✓ Completed' :
                         milestone.status === 'in-progress' ? '→ In Progress' :
                         milestone.status === 'current' ? '● Current' :
                         '○ Upcoming'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color.replace('text-', 'from-').replace('-400', '-400/20')} to-transparent flex items-center justify-center`}>
                        <milestone.icon className={`w-6 h-6 ${milestone.color}`} />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-cloud-accent/10 text-cloud-accent rounded-full text-sm font-semibold">
                          {milestone.year}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-400">{milestone.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cloud-accent transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-cloud-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass rounded-2xl p-8 border border-yellow-400/30"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              className="w-4 h-4 bg-yellow-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: ['0 0 0px rgba(255, 200, 0, 0)', '0 0 20px rgba(255, 200, 0, 0.5)', '0 0 0px rgba(255, 200, 0, 0)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <h3 className="text-2xl font-bold text-white">Currently Focused On</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Terraform & IaC', description: 'Infrastructure as Code mastery', icon: Database },
              { title: 'Kubernetes Advanced', description: 'Production orchestration', icon: Server },
              { title: 'Cloud Architecture', description: 'Multi-cloud solutions', icon: Cloud },
            ].map((focus, index) => (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-dark rounded-xl p-6 text-center cursor-pointer"
              >
                <focus.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">{focus.title}</h4>
                <p className="text-sm text-gray-400">{focus.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-cloud-accent" />
            <h3 className="text-2xl font-bold text-white">Upcoming Learning Path</h3>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {['Service Mesh (Istio)', 'GitOps (ArgoCD)', 'Advanced Security', 'Cost Optimization', 'Multi-Cloud Strategy', 'Serverless Architecture'].map((topic) => (
                <motion.span
                  key={topic}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 glass rounded-full text-sm text-cloud-accent hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Graduation Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-cloud-accent/20 via-cloud-accent/10 to-cloud-accent/20 rounded-2xl p-8 border border-cloud-accent/30 text-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Award className="w-16 h-16 text-cloud-accent" />
          </motion.div>
          <h3 className="text-3xl font-bold text-white mb-2">Post Graduation On 2028</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Major milestone achieved! Post Graduation completed with focus on Cloud Computing and DevOps. 
            Ready to take on challenging roles in cloud engineering.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            {['Cloud Architecture', 'DevOps Engineering', 'System Administration'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-cloud-accent/20 text-cloud-accent rounded-lg text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 2028 Advanced Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Server className="w-6 h-6 text-indigo-400" />
            <h3 className="text-2xl font-bold text-white">2028 Advanced Learning Path</h3>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Kubernetes Advanced', description: 'Production orchestration, Helm charts, custom controllers', icon: Server, color: 'text-indigo-400' },
                { title: 'Terraform Mastery', description: 'Enterprise IaC, modules, state management, testing', icon: Database, color: 'text-emerald-400' },
                { title: 'Multi-Cloud Strategy', description: 'AWS, Azure, GCP integration and management', icon: Cloud, color: 'text-rose-400' },
                { title: 'Service Mesh', description: 'Istio, Linkerd, traffic management, security', icon: Network, color: 'text-cyan-400' },
              ].map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-dark rounded-xl p-6 cursor-pointer"
                >
                  <topic.icon className={`w-8 h-8 ${topic.color} mb-3`} />
                  <h4 className="text-lg font-semibold text-white mb-2">{topic.title}</h4>
                  <p className="text-sm text-gray-400">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
