import {
  Cloud,
  Server,
  Database,
  Lock,
  Activity,
  Network,
  HardDrive,
  Globe,
} from 'lucide-react'
import type { CloudComponent } from '@/types'

/** Clickable AWS components in the Architecture Lab grid. */
export const awsComponents: CloudComponent[] = [
  {
    name: 'AWS',
    icon: Cloud,
    color: 'text-orange-400',
    description: 'Amazon Web Services - Cloud computing platform',
    usage: 'Primary cloud provider for all infrastructure',
    features: ['Global infrastructure', '200+ services', 'Pay-as-you-go pricing'],
  },
  {
    name: 'EC2',
    icon: Server,
    color: 'text-green-400',
    description: 'Elastic Compute Cloud - Virtual servers',
    usage: 'Deploy scalable web applications and microservices',
    features: ['Auto-scaling', 'Multiple instance types', 'Load balancing'],
  },
  {
    name: 'VPC',
    icon: Network,
    color: 'text-blue-400',
    description: 'Virtual Private Cloud - Isolated network',
    usage: 'Create secure network environments with subnets and routing',
    features: ['Network isolation', 'Subnets', 'Security groups'],
  },
  {
    name: 'S3',
    icon: HardDrive,
    color: 'text-red-400',
    description: 'Simple Storage Service - Object storage',
    usage: 'Store static assets, backups, and data lakes',
    features: ['99.999999999% durability', 'Versioning', 'Lifecycle policies'],
  },
  {
    name: 'RDS',
    icon: Database,
    color: 'text-purple-400',
    description: 'Relational Database Service - Managed databases',
    usage: 'Host PostgreSQL, MySQL, and other relational databases',
    features: ['Automated backups', 'Read replicas', 'Multi-AZ deployments'],
  },
  {
    name: 'IAM',
    icon: Lock,
    color: 'text-yellow-400',
    description: 'Identity and Access Management - Security',
    usage: 'Control access to AWS resources and users',
    features: ['Fine-grained permissions', 'MFA support', 'Role-based access'],
  },
  {
    name: 'CloudWatch',
    icon: Activity,
    color: 'text-cyan-400',
    description: 'Monitoring and observability service',
    usage: 'Monitor applications, collect logs, and set alarms',
    features: ['Real-time monitoring', 'Log aggregation', 'Automated alerts'],
  },
  {
    name: 'CloudFront',
    icon: Globe,
    color: 'text-pink-400',
    description: 'Content Delivery Network - Global edge locations',
    usage: 'Deliver content with low latency and high transfer speeds',
    features: ['400+ edge locations', 'DDoS protection', 'Dynamic content'],
  },
]

/** Steps in the "Typical Architecture Flow" visualization. */
export const architectureFlow = [
  { name: 'User', description: 'Request' },
  { name: 'CloudFront', description: 'CDN' },
  { name: 'Load Balancer', description: 'Distribution' },
  { name: 'EC2', description: 'Processing' },
  { name: 'Database', description: 'Storage' },
] as const
