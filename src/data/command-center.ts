import {
  Activity,
  FolderKanban,
  Cpu,
  GitBranch,
  Cloud,
  Zap,
  Code,
  TrendingUp,
  BarChart3,
  Award,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { projects } from './projects'
import { skills } from './skills'
import { githubStats } from './github'
import { siteStats } from './site'

export interface CommandCenterTab {
  id: string
  label: string
  icon: LucideIcon
}

export const commandCenterTabs: CommandCenterTab[] = [
  { id: 'overview', label: 'Overview', icon: Activity },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'github', label: 'GitHub', icon: GitBranch },
]

export const commandCenterData = {
  overview: {
    title: 'System Overview',
    metrics: [
      { label: 'AWS Status', value: 'Connected', status: 'operational', icon: Cloud },
      { label: 'Projects', value: String(projects.length), status: 'active', icon: FolderKanban },
      { label: 'GitHub', value: 'Active', status: 'connected', icon: GitBranch },
      { label: 'CI/CD', value: 'Operational', status: 'running', icon: Zap },
    ],
  },
  projects: {
    title: 'Project Status',
    items: [
      { name: 'Cloud Web App', status: 'Production', progress: 100, icon: Cloud },
      { name: 'DevOps Pipeline', status: 'Active', progress: 85, icon: Zap },
      { name: 'Serverless API', status: 'Development', progress: 60, icon: Code },
      { name: 'K8s Cluster', status: 'Testing', progress: 40, icon: Cpu },
    ],
  },
  skills: {
    title: 'Skill Metrics',
    skills: skills.map((s) => ({ name: s.name, level: s.level, icon: s.icon })),
  },
  github: {
    title: 'GitHub Activity',
    stats: [
      { label: 'Repositories', value: githubStats.repositories, icon: GitBranch },
      { label: 'Stars', value: githubStats.stars, icon: Award },
      { label: 'Forks', value: githubStats.forks, icon: TrendingUp },
      { label: 'Contributions', value: githubStats.contributions, icon: BarChart3 },
    ],
  },
} as const

export const commandCenterMeta = {
  uptime: siteStats.uptime,
  uptimeLabel: 'Last 30 days',
} as const
