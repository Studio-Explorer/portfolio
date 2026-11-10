'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, FileText, Send, MapPin, Phone, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { site, profileLinks } from '@/data/site'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { ContactLink } from '@/types'

const SUBMIT_DELAY_MS = 1500
const SUCCESS_RESET_MS = 3000

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: wire up a real endpoint (e.g. /api/contact or a form service)
    await new Promise(resolve => setTimeout(resolve, SUBMIT_DELAY_MS))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), SUCCESS_RESET_MS)
  }

  const contactLinks: ContactLink[] = [
    {
      icon: Mail,
      label: 'Email',
      value: site.email,
      href: profileLinks.email,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: "Let's Connect",
      href: profileLinks.linkedin,
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Check My Code',
      href: profileLinks.github,
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Get My Resume',
      href: profileLinks.resume,
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const inputClasses =
    'w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-cloud-accent focus:outline-none transition-all duration-300'

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-cloud-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute w-96 h-96 bg-cloud-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          badge="Let's Connect"
          title="Let's Build Something Scalable"
          subtitle="Ready to collaborate on cloud infrastructure and DevOps projects"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-cloud-accent to-purple-500 rounded-full" />
              Get in Touch
            </h3>

            <div className="space-y-4 mb-8">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    x: 8,
                    boxShadow: '0 10px 30px rgba(0, 212, 255, 0.2)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-white/10 hover:border-cloud-accent/50 transition-all group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform relative z-10"
                    whileHover={{ rotate: 5 }}
                  >
                    <link.icon className="w-6 h-6 text-cloud-accent" />
                  </motion.div>
                  <div className="relative z-10">
                    <div className="text-sm text-gray-400 group-hover:text-cloud-accent transition-colors">{link.label}</div>
                    <div className="text-white font-medium group-hover:translate-x-1 transition-transform">{link.value}</div>
                  </div>
                  <motion.div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-cloud-accent" />
                  </motion.div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="glass rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 bg-cloud-accent/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MapPin className="w-5 h-5 text-cloud-accent" />
                </motion.div>
                <span className="text-white font-semibold">Location</span>
              </div>
              <p className="text-gray-400 ml-13">{site.location} ({site.locationNote})</p>

              <div className="flex items-center gap-3 mt-6 mb-4">
                <motion.div
                  className="w-10 h-10 bg-cloud-accent/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <Phone className="w-5 h-5 text-cloud-accent" />
                </motion.div>
                <span className="text-white font-semibold">Response Time</span>
              </div>
              <p className="text-gray-400 ml-13">{site.responseTime}</p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-white/10 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cloud-accent/5 to-purple-500/5 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-cloud-accent to-purple-500 rounded-full" />
                  Send a Message
                </h3>

                <div className="space-y-6">
                  {(['name', 'email', 'message'] as const).map((field, index) => {
                    const labels = { name: 'Name', email: 'Email', message: 'Message' }
                    const placeholders = {
                      name: 'Your name',
                      email: 'your@email.com',
                      message: 'Tell me about your project...',
                    }
                    const isTextarea = field === 'message'
                    const sharedProps = {
                      value: formData[field],
                      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                        setFormData({ ...formData, [field]: e.target.value }),
                      onFocus: () => setFocusedField(field),
                      onBlur: () => setFocusedField(null),
                      required: true,
                      className: `${inputClasses} ${isTextarea ? 'resize-none' : ''}`,
                      placeholder: placeholders[field],
                      animate: {
                        borderColor: focusedField === field ? 'rgba(0, 212, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: focusedField === field ? '0 0 20px rgba(0, 212, 255, 0.2)' : 'none'
                      },
                    }

                    return (
                      <motion.div
                        key={field}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <label className="block text-sm font-medium text-gray-400 mb-2">{labels[field]}</label>
                        {isTextarea ? (
                          <motion.textarea {...sharedProps} rows={5} />
                        ) : (
                          <motion.input
                            {...sharedProps}
                            type={field === 'email' ? 'email' : 'text'}
                          />
                        )}
                      </motion.div>
                    )
                  })}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-cloud-accent to-cloud-secondary text-cloud-dark font-semibold rounded-lg transition-all relative overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-cloud-dark border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}

                    {!isSubmitting && !isSubmitted && (
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0"
                        whileHover={{ opacity: 0.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.form>
          </motion.div>
        </div>

        {/* Direct contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Prefer to reach out directly?</p>
          <motion.a
            href={profileLinks.email}
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-xl border border-cloud-accent/30 hover:border-cloud-accent/60 transition-all group"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-10 h-10 bg-cloud-accent/20 rounded-lg flex items-center justify-center group-hover:bg-cloud-accent/30 transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Mail className="w-5 h-5 text-cloud-accent" />
            </motion.div>
            <span className="text-white font-semibold group-hover:text-cloud-accent transition-colors">
              {site.email}
            </span>
            <ArrowRight className="w-5 h-5 text-cloud-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
