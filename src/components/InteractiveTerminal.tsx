'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X, Minimize, Maximize2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([
    { type: 'command', text: 'Welcome to Laxmikant\'s Cloud Terminal' },
    { type: 'output', text: 'Type "help" to see available commands' },
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: Record<string, string> = {
    help: 'Available commands: whoami, skills, status, projects, contact, clear',
    whoami: 'laxmikant@cloud-engineer',
    skills: 'AWS, Docker, Linux, Python, Terraform, Kubernetes, CI/CD, Networking',
    status: '● Available for opportunities',
    projects: '5+ cloud projects completed. Check the Projects section for details.',
    contact: 'Email: razzkumarpadhi@gmail.com | LinkedIn: /in/laxmikant-padhy-572b4441b/ | GitHub: @laxmikant',
    clear: 'CLEAR',
  }

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const command = input.toLowerCase().trim()
    const newOutput = [...output, { type: 'command', text: `$ ${input}` }]

    if (command === 'clear') {
      setOutput([
        { type: 'command', text: 'Welcome to Laxmikant\'s Cloud Terminal' },
        { type: 'output', text: 'Type "help" to see available commands' },
      ])
    } else if (commands[command]) {
      newOutput.push({ type: 'output', text: commands[command] })
    } else {
      newOutput.push({ type: 'error', text: `Command not found: ${command}. Type "help" for available commands.` })
    }

    setOutput(newOutput)
    setInput('')
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cloud-accent bg-clip-text text-transparent">
            Interactive Terminal
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Try out some commands in the cloud terminal
          </p>
        </motion.div>

        {/* Terminal Toggle Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 px-8 py-4 glass rounded-xl hover:glow-blue transition-all"
          >
            <Terminal className="w-6 h-6 text-cloud-accent" />
            <span className="text-white font-semibold">
              {isOpen ? 'Close Terminal' : 'Open Terminal'}
            </span>
          </motion.button>
        </motion.div>

        {/* Terminal Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mt-8 max-w-4xl mx-auto"
            >
              <div className="glass-dark rounded-xl overflow-hidden border border-cloud-accent/30">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-black/50 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cloud-accent" />
                    <span className="text-sm text-gray-400">cloud-terminal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Minimize className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                    <Maximize2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                    <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" onClick={() => setIsOpen(false)} />
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-4 font-mono text-sm h-80 overflow-y-auto bg-black/80">
                  {output.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`mb-2 ${
                        line.type === 'command' 
                          ? 'text-cloud-accent' 
                          : line.type === 'error' 
                          ? 'text-red-400' 
                          : 'text-gray-300'
                      }`}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  
                  {/* Input line */}
                  <form onSubmit={handleCommand} className="flex items-center mt-4">
                    <span className="text-cloud-accent mr-2">$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-white caret-cloud-accent"
                      placeholder="Type a command..."
                    />
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick command buttons */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {['whoami', 'skills', 'status', 'help'].map((cmd) => (
              <motion.button
                key={cmd}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsOpen(true)
                  setTimeout(() => {
                    setInput(cmd)
                    if (inputRef.current) {
                      inputRef.current.focus()
                    }
                  }, 100)
                }}
                className="px-4 py-2 glass rounded-lg text-sm text-gray-300 hover:text-cloud-accent hover:bg-white/10 transition-all"
              >
                {cmd}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
