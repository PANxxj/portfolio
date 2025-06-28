import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Menu, X, Sun, Moon, Code, Briefcase, User, Home, MessageCircle, Zap, Globe, Database } from 'lucide-react';
import * as THREE from 'three';
// import './index.css';

const Portfolio2 = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const heroCanvasRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const cubeRef = useRef(null);
  const sphereRef = useRef(null);
  const torusRef = useRef(null);
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    contact: useRef(null)
  };

  const skills = [
    { name: 'Python', level: 95, category: 'Backend', icon: '🐍' },
    { name: 'Django', level: 90, category: 'Backend', icon: '🌿' },
    { name: 'React.js', level: 88, category: 'Frontend', icon: '⚛️' },
    { name: 'JavaScript', level: 85, category: 'Frontend', icon: '📝' },
    { name: 'AWS', level: 80, category: 'Cloud', icon: '☁️' },
    { name: 'PostgreSQL', level: 85, category: 'Database', icon: '🗄️' },
    { name: 'Vue.js', level: 75, category: 'Frontend', icon: '💚' },
    { name: 'FastAPI', level: 80, category: 'Backend', icon: '⚡' }
  ];

  const projects = [
    {
      title: 'Covesto',
      description: 'Virtual trading platform with real-time market data for risk-free learning. Built with microservices architecture for scalability.',
      tech: ['Django', 'Vue.js', 'FastAPI', 'WebSockets', 'PostgreSQL', 'MongoDB'],
      live: 'https://www.covesto.in/trending/main',
      github: 'https://github.com/PANxxj',
      featured: true,
      color: 'from-cyan-400 to-blue-600'
    },
    {
      title: 'AdviceBazaar',
      description: 'Platform connecting experts with clients for real-time consultations across multiple time zones.',
      tech: ['Django', 'Nuxt.js', 'PostgreSQL', 'AWS', 'RazorPay'],
      live: 'https://advicebazaar.com/',
      github: 'https://github.com/PANxxj',
      featured: true,
      color: 'from-purple-400 to-pink-600'
    },
    {
      title: 'Clarity CRM',
      description: 'Pre-sales CRM software for analyzing customer journey and business progress with advanced analytics.',
      tech: ['Django', 'React.js', 'Redux', 'PostgreSQL', 'Stripe'],
      live: '#',
      github: 'https://github.com/PANxxj',
      featured: false,
      color: 'from-green-400 to-cyan-600'
    },
    {
      title: 'Poppos',
      description: 'Modern point-of-sale system with inventory management and real-time analytics.',
      tech: ['Django', 'React.js', 'PostgreSQL', 'AWS'],
      live: 'https://poppos.io/',
      github: 'https://github.com/PANxxj',
      featured: false,
      color: 'from-pink-400 to-purple-600'
    }
  ];

  const experience = [
    {
      title: 'Software Developer',
      company: 'CodeNicely',
      period: 'Jul 2024 - Present',
      description: 'Increased scalability by 20% using microservices architecture. Improved API response times by 15% through optimized database queries and caching strategies.',
      achievements: [
        'Deployed automated CI/CD pipelines saving 60% deployment time',
        'Implemented microservices reducing system complexity',
        'Optimized database queries improving performance by 15%'
      ],
      icon: '🚀'
    },
    {
      title: 'Fullstack Developer',
      company: 'NABLE INVENT SOLUTION',
      period: 'Mar 2023 - Jun 2024',
      description: 'Spearheaded design and implementation of robust RESTful APIs using Django. Deployed and managed applications on AWS platform.',
      achievements: [
        'Built scalable RESTful APIs serving 1000+ concurrent users',
        'Deployed applications on AWS with EC2 and S3 integration',
        'Developed responsive frontends with React and Vue.js'
      ],
      icon: '💻'
    }
  ];

  // Three.js Hero Scene
  useEffect(() => {
    if (!heroCanvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: heroCanvasRef.current, 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create geometries
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);

    // Create materials with neon colors
    const cubeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    
    const sphereMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    
    const torusMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });

    // Create meshes
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);

    cube.position.set(-3, 0, 0);
    sphere.position.set(3, 0, 0);
    torus.position.set(0, 2, -2);

    scene.add(cube);
    scene.add(sphere);
    scene.add(torus);

    cubeRef.current = cube;
    sphereRef.current = sphere;
    torusRef.current = torus;

    camera.position.z = 8;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
      }

      if (sphereRef.current) {
        sphereRef.current.rotation.y += 0.02;
      }

      if (torusRef.current) {
        torusRef.current.rotation.x += 0.01;
        torusRef.current.rotation.z += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  // Particle System
  useEffect(() => {
    if (!particleCanvasRef.current) return;

    const canvas = particleCanvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${Math.random() * 60 + 180}, 100%, 60%)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 0.1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#00ffff';
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });

      if (cameraRef.current) {
        cameraRef.current.position.x = mousePosition.x * 0.5;
        cameraRef.current.position.y = mousePosition.y * 0.5;
        cameraRef.current.lookAt(0, 0, 0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mousePosition]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observers = [];
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, key]));
              setActiveSection(key);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const isVisible = (section) => visibleSections.has(section);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Particle Background */}
      <canvas
        ref={particleCanvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #16213e 100%)' }}
      />

      {/* 3D Hero Canvas */}
      <canvas
        ref={heroCanvasRef}
        className="fixed inset-0 pointer-events-none z-10"
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse">
              &lt;PankajSahu /&gt;
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: <Home size={16} /> },
                { id: 'about', label: 'About', icon: <User size={16} /> },
                { id: 'projects', label: 'Projects', icon: <Code size={16} /> },
                { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
                { id: 'contact', label: 'Contact', icon: <MessageCircle size={16} /> }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 transition-all duration-300 hover:text-cyan-400 hover:scale-110 relative group ${
                    activeSection === item.id ? 'text-cyan-400 scale-110' : 'text-gray-300'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <div className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 border border-cyan-500/30"
              >
                {isDarkMode ? <Sun size={20} className="text-cyan-400" /> : <Moon size={20} className="text-purple-400" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-500/30"
              >
                {isMenuOpen ? <X size={24} className="text-cyan-400" /> : <Menu size={24} className="text-cyan-400" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden backdrop-blur-md ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-2 pb-3 space-y-1 bg-black/40 border-t border-cyan-500/20">
            {[
              { id: 'home', label: 'Home', icon: <Home size={16} /> },
              { id: 'about', label: 'About', icon: <User size={16} /> },
              { id: 'projects', label: 'Projects', icon: <Code size={16} /> },
              { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
              { id: 'contact', label: 'Contact', icon: <MessageCircle size={16} /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-3 w-full text-left px-3 py-2 hover:bg-cyan-500/20 rounded-lg transition-colors text-gray-300 hover:text-cyan-400"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.home} id="home" className="min-h-screen flex items-center justify-center pt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8">
            <div className={`transition-all duration-1000 ${
              isVisible('home') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="inline-block p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 mb-6">
                <Code size={48} className="text-cyan-400" />
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                <span className="block text-gray-300 text-2xl md:text-3xl mb-4 font-light">Hello, I'm</span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300% bg-animate">
                  Pankaj Sahu
                </span>
              </h1>
              
              <div className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
                <span className="typing-effect">Full Stack Developer</span>
              </div>
              
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
                Crafting the future with code • Building scalable web applications with cutting-edge technologies • 
                Specializing in <span className="text-cyan-400">Django</span>, <span className="text-purple-400">React.js</span>, 
                and <span className="text-pink-400">Cloud Solutions</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 relative overflow-hidden"
                >
                  <span className="relative z-10">Let's Connect</span>
                  <Zap className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <a
                  href="/media/updated_resume (2).pdf"
                  download
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center space-x-2 group backdrop-blur-sm"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} id="about" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible('about') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer pushing the boundaries of web technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible('about') ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  My Journey
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  I'm a passionate Full Stack Developer with 2.5+ years of experience creating innovative web solutions. 
                  My journey began with a fascination for technology and has evolved into expertise in modern frameworks and cloud technologies.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  I specialize in building scalable applications that not only meet technical requirements but also deliver 
                  exceptional user experiences with cutting-edge 3D interfaces and immersive designs.
                </p>
                
                <div className="flex items-center space-x-4 text-cyan-400">
                  <Globe className="w-6 h-6 animate-spin-slow" />
                  <span className="text-lg font-semibold">Building the Future, One Line at a Time</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '50+', label: 'Projects', icon: '🚀' },
                  { number: '2.5+', label: 'Years XP', icon: '⚡' },
                  { number: '20+', label: 'Clients', icon: '👥' },
                  { number: '15%', label: 'Performance', icon: '📈' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900/50 to-cyan-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 delay-500 ${
              isVisible('about') ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: 'Full Stack Mastery',
                  description: 'Expert in both frontend and backend technologies with 2.5+ years of experience building scalable web applications.',
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Performance Optimization',
                  description: 'Track record of optimizing applications, improving API response times by 15% through advanced caching strategies.',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: 'Cloud Architecture',
                  description: 'Specialized in AWS services, microservices architecture, and CI/CD pipelines for scalable deployments.',
                  color: 'from-green-500 to-cyan-600'
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: 'Data Engineering',
                  description: 'Proficient in database optimization, real-time data processing, and building robust data pipelines.',
                  color: 'from-pink-500 to-purple-600'
                }
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${card.color} rounded-lg text-white group-hover:scale-110 transition-transform`}>
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} id="projects" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible('projects') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions showcasing cutting-edge development and design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] cursor-pointer ${
                  isVisible('projects') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-2xl font-bold relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                    <span className="relative z-10 group-hover:scale-110 transition-transform">{project.title}</span>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                        ⭐ Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cyan-500/20 backdrop-blur-sm rounded-full hover:bg-cyan-500/40 transition-all border border-cyan-500/50 hover:scale-110"
                      >
                        <ExternalLink size={20} className="text-cyan-400" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-purple-500/20 backdrop-blur-sm rounded-full hover:bg-purple-500/40 transition-all border border-purple-500/50 hover:scale-110"
                      >
                        <Github size={20} className="text-purple-400" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30 hover:border-cyan-500/60 hover:scale-105 transition-all cursor-default backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transform hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section ref={sectionRefs.experience} id="experience" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible('experience') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience Timeline */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible('experience') ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <h3 className="text-3xl font-bold mb-8 text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Work Experience
              </h3>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-600"></div>
                
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-16 pb-12 last:pb-0">
                    <div className="absolute left-3 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full border-4 border-black shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
                    <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 group">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl">{exp.icon}</span>
                        <div className="text-sm text-cyan-400 font-semibold">{exp.period}</div>
                      </div>
                      <h4 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">{exp.title}</h4>
                      <div className="text-purple-400 mb-3 font-medium">{exp.company}</div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible('experience') ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <h3 className="text-3xl font-bold mb-8 text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Technical Arsenal
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm border border-cyan-500/20 p-4 rounded-xl hover:border-cyan-500/40 hover:scale-105 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <div>
                        <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{skill.name}</div>
                        <div className="text-xs text-gray-400">{skill.category}</div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                          style={{ 
                            width: isVisible('experience') ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                      <div className="text-xs text-cyan-400 font-semibold mt-1 text-right">{skill.level}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} id="contact" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible('contact') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to build something extraordinary together? Let's make it happen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible('contact') ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Ready to bring your vision to life? I'm passionate about creating innovative solutions that push boundaries. 
                  Let's collaborate and build something amazing together!
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <MapPin size={24} />,
                      title: 'Location',
                      content: 'Bilaspur, Chhattisgarh, India',
                      color: 'from-red-500 to-pink-500'
                    },
                    {
                      icon: <Mail size={24} />,
                      title: 'Email',
                      content: 'ps789875@gmail.com',
                      color: 'from-cyan-500 to-blue-500'
                    },
                    {
                      icon: <Phone size={24} />,
                      title: 'Phone',
                      content: '+91 7898756364',
                      color: 'from-green-500 to-emerald-500'
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 group cursor-pointer">
                      <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]`}>
                        {contact.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors">{contact.title}</div>
                        <div className="text-gray-300">{contact.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-8">
                  {[
                    { href: 'https://github.com/PANxxj', icon: <Github size={24} />, color: 'hover:bg-gray-600' },
                    { href: 'https://www.linkedin.com/in/pankaj-sahu-8859a020a/', icon: <Linkedin size={24} />, color: 'hover:bg-blue-600' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-gradient-to-br from-gray-800/50 to-purple-800/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl flex items-center justify-center ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-gray-300 hover:border-cyan-500/60`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible('contact') ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-cyan-400">Name</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-cyan-400">Email</label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-cyan-400">Subject</label>
                    <input
                      type="text"
                      placeholder="Project Discussion"
                      className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-cyan-400">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  <button
                    onClick={() => alert('Message sent! 🚀 (Demo only)')}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden"
                  >
                    <span className="relative z-10">Launch Project</span>
                    <Zap className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/20 backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Pankaj Sahu • Crafted with <span className="text-red-500">❤️</span> using React, Three.js & Tailwind CSS
          </p>
          <div className="mt-2 flex justify-center space-x-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-400 text-sm">Available for new projects</span>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .bg-animate {
          animation: gradient 3s ease infinite;
        }
        
        .bg-300\\% {
          background-size: 300% 300%;
        }
        
        .typing-effect {
          overflow: hidden;
          border-right: 2px solid #06b6d4;
          white-space: nowrap;
          animation: typing 3s steps(20, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #06b6d4; }
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio2;