import type { NavItem } from '@/types'

/** Primary navigation items shown in the navbar. */
export const navItems: NavItem[] = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

/** Every section id on the page — used by the navbar scroll-spy. */
export const sectionIds = [
  'about',
  'tech-stack',
  'projects',
  'architecture-lab',
  'skills',
  'certifications',
  'github-activity',
  'learning-journey',
  'contact',
] as const
