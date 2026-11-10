import {
  Cloud,
  Container,
  Network,
  Terminal,
  Code2,
  GitBranch,
  Workflow,
  Shield,
  Cpu,
} from 'lucide-react'
import type { TechItem } from '@/types'

/** Technologies shown on the Tech Stack wall. */
export const technologies: TechItem[] = [
  {
    name: 'AWS',
    icon: Cloud,
    color: 'text-orange-400',
    description: 'EC2, S3, VPC, Lambda, CloudFormation, IAM',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Docker',
    icon: Container,
    color: 'text-blue-400',
    description: 'Containerization, Docker Compose, Multi-stage builds',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Kubernetes',
    icon: Cpu,
    color: 'text-blue-500',
    description: 'Orchestration, Helm, Kubectl, Cluster management',
    gradient: 'from-blue-600 to-indigo-500',
  },
  {
    name: 'Linux',
    icon: Terminal,
    color: 'text-yellow-400',
    description: 'System administration, Bash scripting, Security',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Python',
    icon: Code2,
    color: 'text-green-400',
    description: 'Automation, Boto3, Flask, Data processing',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Terraform',
    icon: Workflow,
    color: 'text-purple-400',
    description: 'Infrastructure as Code, Modules, State management',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Git/GitHub',
    icon: GitBranch,
    color: 'text-gray-400',
    description: 'Version control, CI/CD, Actions, Collaboration',
    gradient: 'from-gray-500 to-gray-700',
  },
  {
    name: 'CI/CD',
    icon: Workflow,
    color: 'text-cyan-400',
    description: 'Jenkins, GitHub Actions, GitLab CI, Pipelines',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Networking',
    icon: Network,
    color: 'text-blue-300',
    description: 'TCP/IP, DNS, Load Balancing, VPC, Security groups',
    gradient: 'from-blue-400 to-indigo-400',
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'text-red-400',
    description: 'IAM policies, Encryption, Security best practices',
    gradient: 'from-red-500 to-pink-500',
  },
]
