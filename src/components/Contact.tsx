'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, FileText, Send, MapPin, Phone, Twitter, Instagram } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'laxmikant@example.com',
      href: 'mailto:laxmikant@example.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/laxmikant',
      href: 'https://linkedin.com/in/laxmikant',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@laxmikant',
      href: 'https://github.com/laxmikant',
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download PDF',
      href: '/resume.pdf',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-cloud-darker">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cloud-accent bg-clip-text text-transparent">
            Let's Build Something Scalable
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on cloud infrastructure and DevOps projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-4 mb-8">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:glow-blue transition-all group"
                >
                  <div className="w-12 h-12 bg-cloud-accent/20 rounded-lg flex items-center justify-center group-hover:bg-cloud-accent/30 transition-colors">
                    <link.icon className="w-6 h-6 text-cloud-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{link.label}</div>
                    <div className="text-white font-medium">{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-cloud-accent" />
                <span className="text-white">Location</span>
              </div>
              <p className="text-gray-400">Available for remote opportunities worldwide</p>
              
              <div className="flex items-center gap-3 mt-4 mb-4">
                <Phone className="w-5 h-5 text-cloud-accent" />
                <span className="text-white">Response Time</span>
              </div>
              <p className="text-gray-400">Usually within 24 hours</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-cloud-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-cloud-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-cloud-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cloud-accent text-cloud-dark font-semibold rounded-lg hover:scale-105 transition-transform"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Prefer to reach out directly?</p>
          <a
            href="mailto:laxmikant@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl hover:bg-white/10 transition-colors"
          >
            <Mail className="w-5 h-5 text-cloud-accent" />
            <span className="text-white font-semibold">laxmikant@example.com</span>
          </a>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/yourusername', hoverColor: 'group-hover:text-white' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', hoverColor: 'group-hover:text-blue-400' },
                { icon: Mail, label: 'Email', href: 'mailto:laxmikant@example.com', hoverColor: 'group-hover:text-cloud-accent' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/yourusername', hoverColor: 'group-hover:text-cyan-400' },
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/yourusername', hoverColor: 'group-hover:text-pink-400' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center gap-2 p-4 glass rounded-xl transition-all group"
                >
                  <social.icon className={`w-8 h-8 text-gray-400 ${social.hoverColor} transition-colors`} />
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{social.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Available for remote opportunities worldwide. Let's build something amazing together! ☁️
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
