import {
  Cloud,
  Terminal,
  Code2,
  Container,
  Workflow,
  Cpu,
  FolderKanban,
  Award,
  Calendar,
  GitBranch,
} from 'lucide-react'
import type { Skill } from '@/types'
import { siteStats } from './site'
import { projects } from './projects'
import { certifications } from './certifications'

/** Proficiency levels shown on the Skills Dashboard and Command Center. */
export const skills: Skill[] = [
  { name: 'AWS', level: 85, icon: Cloud, color: 'bg-orange-400' },
  { name: 'Linux', level: 78, icon: Terminal, color: 'bg-yellow-400' },
  { name: 'Python', level: 72, icon: Code2, color: 'bg-green-400' },
  { name: 'Docker', level: 68, icon: Container, color: 'bg-blue-400' },
  { name: 'Terraform', level: 75, icon: Workflow, color: 'bg-purple-400' },
  { name: 'Kubernetes', level: 65, icon: Cpu, color: 'bg-cyan-400' },
]

/** Extra metrics row under the Skills Dashboard. */
export const dashboardMetrics = [
  { label: 'Projects', value: `${projects.length}`, icon: FolderKanban },
  { label: 'Certifications', value: `${certifications.length}`, icon: Award },
  { label: 'Years Exp', value: siteStats.yearsExperience, icon: Calendar },
  { label: 'Contributions', value: siteStats.contributions, icon: GitBranch },
]
