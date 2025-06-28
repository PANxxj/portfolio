# 🚀 Pankaj Sahu - Full Stack Developer Portfolio

A cutting-edge, interactive portfolio website built with **Vite**, **React.js**, **Three.js**, and **Tailwind CSS** featuring stunning 3D effects, matrix animations, and terminal aesthetics.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF)
![Three.js](https://img.shields.io/badge/Three.js-0.158.0-000000)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC)

## ✨ Features

### 🎨 **Visual Excellence**
- **Matrix Code Rain Effect** - Authentic hacker-style background animation
- **3D Interactive Elements** - Floating tech stack visualization with Three.js
- **Terminal Aesthetics** - Professional developer workspace theme
- **Neon Glow Effects** - Cyberpunk-inspired visual elements
- **Smooth Animations** - Engaging user experience with CSS transitions

### ⚡ **Performance**
- **Vite-Powered** - Lightning-fast development and build times
- **Optimized Bundle** - Code splitting and lazy loading
- **Responsive Design** - Flawless experience across all devices
- **SEO Optimized** - Meta tags and semantic HTML

### 🛠️ **Technology Stack**

```json
{
  "frontend": ["React 18", "Vite 5", "Three.js", "Tailwind CSS"],
  "icons": ["Lucide React"],
  "fonts": ["Inter", "JetBrains Mono"],
  "deployment": ["Vercel", "Netlify", "GitHub Pages"]
}
```

## 🚀 **Quick Start**

### Prerequisites
- Node.js 14.18+ or 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PANxxj/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 **Responsive Breakpoints**

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Laptop**: 1024px - 1439px
- **Desktop**: 1440px+

## 🎯 **Sections Overview**

### 🏠 **Hero Section**
- Interactive terminal window with syntax highlighting
- 3D floating tech objects with orbital animations
- Professional introduction with call-to-action buttons
- Real-time performance metrics

### 👨‍💻 **About Section**
- Code-styled developer profile
- Achievement metrics dashboard
- Technology stack visualization
- Professional background story

### 🚀 **Projects Section**
- Enterprise-grade project showcase
- Terminal-style project cards
- Live demo and source code links
- Technology stack tags
- Performance metrics

### 💼 **Skills Section**
- Animated progress bars
- Technology categorization
- Interactive skill cards
- Experience level indicators

### 📞 **Contact Section**
- JSON-formatted contact information
- Professional contact form
- Social media integration
- Availability status

## 🛠️ **Customization Guide**

### Personal Information
```javascript
// Update in src/Portfolio.jsx
const personalInfo = {
  name: "Your Name",
  email: "your.email@domain.com",
  phone: "+1234567890",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile"
};
```

### Projects
```javascript
// Add your projects
const projects = [
  {
    title: 'Your Project',
    description: 'Project description...',
    tech: ['React', 'Node.js', 'MongoDB'],
    live: 'https://your-project.com',
    github: 'https://github.com/yourusername/project',
    featured: true,
    type: 'Full-Stack App',
    complexity: 'Enterprise'
  }
];
```

### Skills
```javascript
// Update your skills
const skills = [
  {
    name: 'Your Skill',
    level: 90,
    category: 'Frontend',
    tech: ['React', 'Vue.js', 'Angular'],
    color: 'from-blue-400 to-cyan-500'
  }
];
```

## 📦 **Build & Deployment**

### Development
```bash
npm run dev          # Start dev server at http://localhost:3000
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## 🎨 **Theme Customization**

The portfolio uses Tailwind CSS with custom themes. You can modify colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'matrix-green': '#00ff41',
      'cyber-blue': '#00d4ff',
      'neon-pink': '#ff1493',
    }
  }
}
```

## 🔧 **Development Scripts**

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0"
}
```

## 📈 **Performance Metrics**

- **Lighthouse Score**: 95+
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <2.5s
- **Bundle Size**: <500KB gzipped

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- [Three.js](https://threejs.org/) for 3D graphics
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Vite](https://vitejs.dev/) for blazing fast build tool

---

<div align="center">

**Built with ❤️ by [Pankaj Sahu](https://github.com/PANxxj)**

[Portfolio](https://pankaj-sahu.dev) • [LinkedIn](https://linkedin.com/in/pankaj-sahu-8859a020a) • [GitHub](https://github.com/PANxxj)

</div>
