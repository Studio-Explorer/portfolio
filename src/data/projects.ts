import {
  Cloud,
  Database,
  Lock,
  Monitor,
  Cpu,
  GitBranch,
  Workflow,
  Container,
  Zap,
  Activity,
  Network,
} from 'lucide-react'
import type { Project } from '@/types'

/**
 * Featured projects.
 * TODO: replace placeholder github/demo URLs with real links.
 */
export const projects: Project[] = [
  {
    id: 1,
    slug: 'secure-web-app',
    title: 'Cloud-Based Secure Web Application',
    technologies: ['AWS EC2', 'VPC', 'IAM', 'S3', 'CloudWatch'],
    problem: 'Traditional web applications lacked scalability and security in cloud environments.',
    solution: 'Built a highly available web application with AWS VPC, load balancing, and comprehensive security policies.',
    github: 'https://github.com/laxmikant/secure-web-app',
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
    slug: 'ci-cd-pipeline',
    title: 'DevOps CI/CD Pipeline',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    problem: 'Manual deployment processes were slow and error-prone.',
    solution: 'Automated the entire deployment pipeline with infrastructure as code and container orchestration.',
    github: 'https://github.com/laxmikant/ci-cd-pipeline',
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
    slug: 'serverless-api',
    title: 'Serverless API Gateway',
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'CloudWatch'],
    problem: 'Needed a cost-effective API solution that scales automatically.',
    solution: 'Implemented serverless architecture using Lambda functions with API Gateway integration.',
    github: 'https://github.com/laxmikant/serverless-api',
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
    slug: 'k8s-cluster',
    title: 'Kubernetes Cluster Management',
    technologies: ['EKS', 'Helm', 'Prometheus', 'Grafana', 'Istio'],
    problem: 'Managing containerized applications at scale was complex.',
    solution: 'Built a production-ready Kubernetes cluster with monitoring, service mesh, and automated scaling.',
    github: 'https://github.com/laxmikant/k8s-cluster',
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
