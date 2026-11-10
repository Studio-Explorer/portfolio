'use client'

import { motion } from 'framer-motion'
import { Github, Star, GitFork, Activity, Code2, ExternalLink, TrendingUp } from 'lucide-react'
import { githubStats, topLanguages, recentRepos, githubProfileUrl, contributionDays } from '@/data/github'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function GitHubActivity() {
  const stats = [
    { label: 'Repositories', value: githubStats.repositories, icon: Github },
    { label: 'Stars', value: githubStats.stars, icon: Star },
    { label: 'Forks', value: githubStats.forks, icon: GitFork },
    { label: 'Contributions', value: githubStats.contributions, icon: Activity },
  ]

  return (
    <section id="github-activity" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="GitHub"
          title="GitHub Activity"
          subtitle="Dynamic overview of repositories, contributions, and coding activity"
        />

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 text-center cursor-pointer"
            >
              <stat.icon className="w-8 h-8 text-cloud-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Top languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cloud-accent" />
              Top Languages
            </h3>

            <div className="space-y-4">
              {topLanguages.map((lang, index) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{lang.name}</span>
                    <span className="text-cloud-accent">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${lang.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent repositories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cloud-accent" />
              Recent Repositories
            </h3>

            <div className="space-y-4">
              {recentRepos.map((repo, index) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="block p-4 glass-dark rounded-lg cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold group-hover:text-cloud-accent transition-colors">
                      {repo.name}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cloud-accent transition-colors" />
                  </div>

                  <p className="text-sm text-gray-400 mb-3">{repo.description}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code2 className="w-3 h-3" />
                      {repo.language}
                    </span>
                    <span>{repo.updatedAt}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contribution activity graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-cloud-accent" />
            Contribution Activity
          </h3>

          <div className="grid grid-cols-7 gap-2">
            {contributionDays.map((day) => (
              <div key={day} className="text-center">
                <div className="text-xs text-gray-500 mb-2">{day}</div>
                <div className="space-y-1">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="h-8 rounded-sm"
                      style={{
                        backgroundColor: [
                          'rgba(0, 212, 255, 0.1)',
                          'rgba(0, 212, 255, 0.3)',
                          'rgba(0, 212, 255, 0.5)',
                          'rgba(0, 212, 255, 0.8)',
                        ][(contributionDays.indexOf(day) * 4 + i) % 4],
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
            <span>Less</span>
            <div className="flex gap-1">
              {[0.1, 0.3, 0.5, 0.8].map((opacity) => (
                <div
                  key={opacity}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: `rgba(0, 212, 255, ${opacity})` }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg hover:bg-white/10 transition-colors"
          >
            <Github className="w-5 h-5 text-cloud-accent" />
            <span className="text-white font-semibold">View Full GitHub Profile</span>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
