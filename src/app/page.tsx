import Navbar from '@/components/layout/Navbar'
import CommandCenter from '@/components/widgets/CommandCenter'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import ArchitectureLab from '@/components/sections/ArchitectureLab'
import SkillsDashboard from '@/components/sections/SkillsDashboard'
import InteractiveTerminal from '@/components/widgets/InteractiveTerminal'
import Certifications from '@/components/sections/Certifications'
import GitHubActivity from '@/components/sections/GitHubActivity'
import LearningJourney from '@/components/sections/LearningJourney'
import Contact from '@/components/sections/Contact'

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
