import {
  Zap,
  Cloud,
  Network,
  Terminal,
  Award,
  Container,
  Workflow,
  Server,
  Database,
  Target,
  Calendar,
  Code2,
  GitBranch,
} from 'lucide-react'
import type { Milestone } from '@/types'
import { siteStats } from './site'
import { technologies } from './tech-stack'
import { certifications } from './certifications'
import { projects } from './projects'

/** Timeline milestones shown on the Learning Journey section. */
export const milestones: Milestone[] = [
  {
    year: '2026',
    title: 'Programming Fundamentals',
    description: 'Built solid foundations in Python, JavaScript, logic, and problem-solving.',
    icon: Zap,
    color: 'text-green-400',
    duration: '6 months',
    status: 'completed',
  },
  {
    year: '2026',
    title: 'Cloud Basics',
    description: 'Learned cloud concepts, AWS basics, and how services work together.',
    icon: Cloud,
    color: 'text-orange-400',
    duration: '4 months',
    status: 'completed',
  },
  {
    year: '2026',
    title: 'Networking Fundamentals',
    description: 'Covered TCP/IP, DNS, routing, switching, and core networking concepts.',
    icon: Network,
    color: 'text-blue-400',
    duration: '4 months',
    status: 'completed',
  },
  {
    year: '2026',
    title: 'Linux Essentials',
    description: 'Mastered shell usage, file systems, permissions, scripting, and system basics.',
    icon: Terminal,
    color: 'text-yellow-400',
    duration: '3 months',
    status: 'completed',
  },
  {
    year: '2027',
    title: 'AWS Core Services',
    description: 'Worked with EC2, S3, IAM, VPC, and essential cloud deployment patterns.',
    icon: Award,
    color: 'text-purple-400',
    duration: '6 months',
    status: 'in-progress',
  },
  {
    year: '2027',
    title: 'Docker & Containers',
    description: 'Learning containerization, Docker Compose, networking, and image optimization.',
    icon: Container,
    color: 'text-cyan-400',
    duration: '3 months',
    status: 'current',
  },
  {
    year: '2027',
    title: 'CI/CD & Automation',
    description: 'Building practical automation workflows with GitHub Actions and deployment pipelines.',
    icon: Workflow,
    color: 'text-pink-400',
    duration: '4 months',
    status: 'in-progress',
  },
  {
    year: '2027',
    title: 'Intermediate Cloud Skills',
    description: 'Strengthening real-world cloud operations, deployment, and troubleshooting.',
    icon: Award,
    color: 'text-cloud-accent',
    duration: 'Ongoing',
    status: 'current',
  },
  {
    year: '2028',
    title: 'Kubernetes & Orchestration',
    description: 'Next milestone: containers at scale, cluster management, and production workloads.',
    icon: Server,
    color: 'text-indigo-400',
    duration: '4 months',
    status: 'upcoming',
  },
  {
    year: '2028',
    title: 'Terraform & IaC',
    description: 'Upcoming focus on provisioning, modules, pipelines, and automation at scale.',
    icon: Database,
    color: 'text-emerald-400',
    duration: '3 months',
    status: 'upcoming',
  },
  {
    year: '2028',
    title: 'Advanced Cloud Architecture',
    description: 'Planned work on multi-cloud design, serverless systems, and scalable architecture.',
    icon: Cloud,
    color: 'text-rose-400',
    duration: '6 months',
    status: 'upcoming',
  },
  {
    year: 'Future',
    title: 'Cloud Engineer Career',
    description: 'Targeting hands-on experience in scalable cloud solutions and engineering excellence.',
    icon: Target,
    color: 'text-cloud-accent',
    duration: 'Ongoing',
    status: 'future',
  },
]

/** Stats row at the top of the Learning Journey section. */
export const journeyStats = [
  { label: 'Total Learning', value: siteStats.yearsExperience, icon: Calendar },
  { label: 'Technologies', value: `${technologies.length}+`, icon: Code2 },
  { label: 'Certifications', value: `${certifications.length}+`, icon: Award },
  { label: 'Projects', value: `${projects.length}+`, icon: GitBranch },
]

/** "Currently Focused On" cards. */
export const currentFocus = [
  { title: 'AWS Core Services', description: 'Hands-on cloud fundamentals and deployment patterns', icon: Cloud },
  { title: 'Docker & Containers', description: 'Containerization and service orchestration', icon: Container },
  { title: 'CI/CD Automation', description: 'Build and deploy workflow automation', icon: Workflow },
]

/** Topics in the "Upcoming Learning Path" chip cloud. */
export const upcomingTopics = [
  'Kubernetes',
  'Terraform',
  'Service Mesh (Istio)',
  'GitOps (ArgoCD)',
  'Advanced Security',
  'Multi-Cloud Strategy',
  'Serverless Architecture',
]

/** Graduation highlight copy. */
export const graduation = {
  title: 'Learning Journey 2026 - 2028',
  description:
    'Basic skills are completed, intermediate cloud and DevOps concepts are actively being developed, and advanced architecture topics are planned for the next phase of growth.',
  skills: ['Cloud Fundamentals', 'DevOps Practices', 'System Administration'],
}

/** "2028 Advanced Learning Path" cards. */
export const advancedLearningPath = [
  { title: 'Kubernetes Advanced', description: 'Cluster design, workloads, Helm, and production orchestration', icon: Server, color: 'text-indigo-400' },
  { title: 'Terraform Mastery', description: 'Infrastructure as code, modules, state management, and automation', icon: Database, color: 'text-emerald-400' },
  { title: 'Multi-Cloud Strategy', description: 'AWS, Azure, and GCP integration and architecture patterns', icon: Cloud, color: 'text-rose-400' },
  { title: 'Service Mesh', description: 'Istio, traffic management, observability, and security', icon: Network, color: 'text-cyan-400' },
]
