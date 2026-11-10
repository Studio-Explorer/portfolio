import type { LucideIcon } from 'lucide-react'

/** A single icon + label badge (hero floats, nav logo, etc.) */
export interface BadgeItem {
  icon: LucideIcon
  label: string
  color?: string
  delay?: number
}

/** A technology entry shown on the tech stack wall */
export interface TechItem {
  name: string
  icon: LucideIcon
  color: string
  description: string
  gradient: string
}

/** A skill with a proficiency level (0-100) */
export interface Skill {
  name: string
  level: number
  icon: LucideIcon
  color: string
}

/** One node in a project's architecture flow diagram */
export interface ArchitectureNode {
  name: string
  description: string
  icon: LucideIcon
}

/** A portfolio project card */
export interface Project {
  id: number
  slug: string
  title: string
  technologies: string[]
  problem: string
  solution: string
  github: string
  demo: string
  architecture: ArchitectureNode[]
}

/** An AWS/cloud component in the Architecture Lab */
export interface CloudComponent {
  name: string
  icon: LucideIcon
  color: string
  description: string
  usage: string
  features: string[]
}

/** A certification card */
export interface Certification {
  id: number
  name: string
  issuer: string
  date: string
  skills: string[]
  verification: string
  icon: LucideIcon
  color: string
}

/** A milestone on the learning journey timeline */
export type MilestoneStatus = 'completed' | 'in-progress' | 'current' | 'upcoming' | 'future'

export interface Milestone {
  year: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  duration: string
  status: MilestoneStatus
}

/** A contact/social link card */
export interface ContactLink {
  icon: LucideIcon
  label: string
  value: string
  href: string
  color: string
}

/** A GitHub repository entry */
export interface GitHubRepo {
  name: string
  description: string
  url: string
  stars: number
  forks: number
  language: string
  updatedAt: string
}

/** A language breakdown entry */
export interface LanguageStat {
  name: string
  percentage: number
  color: string
}

/** A "what I do" service card on the About section */
export interface FocusArea {
  icon: LucideIcon
  title: string
  description: string
  /** Tailwind gradient classes, e.g. 'from-orange-500 to-red-500' */
  color: string
}

/** Navigation link */
export interface NavItem {
  name: string
  href: string
  id: string
}
