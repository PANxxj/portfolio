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
  TrendingUp,
  Play,
  ChevronRight,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const PremiumPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const navRefs = useRef({});

  // Update underline position when active section changes
  useEffect(() => {
    const updateUnderlinePosition = () => {
      if (navRefs.current[activeSection] && isLoaded) {
        const activeNavItem = navRefs.current[activeSection];
        const navContainer = activeNavItem.parentElement;
        if (navContainer) {
          const containerRect = navContainer.getBoundingClientRect();
          const itemRect = activeNavItem.getBoundingClientRect();
          
          setUnderlineStyle({
            width: itemRect.width,
            left: itemRect.left - containerRect.left
          });
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateUnderlinePosition, 100);
    
    // Recalculate on window resize
    window.addEventListener('resize', updateUnderlinePosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateUnderlinePosition);
    };
  }, [activeSection, isLoaded]);

  // Enhanced section detection with scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Get all section elements
      const sections = [
        { ref: heroRef, id: 'home' },
        { ref: aboutRef, id: 'about' },
        { ref: skillsRef, id: 'skills' },
        { ref: projectsRef, id: 'projects' },
        { ref: experienceRef, id: 'experience' },
        { ref: contactRef, id: 'contact' }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial check
    handleScroll();
    
    // Simulate loading
    setTimeout(() => setIsLoaded(true), 800);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  const scrollToSection = (sectionId) => {
    const refs = { home: heroRef, about: aboutRef, skills: skillsRef, projects: projectsRef, experience: experienceRef, contact: contactRef };
    refs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { 
      name: 'Backend Development', 
      level: 95, 
      icon: <Server className="w-8 h-8" />, 
      tech: ['Django', 'Node.js', 'FastAPI', 'Express'],
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Frontend Development', 
      level: 92, 
      icon: <Code2 className="w-8 h-8" />, 
      tech: ['React', 'Vue.js', 'TypeScript', 'Next.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    
    { 
      name: 'Database Design', 
      level: 88, 
      icon: <Database className="w-8 h-8" />, 
      tech: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
      color: 'from-purple-500 to-violet-500'
    },
    { 
      name: 'Cloud & DevOps', 
      level: 85, 
      icon: <Cloud className="w-8 h-8" />, 
      tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Mobile Development', 
      level: 80, 
      icon: <Smartphone className="w-8 h-8" />, 
      tech: ['React Native', 'Flutter', 'PWA'],
      color: 'from-pink-500 to-rose-500'
    },
    { 
      name: 'System Architecture', 
      level: 87, 
      icon: <Globe className="w-8 h-8" />, 
      tech: ['Microservices', 'API Design', 'Scalability'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const projects = [
    {
      title: 'Covesto Trading Platform',
      subtitle: 'Enterprise FinTech Solution',
      description: 'Revolutionary virtual trading platform with real-time market data, advanced analytics, and microservices architecture. Built to handle 10,000+ concurrent users with 99.9% uptime.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&auto=format',
      tech: ['Django', 'Vue.js', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS'],
      live: 'https://www.covesto.in',
      github: 'https://github.com/PANxxj',
      featured: true,
      metrics: { users: '2 Lakhs+', uptime: '99.9%', performance: '+40%' },
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'AdviceBazaar Platform',
      subtitle: 'Global Consultation Network',
      description: 'Sophisticated consultation platform connecting experts with clients worldwide. Features HD video calls, secure payments, and intelligent scheduling across time zones.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&auto=format',
      tech: ['Django', 'Nuxt.js', 'PostgreSQL', 'WebRTC', 'AWS', 'Stripe'],
      live: 'https://advicebazaar.com',
      github: 'https://github.com/PANxxj',
      featured: true,
      metrics: { users: '100K+', uptime: '99.5%', performance: '+35%' },
      gradient: 'from-green-600 to-teal-600'
    },
    {
      title: 'Clarity CRM Suite',
      subtitle: 'AI-Powered Business Intelligence',
      description: 'Next-generation CRM with predictive analytics, automated workflows, and machine learning-driven insights for modern sales teams.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
      tech: ['Django', 'React', 'TensorFlow', 'PostgreSQL', 'Elasticsearch'],
      live: '#',
      github: 'https://github.com/PANxxj',
      featured: false,
      metrics: { users: '50K+', uptime: '99.2%', performance: '+30%' },
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Poppos Retail System',
      subtitle: 'Modern Point of Sale',
      description: 'Cloud-native POS system with real-time inventory management, advanced analytics, and seamless multi-location synchronization.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format',
      tech: ['Django', 'React', 'GraphQL', 'PostgreSQL', 'PWA'],
      live: 'https://poppos.io',
      github: 'https://github.com/PANxxj',
      featured: false,
      metrics: { users: '30K+', uptime: '99.8%', performance: '+25%' },
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const experience = [
    {
      title: 'Senior Software Developer',
      company: 'CodeNicely',
      period: 'Jul 2024 - Present',
      location: 'Remote',
      description: 'Leading full-stack development initiatives and architecting scalable solutions for enterprise clients.',
      achievements: [
        'Increased system scalability by 40% through microservices implementation',
        'Reduced API response times by 35% via advanced optimization techniques',
        'Led cross-functional team of 5 developers in delivering critical features',
        'Implemented CI/CD pipelines reducing deployment time by 70%'
      ],
      technologies: ['Django', 'React.js', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
      type: 'current'
    },
    {
      title: 'Fullstack Developer',
      company: 'NABLE INVENT SOLUTION',
      period: 'Mar 2023 - Jun 2024',
      location: 'India',
      description: 'Developed and maintained high-performance web applications with focus on user experience and scalability.',
      achievements: [
        'Built robust RESTful APIs serving 2,000+ concurrent users',
        'Developed responsive frontends with modern JavaScript frameworks',
        'Integrated secure payment gateways and third-party services',
        'Improved overall application performance by 50%'
      ],
      technologies: ['Django', 'Vue.js', 'AWS', 'PostgreSQL', 'Stripe'],
      type: 'previous'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-white/80 text-lg font-medium">Loading Experience...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900 opacity-50" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Pankaj Sahu
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12 relative">
              {/* Smooth Animated Underline */}
              <div 
                className="absolute -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: `${underlineStyle.width}px`,
                  left: `${underlineStyle.left}px`,
                  opacity: activeSection ? 1 : 0,
                  transform: 'translateZ(0)', // Force hardware acceleration
                }}
              />
              
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
                  ref={(el) => navRefs.current[item.id] = el}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-500 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-6 bg-black/95 backdrop-blur-xl border-t border-white/10">
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
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-white/10 border-l-4 border-blue-500'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div 
            className="space-y-12 transform transition-all duration-1000"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: isLoaded ? 1 : 0
            }}
          >
            <div className="space-y-8 mt-1.5">
             

              <div className="space-y-6">
                <p className="text-xl text-gray-300 font-medium">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                    Pankaj
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Sahu
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
                  Fullstack Developer crafting exceptional digital experiences 
                  with precision and innovation.
                </p>
              </div>
               <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                Available for new opportunities
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center space-x-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Let's collaborate</span>
              </button>
              
              <button className="px-8 py-4 border border-white/20 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center space-x-3 group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 max-w-4xl mx-auto">
              {[
                { value: '50+', label: 'Projects Delivered', icon: <Star className="w-6 h-6" /> },
                { value: '2.5+', label: 'Years Experience', icon: <Calendar className="w-6 h-6" /> },
                { value: '15K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
                { value: '99.9%', label: 'System Uptime', icon: <TrendingUp className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-110 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex justify-center mb-4 text-blue-400 group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-6 text-blue-300">My Journey</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  I'm a passionate fullstack developer with 2.5+ years of experience creating scalable, 
                  high-performance web applications. My expertise spans across modern frontend frameworks, 
                  robust backend systems, and cloud infrastructure.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I believe in writing clean, maintainable code and creating exceptional user experiences. 
                  Every project is an opportunity to push boundaries and deliver something extraordinary.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-xl">
                  <Award className="w-10 h-10 text-blue-400 mb-4" />
                  <h4 className="font-semibold text-white mb-2">Quality Focused</h4>
                  <p className="text-gray-400 text-sm">Clean, scalable architecture</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-xl">
                  <Zap className="w-10 h-10 text-purple-400 mb-4" />
                  <h4 className="font-semibold text-white mb-2">Performance</h4>
                  <p className="text-gray-400 text-sm">Optimized for speed</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-8 text-purple-300">Quick Facts</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Bilaspur, Chhattisgarh, India</p>
                      <p className="text-gray-400 text-sm">Available for remote work</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">ps789875@gmail.com</p>
                      <p className="text-gray-400 text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">+91 7898756364</p>
                      <p className="text-gray-400 text-sm">WhatsApp available</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-semibold mb-4 text-blue-300">Core Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {['React.js', 'Django', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'].map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20 backdrop-blur-sm">
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
      <section ref={skillsRef} id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 bg-gradient-to-br ${skill.color} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <p className="text-gray-400">Expert Level</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                    <div
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1500 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {skill.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20 mr-2 mb-2 backdrop-blur-sm"
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
      <section ref={projectsRef} id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {project.featured && (
                      <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-semibold rounded-full">
                        ⭐ Featured
                      </div>
                    )}
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <p className="text-blue-400 font-medium mb-2">{project.subtitle}</p>
                    <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-6 py-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{project.metrics.users}</div>
                      <div className="text-gray-400 text-sm">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{project.metrics.uptime}</div>
                      <div className="text-gray-400 text-sm">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{project.metrics.performance}</div>
                      <div className="text-gray-400 text-sm">Performance</div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors group"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>View Live</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                      <Github className="w-5 h-5" />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white">{exp.title}</h3>
                    <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <div className={`px-4 py-2 rounded-xl border font-medium ${
                      exp.type === 'current' 
                        ? 'bg-green-500/20 border-green-500/30 text-green-300' 
                        : 'bg-blue-500/20 border-blue-500/30 text-blue-300'
                    }`}>
                      {exp.type === 'current' ? 'Current Position' : 'Previous Role'}
                    </div>
                    <div className="text-gray-300 font-medium">{exp.period}</div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">{exp.description}</p>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 flex items-start">
                          <ChevronRight className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                      <Code2 className="w-5 h-5 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20 backdrop-blur-sm"
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
      <section ref={contactRef} id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-gray-300 text-xl mt-8 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create something exceptional together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-8 text-blue-300">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">ps789875@gmail.com</p>
                      <p className="text-gray-400">Send me an email</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">+91 7898756364</p>
                      <p className="text-gray-400">Call or WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Bilaspur, Chhattisgarh</p>
                      <p className="text-gray-400">India (UTC+5:30)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-blue-300 font-medium mb-6">Connect on social platforms</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/PANxxj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-500/20 transition-colors group border border-white/20 backdrop-blur-sm"
                    >
                      <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pankaj-sahu-8859a020a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-500/20 transition-colors group border border-white/20 backdrop-blur-sm"
                    >
                      <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-8 text-purple-300">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-300 font-medium mb-3">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-300 font-medium mb-3">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-blue-300 font-medium mb-3">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-300 font-medium mb-3">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  onClick={() => alert('Thank you for your message! 🚀 I\'ll get back to you within 24 hours.')}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 group shadow-lg"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pankaj Sahu
            </span>
          </div>
          <p className="text-gray-400">
            © 2024 Pankaj Sahu. Crafted with precision and passion. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PremiumPortfolio;