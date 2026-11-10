import { Cloud, Server, Cpu, Code } from 'lucide-react'
import type { FocusArea } from '@/types'
import { technologies } from './tech-stack'
import { certifications } from './certifications'
import { projects } from './projects'

export const aboutBio =
  "I'm a Cloud Engineer specializing in AWS, DevOps, and container orchestration. " +
  'With a strong foundation in Linux and automation, I help organizations build ' +
  'scalable, secure, and cost-effective cloud infrastructure. I\'m passionate about ' +
  'Infrastructure as Code, continuous integration/continuous deployment, and creating ' +
  'robust systems that can handle production workloads.'

export const aboutTagline = 'Passionate about building scalable cloud infrastructure and automating everything'

/** "What I do" cards on the About section. */
export const whatIDo: FocusArea[] = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Design and implement scalable cloud solutions using AWS services',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Server,
    title: 'DevOps Automation',
    description: 'Build CI/CD pipelines and automate infrastructure with Terraform',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: 'Container Orchestration',
    description: 'Deploy and manage applications using Docker and Kubernetes',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Infrastructure as Code',
    description: 'Implement IaC best practices for reproducible deployments',
    color: 'from-green-500 to-emerald-500',
  },
]

/**
 * Count-up targets for the About stats. Derived from the data layer
 * where possible so numbers stay consistent across the site.
 */
export const aboutStats = {
  projects: projects.length,
  technologies: technologies.length,
  certifications: certifications.length,
  repos: 15,
}
