import type { GitHubRepo, LanguageStat } from '@/types'
import { profileLinks } from './site'

export const githubProfileUrl = profileLinks.github

/** GitHub overview stats. Single source of truth — used by GitHub Activity and Command Center. */
export const githubStats = {
  repositories: 12,
  stars: 45,
  forks: 26,
  contributions: 50,
}

export const topLanguages: LanguageStat[] = [
  { name: 'Python', percentage: 35, color: 'bg-green-400' },
  { name: 'JavaScript', percentage: 25, color: 'bg-yellow-400' },
  { name: 'TypeScript', percentage: 20, color: 'bg-blue-400' },
  { name: 'Shell', percentage: 15, color: 'bg-gray-400' },
  { name: 'HCL', percentage: 5, color: 'bg-purple-400' },
]

/** TODO: replace placeholder repos with real GitHub repositories. */
export const recentRepos: GitHubRepo[] = [
  {
    name: 'cloud-automation',
    description: 'Infrastructure automation using Terraform and Ansible',
    url: `${profileLinks.github}/cloud-automation`,
    stars: 25,
    forks: 8,
    language: 'Python',
    updatedAt: '2 days ago',
  },
  {
    name: 'k8s-cluster-setup',
    description: 'Production-ready Kubernetes cluster with monitoring',
    url: `${profileLinks.github}/k8s-cluster-setup`,
    stars: 18,
    forks: 5,
    language: 'Shell',
    updatedAt: '1 week ago',
  },
  {
    name: 'serverless-api',
    description: 'AWS Lambda API Gateway project',
    url: `${profileLinks.github}/serverless-api`,
    stars: 12,
    forks: 3,
    language: 'TypeScript',
    updatedAt: '2 weeks ago',
  },
  {
    name: 'docker-templates',
    description: 'Collection of Dockerfile templates for various stacks',
    url: `${profileLinks.github}/docker-templates`,
    stars: 20,
    forks: 7,
    language: 'Shell',
    updatedAt: '3 weeks ago',
  },
]

/** Weekday columns for the contribution graph. */
export const contributionDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const
