# Cloud Engineer Portfolio

A modern, interactive portfolio website for a Cloud Engineer featuring AWS, DevOps, and container orchestration expertise.

## 🚀 Features

### Hero Section
- Full-screen cinematic hero with animated cloud/network background
- Floating particles and data lines animation
- Professional tagline and "Currently building..." status indicator
- CTA buttons: View Projects, Download Resume, Contact Me
- Floating AWS/cloud technology badges

### About Me
- Short professional introduction
- "What I do" cards with hover effects
- Animated statistics counter (Cloud Projects, Technologies, Certifications, GitHub Repos)

### Tech Stack
- Interactive technology wall with 10+ technologies
- Hover effects with lift, glow, and descriptions
- Technologies: AWS, Docker, Kubernetes, Linux, Python, Terraform, Git/GitHub, CI/CD, Networking, Cybersecurity

### Featured Cloud Projects
- Visually impressive project cards with:
  - Project preview and AWS architecture icons
  - Problem → Solution format
  - GitHub and Live Demo buttons
  - Interactive architecture flow modal
  - Click components to reveal information

### Cloud Architecture Lab
- Interactive cloud playground
- Click AWS components (EC2, VPC, S3, RDS, IAM, CloudWatch) to learn about them
- Animated component details panel
- Typical architecture flow visualization

### Skills Dashboard
- Cloud monitoring dashboard style layout
- Animated progress bars with terminal effects
- Additional metrics (Projects, Certifications, Years Exp, Contributions)
- Real-time dashboard aesthetic

### Interactive Terminal
- Functional terminal component
- Type commands: `whoami`, `skills`, `status`, `projects`, `contact`, `help`, `clear`
- Quick command buttons for easy access
- Authentic terminal UI with macOS-style window controls

### Certifications
- Expandable certification cards
- 3D hover effects
- Shows: Certificate, Issuer, Date, Skills learned, Verification link
- Certifications: AWS Solutions Architect, AWS Developer, CKA, Docker, LFCS

### GitHub Activity
- Dynamic GitHub overview
- Stats: Repositories, Stars, Forks, Contributions
- Top languages with progress bars
- Recent repositories with activity
- Contribution activity graph
- Link to full GitHub profile

### Learning Journey
- Timeline of professional growth
- Scroll-triggered animations
- Milestones from 2024 to present
- "What's Next" section with upcoming learning goals

### Contact Section
- Modern contact form
- Quick contact links (Email, LinkedIn, GitHub, Resume)
- Location and response time information
- Professional "Let's build something scalable" messaging

### Cloud Command Center
- Signature feature - floating command button
- Fullscreen interactive dashboard
- Multiple tabs: Overview, Projects, Skills, GitHub, Resume
- Real-time status indicators
- System monitoring aesthetic

## 🎨 Design Features

- **Dark futuristic theme** with black/charcoal background
- **Glassmorphism** effects throughout
- **AWS-inspired infrastructure visuals**
- **Smooth animations and transitions**
- **Scroll-triggered animations**
- **Magnetic buttons** and cursor-following effects
- **Card hover effects** with lift and glow
- **Micro-interactions** on all interactive elements
- **Animated counters** and progress bars
- **Parallax effects** in hero section
- **Staggered content reveal**
- **Keyboard navigation** support
- **Reduced-motion accessibility**

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎯 Customization

### Project Structure

```
src/
├── app/                  # Next.js app router (layout, page, globals.css)
├── components/
│   ├── layout/           # Navbar
│   ├── sections/         # Page sections (Hero, About, Projects, ...)
│   ├── ui/               # Shared primitives (SectionHeader, FadeIn)
│   └── widgets/          # Floating widgets (CommandCenter, Terminal)
├── data/                 # All portfolio content — edit these to customize
├── lib/                  # Utilities (cn, playClickSound)
└── types/                # Shared TypeScript interfaces
```

### Update Personal Information

All content lives in `src/data/` — update these files and every section reflects the change:

1. **Personal info, links, stats**: `src/data/site.ts`
2. **Hero name/tagline**: `src/data/site.ts` (used by `sections/Hero.tsx`)
3. **About bio & cards**: `src/data/about.ts`
4. **Tech stack**: `src/data/tech-stack.ts`
5. **Projects**: `src/data/projects.ts`
6. **Skills**: `src/data/skills.ts`
7. **Certifications**: `src/data/certifications.ts`
8. **GitHub activity**: `src/data/github.ts`
9. **Learning journey**: `src/data/journey.ts`
10. **Contact links**: `src/data/site.ts` + `src/components/sections/Contact.tsx`
11. **Navigation**: `src/data/navigation.ts`
12. **Architecture Lab**: `src/data/architecture.ts`

> **Note:** Project `github`/`demo` URLs and GitHub stats in `src/data/` are placeholders — replace them with your real links before deploying.

### Update Colors

Modify the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  cloud: {
    dark: '#0a0a0f',
    darker: '#050508',
    accent: '#00d4ff',
    secondary: '#0099cc',
    muted: '#4a5568',
  }
}
```

### Update Skills

Modify skills data in `src/data/skills.ts` and `src/data/tech-stack.ts`

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway

## 📝 Notes

- The portfolio uses placeholder data - replace with your actual information
- Update GitHub links, email addresses, and social media profiles
- Add real project screenshots and live demo URLs
- Customize the color scheme to match your personal brand
- The terminal component is fully functional - add more commands as needed

## 🎓 Learning Resources

This portfolio demonstrates:
- Modern React/Next.js development
- Advanced CSS animations with Framer Motion
- Responsive design with Tailwind CSS
- Component-based architecture
- TypeScript best practices
- Performance optimization
- Accessibility considerations

## 📄 License

This project is open source and available for personal and commercial use.

---

Built with ☁️ by a Cloud Engineer
