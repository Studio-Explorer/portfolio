'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import ArchitectureLab from '@/components/ArchitectureLab'
import SkillsDashboard from '@/components/SkillsDashboard'
import InteractiveTerminal from '@/components/InteractiveTerminal'
import Certifications from '@/components/Certifications'
import GitHubActivity from '@/components/GitHubActivity'
import LearningJourney from '@/components/LearningJourney'
import Contact from '@/components/Contact'
import CommandCenter from '@/components/CommandCenter'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-cloud-dark">
      <Navbar />
      <CommandCenter />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <ArchitectureLab />
      <SkillsDashboard />
      <InteractiveTerminal />
      <Certifications />
      <GitHubActivity />
      <LearningJourney />
      <Contact />
    </main>
  )
}
