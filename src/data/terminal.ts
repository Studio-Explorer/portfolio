import { site, profileLinks, siteStats } from './site'
import { technologies } from './tech-stack'

export interface TerminalLine {
  type: 'command' | 'output' | 'error'
  text: string
}

export const terminalWelcome: TerminalLine[] = [
  { type: 'command', text: `Welcome to ${site.name}'s Cloud Terminal` },
  { type: 'output', text: 'Type "help" to see available commands' },
]

/** Commands supported by the interactive terminal. */
export const terminalCommands: Record<string, string> = {
  help: 'Available commands: whoami, skills, status, projects, contact, clear',
  whoami: `${site.name.toLowerCase()}@cloud-engineer`,
  skills: technologies.map((t) => t.name).join(', '),
  status: '● Available for opportunities',
  projects: `${siteStats.contributions} contributions. Check the Projects section for details.`,
  contact: `Email: ${site.email} | LinkedIn: /in/laxmikant-padhy-572b4441b/ | GitHub: @${site.githubUsername}`,
  clear: 'CLEAR',
}

export const quickCommands = ['whoami', 'skills', 'status', 'help'] as const
