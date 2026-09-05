'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Cloud, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ['transparent', 'rgba(10, 10, 15, 0.9)'])

  // Function to play click sound using MP3 file
  const playClickSound = () => {
    try {
      const audio = new Audio('/ElevenLabs_A_short,_crisp_digital_button_click_sound,_soft_and_subtle,_with_a_clean_UI_interface_feel_No_mecha.mp3')
      audio.volume = 0.5
      audio.currentTime = 0
      audio.play().catch(error => {
        console.error('Error playing click sound:', error)
      })
    } catch (error) {
      console.error('Error playing click sound:', error)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Cloud className="w-8 h-8 text-cloud-accent" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-cloud-accent bg-clip-text text-transparent">
              CloudStack
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cloud-accent transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                onClick={playClickSound}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cloud-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-dark border-t border-white/10 py-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cloud-accent transition-colors px-4 py-2"
                  onClick={() => {
                    playClickSound()
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
