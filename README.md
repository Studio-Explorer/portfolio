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

### Update Personal Information

1. **Hero Section**: Update name and tagline in `src/components/Hero.tsx`
2. **About Section**: Modify introduction and statistics in `src/components/About.tsx`
3. **Projects**: Add your real projects in `src/components/Projects.tsx`
4. **GitHub**: Update GitHub data in `src/components/GitHubActivity.tsx`
5. **Contact**: Update contact information in `src/components/Contact.tsx`
6. **Certifications**: Add your certifications in `src/components/Certifications.tsx`
7. **Learning Journey**: Update your timeline in `src/components/LearningJourney.tsx`

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

Modify skills data in `src/components/SkillsDashboard.tsx` and `src/components/TechStack.tsx`

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
