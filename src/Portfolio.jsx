import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  Smartphone, 
  Globe, 
  Zap,
  Calendar,
  MapPin,
  Phone,
  Send,
  Menu,
  X,
  Download,
  Star,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observers = [];
    const sections = [
      { ref: heroRef, id: 'home' },
      { ref: aboutRef, id: 'about' },
      { ref: skillsRef, id: 'skills' },
      { ref: projectsRef, id: 'projects' },
      { ref: experienceRef, id: 'experience' },
      { ref: contactRef, id: 'contact' }
    ];

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const scrollToSection = (sectionId) => {
    const refs = { home: heroRef, about: aboutRef, skills: skillsRef, projects: projectsRef, experience: experienceRef, contact: contactRef };
    refs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Frontend Development', level: 95, category: 'Frontend', icon: <Code2 className="w-6 h-6" />, tech: ['React', 'Vue.js', 'TypeScript', 'Next.js'] },
    { name: 'Backend Development', level: 92, category: 'Backend', icon: <Server className="w-6 h-6" />, tech: ['Django', 'Node.js', 'FastAPI', 'Express'] },
    { name: 'Database Design', level: 88, category: 'Database', icon: <Database className="w-6 h-6" />, tech: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
    { name: 'Cloud & DevOps', level: 85, category: 'Cloud', icon: <Cloud className="w-6 h-6" />, tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
    { name: 'Mobile Development', level: 80, category: 'Mobile', icon: <Smartphone className="w-6 h-6" />, tech: ['React Native', 'Flutter', 'PWA'] },
    { name: 'System Design', level: 87, category: 'Architecture', icon: <Globe className="w-6 h-6" />, tech: ['Microservices', 'API Design', 'Scalability'] }
  ];

  const projects = [
    {
      title: 'Covesto Trading Platform',
      description: 'Enterprise-grade virtual trading platform with real-time market data, advanced analytics, and microservices architecture. Handles 10K+ concurrent users.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      tech: ['Django', 'Vue.js', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS'],
      live: 'https://www.covesto.in',
      github: 'https://github.com/PANxxj',
      featured: true,
      metrics: { users: '10K+', uptime: '99.9%', performance: '+40%' }
    },
    {
      title: 'AdviceBazaar Platform',
      description: 'Global consultation platform connecting experts with clients. Features video calls, payment integration, and automated scheduling across time zones.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
      tech: ['Django', 'Nuxt.js', 'PostgreSQL', 'WebRTC', 'AWS', 'Stripe'],
      live: 'https://advicebazaar.com',
      github: 'https://github.com/PANxxj',
      featured: true,
      metrics: { users: '5K+', uptime: '99.5%', performance: '+35%' }
    },
    {
      title: 'Clarity CRM System',
      description: 'AI-powered CRM with predictive analytics, customer journey mapping, and automated workflow management for sales teams.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['Django', 'React', 'TensorFlow', 'PostgreSQL', 'Elasticsearch'],
      live: '#',
      github: 'https://github.com/PANxxj',
      featured: false,
      metrics: { users: '2K+', uptime: '99.2%', performance: '+30%' }
    },
    {
      title: 'Poppos POS System',
      description: 'Modern cloud-based point-of-sale system with inventory management, real-time analytics, and multi-location support.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['Django', 'React', 'GraphQL', 'PostgreSQL', 'PWA'],
      live: 'https://poppos.io',
      github: 'https://github.com/PANxxj',
      featured: false,
      metrics: { users: '1K+', uptime: '99.8%', performance: '+25%' }
    }
  ];

  const experience = [
    {
      title: 'Senior Software Developer',
      company: 'CodeNicely',
      period: 'Jul 2024 - Present',
      description: 'Leading full-stack development initiatives and implementing scalable microservices architecture.',
      achievements: [
        'Increased system scalability by 40% through microservices implementation',
        'Reduced API response times by 35% via database optimization',
        'Led team of 5 developers in building enterprise applications',
        'Implemented CI/CD pipelines reducing deployment time by 70%'
      ],
      technologies: ['Django', 'React.js', 'AWS', 'Docker', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Fullstack Developer',
      company: 'NABLE INVENT SOLUTION',
      period: 'Mar 2023 - Jun 2024',
      description: 'Developed and maintained full-stack applications focusing on performance and user experience.',
      achievements: [
        'Built RESTful APIs serving 2000+ concurrent users',
        'Developed responsive frontends with modern frameworks',
        'Integrated payment gateways and third-party services',
        'Improved application performance by 50%'
      ],
      technologies: ['Django', 'Vue.js', 'AWS', 'PostgreSQL', 'Stripe']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.15) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg" width="20" height="20" xmlns="http://www.w3.org/2000/svg" id="grid" width="20" height="20" patternUnits="userSpaceOnUse" d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" width="100%25" height="100%25" fill="url(%23grid)"  />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-900/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pankaj Sahu
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-500/20 text-purple-300 shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div 
            className="space-y-8 transform transition-all duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="inline-block animate-pulse">
              <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
                ✨ Available for new opportunities
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-gray-300 text-lg md:text-xl mb-4 font-normal">Hello, I'm</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Pankaj Sahu
              </span>
              <span className="block text-xl md:text-3xl mt-4 text-gray-400 font-light">
                Fullstack Developer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I craft digital experiences with clean code and innovative solutions. 
              Specializing in modern web technologies and scalable architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Get In Touch</span>
              </button>
              
              <button className="px-8 py-4 border border-purple-500/50 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm flex items-center space-x-2 group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-2xl mx-auto">
              {[
                { value: '50+', label: 'Projects', icon: <Star className="w-5 h-5" /> },
                { value: '2.5+', label: 'Years', icon: <Calendar className="w-5 h-5" /> },
                { value: '15K+', label: 'Users', icon: <Users className="w-5 h-5" /> },
                { value: '99.9%', label: 'Uptime', icon: <TrendingUp className="w-5 h-5" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-2 text-purple-400 group-hover:text-pink-400 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate fullstack developer with 2.5+ years of experience building scalable web applications. 
                  I love turning complex problems into simple, beautiful designs and bringing ideas to life through code.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My expertise spans across modern frontend frameworks, robust backend systems, and cloud infrastructure. 
                  I'm constantly learning and adapting to new technologies to deliver cutting-edge solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                  <Award className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-semibold text-white">Quality Focused</h4>
                  <p className="text-gray-400 text-sm">Clean, maintainable code</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                  <Zap className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-semibold text-white">Performance</h4>
                  <p className="text-gray-400 text-sm">Optimized applications</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
                <h3 className="text-xl font-bold mb-6 text-purple-300">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Bilaspur, Chhattisgarh, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">ps789875@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">+91 7898756364</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-semibold mb-4 text-purple-300">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Django', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl text-purple-400 group-hover:text-pink-400 transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                    <p className="text-gray-400 text-sm">{skill.category}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                {project.featured && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                    ⭐ Featured Project
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-purple-400" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-500/20 rounded-lg hover:bg-gray-500/30 transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-400" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-purple-400 font-semibold">{project.metrics.users}</div>
                      <div className="text-gray-400 text-xs">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-semibold">{project.metrics.uptime}</div>
                      <div className="text-gray-400 text-xs">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-semibold">{project.metrics.performance}</div>
                      <div className="text-gray-400 text-xs">Performance</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-purple-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-lg border border-purple-500/30 mt-4 lg:mt-0">
                    <span className="text-purple-300 font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-purple-300 font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Let's Connect</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">ps789875@gmail.com</p>
                      <p className="text-gray-400 text-sm">Send me an email</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">+91 7898756364</p>
                      <p className="text-gray-400 text-sm">Call or WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Bilaspur, Chhattisgarh</p>
                      <p className="text-gray-400 text-sm">India (UTC+5:30)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-purple-300 font-medium mb-4">Follow me on social media</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/PANxxj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-xl hover:bg-purple-500/20 transition-colors group"
                    >
                      <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pankaj-sahu-8859a020a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-xl hover:bg-blue-500/20 transition-colors group"
                    >
                      <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Send Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-purple-300 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-300 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-purple-300 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-300 font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  onClick={() => alert('Thank you! Your message has been sent. I\'ll get back to you soon! 🚀')}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Pankaj Sahu. Crafted with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;