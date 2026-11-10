/**
 * Central site configuration.
 * Update this file once and every section of the portfolio reflects the change.
 */
export const site = {
  name: 'Laxmikant',
  role: 'Cloud Engineer',
  headline: 'Cloud Engineer | DevOps | AWS Specialist',
  status: 'Currently building scalable cloud solutions',
  email: 'razzkumarpadhi@gmail.com',
  githubUsername: 'laxmikant',
  linkedinUrl: 'https://www.linkedin.com/in/laxmikant-padhy-572b4441b/',
  resumeUrl: '/resume.pdf',
  location: 'Chandigarh University, Mohali',
  locationNote: 'Available for remote opportunities',
  responseTime: 'Usually within 24 hours',
  avatar: '/file_0000000062a881fabefb730c269fc02d.png',
  dashboardName: 'Cloud_Verse',
} as const

export const profileLinks = {
  github: `https://github.com/${site.githubUsername}`,
  linkedin: site.linkedinUrl,
  email: `mailto:${site.email}`,
  resume: site.resumeUrl,
} as const

/** Aggregate stats shown across sections (kept in sync manually). */
export const siteStats = {
  yearsExperience: '2+',
  contributions: '500+',
  uptime: '99.9%',
} as const
