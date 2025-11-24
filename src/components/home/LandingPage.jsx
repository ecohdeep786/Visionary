import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Brain,
  Target,
  Award,
  TrendingUp,
  Video,
  MessageSquare,
  FileText,
  Users,
  BarChart,
  Calendar,
  GraduationCap,
  Briefcase,
  Heart,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  const videoRef = useRef(null);
  const videoSrc = '/assets/background_hero_video.mp4';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {videoSrc && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSrc}
            poster="/assets/background_hero_poster.svg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-20">
        <div className="max-w-4xl">
          {/* Top Badge */}
          <div className="mb-8 inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full text-sm font-medium text-gray-900 shadow-sm transition-shadow hover:shadow-md cursor-default">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span style={{ fontFamily: 'var(--ui-font)' }}>Visionary for Education</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-tight text-[#202124] mb-6 -ml-1 tracking-tight whitespace-nowrap"
            style={{ 
              fontFamily: 'var(--ui-font)',
              fontWeight: 450, 
              letterSpacing: '-0.03em' 
            }}
          >
            Learn with{" "}
            <span className="relative inline-block perspective-1000">
              <motion.span
                className="inline-block text-blue-600 font-medium origin-center"
                initial={{ rotateX: 90, opacity: 0, y: 50 }}
                animate={{ rotateX: 0, opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 10,
                  transition: { duration: 0.2 }
                }}
              >
                3D visuals
              </motion.span>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-[#5f6368] mb-10 max-w-2xl leading-relaxed"
            style={{ 
              fontFamily: 'var(--ui-font)',
              fontWeight: 400 
            }}
          >
            Master any subject or skill with 3D visuals and 24/7 AI support, designed for every student, teacher, and family.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#202124] text-white text-[17px] font-medium hover:bg-[#3c4043] transition-colors"
              style={{ fontFamily: 'var(--ui-font)' }}
            >
              Start free now
            </button>

            <button 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#f1f3f4] text-[#202124] text-[17px] font-medium hover:bg-[#e8eaed] transition-colors"
              style={{ fontFamily: 'var(--ui-font)' }}
            >
              Explore more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PERSONA GRID SECTION
// ============================================================================
function PersonaGridSection() {
  const personas = [
    {
      title: "For Students",
      tagline: "Master every exam",
      description: "JEE, NEET, UPSC prep with AI-powered visual learning",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80",
      color: "#4285F4",
      path: "Students",
    },
    {
      title: "For Educators",
      tagline: "Teach smarter",
      description: "Create engaging lessons and track student progress",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80",
      color: "#34A853",
      path: "Educators",
    },
    {
      title: "For Professionals",
      tagline: "Upskill faster",
      description: "Learn in-demand skills without career breaks",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
      color: "#FBBC04",
      path: "Professionals",
    },
    {
      title: "For Parents",
      tagline: "Stay connected",
      description: "Track your child's learning journey and progress",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop&q=80",
      color: "#EA4335",
      path: "Parents",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700">
              <span style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}>Who is Visionary for</span>
            </div>
          </div>

          <h2
            className="text-3xl md:text-5xl text-[#202124] mb-4 tracking-tight"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
          >
            Choose your path
          </h2>
          <p 
            className="text-lg text-[#5f6368] max-w-xl mx-auto"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
          >
            Personalized learning for every journey
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {personas.map((persona) => (
            <div key={persona.title}>
              <Link to={createPageUrl(persona.path)}>
                <div className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-[400px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={persona.image}
                      alt={persona.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <div className="mb-4">
                      <div 
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white mb-4"
                        style={{ backgroundColor: persona.color }}
                      >
                        {persona.tagline}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-medium text-white mb-3">
                      {persona.title}
                    </h3>
                    
                    <p className="text-lg text-white/90 mb-6">
                      {persona.description}
                    </p>

                    <div className="flex items-center gap-2 text-white group-hover:translate-x-1 transition-transform">
                      <span className="font-medium">Explore</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// LEARNING JOURNEY SECTION
// ============================================================================
function LearningJourneySection() {
  const steps = [
    {
      number: "01",
      title: "Sign up free",
      description: "Create your account in 30 seconds. No credit card needed.",
      icon: BookOpen,
      color: "#4285F4"
    },
    {
      number: "02",
      title: "Choose your goal",
      description: "Select JEE, NEET, UPSC, or any subject you want to master.",
      icon: Target,
      color: "#34A853"
    },
    {
      number: "03",
      title: "Start learning",
      description: "Watch 3D visualizations, practice questions, get instant AI help.",
      icon: Sparkles,
      color: "#FBBC04"
    },
    {
      number: "04",
      title: "Track progress",
      description: "See your improvement daily with detailed analytics and insights.",
      icon: TrendingUp,
      color: "#EA4335"
    },
    {
      number: "05",
      title: "Achieve success",
      description: "Crack your exam with confidence. Join thousands of successful students.",
      icon: Award,
      color: "#4285F4"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Blur White Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Centered */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-block px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700">
              <span style={{ fontFamily: '"Product Sans", "Google Sans", Roboto, Arial, sans-serif' }}>Your learning journey</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-[#202124] mb-4 tracking-tight"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
          >
            Your learning journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-[#5f6368] max-w-2xl mx-auto"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
          >
            5 simple steps to mastery
          </motion.p>
        </div>

        {/* Steps Timeline */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                  <div className="text-sm font-medium text-gray-600 mb-2">{step.number}</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gray-300"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// AUTO-ROTATING CAROUSEL SECTION
// ============================================================================
function AutoRotatingCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      chip: "Students",
      icon: GraduationCap,
      title: "Master every exam with confidence",
      description: "Get 24×7 AI mentor support for JEE, NEET, UPSC prep. Learn with 3D visuals, practice unlimited tests, and track your progress daily.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop&q=80",
      color: "#4285F4"
    },
    {
      chip: "Teachers",
      icon: Users,
      title: "Teach smarter with AI assistance",
      description: "Get 24×7 support for lesson planning, create engaging 3D content, track student progress, and manage assignments effortlessly.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&q=80",
      color: "#34A853"
    },
    {
      chip: "Professionals",
      icon: Briefcase,
      title: "Upskill without career breaks",
      description: "Access 24×7 career guidance, learn job-ready skills with interactive courses, get certified, and receive placement support.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80",
      color: "#FBBC04"
    },
    {
      chip: "Parents",
      icon: Heart,
      title: "Track your child's learning journey",
      description: "Monitor progress 24×7, get instant alerts on performance, communicate with teachers, and ensure your child's safe online learning.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop&q=80",
      color: "#EA4335"
    }
  ];

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  const activeFeature = features[activeIndex];

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Centered */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-[#202124] mb-4 tracking-tight"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
          >
            For everyone, everywhere
          </motion.h2>
        </div>

        {/* Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-12 flex flex-col justify-center">
                <div 
                  className="inline-block w-fit px-4 py-2 rounded-full text-sm font-medium text-white mb-6"
                  style={{ backgroundColor: activeFeature.color }}
                >
                  {activeFeature.chip}
                </div>

                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                  {activeFeature.title}
                </h3>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {activeFeature.description}
                </p>

                {/* Dot Indicators */}
                <div className="flex items-center gap-3">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeIndex ? 'bg-gray-900 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ============================================================================
// CONNECTED APPS SECTION
// ============================================================================
function ConnectedAppsSection() {
  const outerApps = [
    { name: "Learn", icon: BookOpen, color: "#4285F4", angle: 25 },
    { name: "Videos", icon: Video, color: "#EA4335", angle: 110 },
    { name: "AI Mentor", icon: MessageSquare, color: "#FBBC04", angle: 195 },
    { name: "Notes", icon: FileText, color: "#34A853", angle: 290 }
  ];

  const innerApps = [
    { name: "Tests", icon: Award, color: "#4285F4", angle: 60 },
    { name: "Community", icon: Users, color: "#EA4335", angle: 150 },
    { name: "Analytics", icon: BarChart, color: "#FBBC04", angle: 230 },
    { name: "Schedule", icon: Calendar, color: "#34A853", angle: 320 }
  ];

  const getPosition = (angle, radius) => {
    const radian = ((angle - 90) * Math.PI) / 180;
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian)
    };
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Chip */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-block px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700">
              <span style={{ fontFamily: '"Product Sans", "Google Sans", Roboto, Arial, sans-serif' }}>One platform</span>
            </div>
          </motion.div>
        </div>

        {/* Circular Layout */}
        <div className="relative flex items-center justify-center min-h-[600px] md:min-h-[800px] lg:min-h-[1000px]">
          {/* Outer Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute"
          >
            <div 
              className="rounded-full border-2 border-dashed border-gray-300"
              style={{
                width: 'clamp(400px, 80vw, 800px)',
                height: 'clamp(400px, 80vw, 800px)'
              }}
            />
          </motion.div>

          {/* Inner Circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute"
          >
            <div 
              className="rounded-full border-2 border-dashed border-gray-300"
              style={{
                width: 'clamp(240px, 48vw, 480px)',
                height: 'clamp(240px, 48vw, 480px)'
              }}
            />
          </motion.div>

          {/* Center Logo */}
          <div className="absolute w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center z-20 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          {/* Outer Apps */}
          {outerApps.map((app, index) => {
            const IconComponent = app.icon;
            const mobilePos = getPosition(app.angle, 200);
            const tabletPos = getPosition(app.angle, 300);
            const desktopPos = getPosition(app.angle, 400);

            return (
              <motion.div
                key={`outer-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="absolute w-20 h-20 flex items-center justify-center"
                style={{
                  transform: `translate(${mobilePos.x}px, ${mobilePos.y}px)`,
                  '@md': { transform: `translate(${tabletPos.x}px, ${tabletPos.y}px)` },
                  '@lg': { transform: `translate(${desktopPos.x}px, ${desktopPos.y}px)` }
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md cursor-pointer"
                  style={{ backgroundColor: `${app.color}15` }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: app.color }} />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Inner Apps */}
          {innerApps.map((app, index) => {
            const IconComponent = app.icon;
            const mobilePos = getPosition(app.angle, 120);
            const tabletPos = getPosition(app.angle, 180);
            const desktopPos = getPosition(app.angle, 240);

            return (
              <motion.div
                key={`inner-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="absolute w-20 h-20 flex items-center justify-center"
                style={{
                  transform: `translate(${mobilePos.x}px, ${mobilePos.y}px)`,
                  '@md': { transform: `translate(${tabletPos.x}px, ${tabletPos.y}px)` },
                  '@lg': { transform: `translate(${desktopPos.x}px, ${desktopPos.y}px)` }
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md cursor-pointer"
                  style={{ backgroundColor: `${app.color}15` }}
                >
                  <IconComponent className="w-6 h-6" style={{ color: app.color }} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// AI MENTOR SECTION
// ============================================================================
function AIMentorSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-blue-600 text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8">
            <Sparkles className="w-10 h-10" strokeWidth={2} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl mb-6 leading-tight tracking-tight"
          style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
        >
          Your personal AI mentor<br />available 24×7
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg mb-10 leading-relaxed opacity-90 max-w-2xl mx-auto"
          style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
        >
          No more waiting days for doubt clearing. Get instant help in your language via text, voice, or video — like having a personal tutor in your pocket.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white text-blue-600 hover:bg-blue-50 text-lg font-medium px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
        >
          Try AI mentor free
        </motion.button>
      </div>
    </section>
  );
}

// ============================================================================
// HOW IT WORKS SECTION
// ============================================================================
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Learn visually",
      description: "Complex concepts become clear through interactive 3D visualizations",
    },
    {
      number: "02",
      title: "Practice & master",
      description: "Unlimited practice with instant AI feedback and step-by-step solutions",
    },
    {
      number: "03",
      title: "Get AI help anytime",
      description: "24×7 mentor support via text, voice, or video — in your language",
    },
    {
      number: "04",
      title: "Track progress",
      description: "Detailed analytics and personalized insights to improve faster",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl text-gray-900 mb-6"
            style={{ fontWeight: 500, letterSpacing: '-0.02em' }}
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Simple, proven method used by thousands of successful students
          </motion.p>
        </div>

        {/* Steps - Vertical Layout */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-8">
                <div className="text-5xl font-medium text-blue-600 opacity-40 flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SOCIAL PROOF SECTION
// ============================================================================
function SocialProofSection() {
  const testimonials = [
    {
      text: "Visionary's 3D visualizations made chemistry so easy! I cracked NEET with 680 marks.",
      author: "Priya Sharma",
      role: "NEET 2024 Qualifier",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
      rating: 5
    },
    {
      text: "As a teacher, this platform saved me hours. My students are more engaged than ever.",
      author: "Rajesh Kumar",
      role: "Physics Teacher, Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
      rating: 5
    },
    {
      text: "Learning data science while working full-time seemed impossible. Visionary made it possible!",
      author: "Amit Patel",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-lg font-medium text-gray-900">4.9/5 from 10,000+ reviews</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl text-gray-900 mb-4"
            style={{ fontWeight: 500 }}
          >
            Loved by learners across India
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <Quote className="w-10 h-10 text-blue-600 mb-6 opacity-50" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================
function CTASectionComponent() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-[#202124] mb-6 tracking-tight"
          style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
        >
          Ready to get started?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#5f6368] mb-10 leading-relaxed"
          style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
        >
          Join thousands already learning smarter with Visionary
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-4 rounded-full transition-all shadow-sm hover:shadow-md"
        >
          Get started — it's free
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-sm text-gray-500"
        >
          No credit card required
        </motion.p>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN LANDING PAGE COMPONENT
// ============================================================================
export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <PersonaGridSection />
      <LearningJourneySection />
      <AutoRotatingCarouselSection />
      <ConnectedAppsSection />
      <AIMentorSection />
      <HowItWorksSection />
      <SocialProofSection />
      <CTASectionComponent />
    </div>
  );
}
