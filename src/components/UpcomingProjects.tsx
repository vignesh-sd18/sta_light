
import React, { useState, useRef, useEffect } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Brain, Headset, Gamepad2, Bot, Monitor, Smartphone, Route, PenTool } from 'lucide-react';

const projects = [
  {
    icon: <Brain className="h-10 w-10 text-stalight-primary" />,
    title: "AI-Driven Curriculum Planning",
    description: "AI-driven tools for creating and optimizing educational curriculums.",
  },
  {
    icon: <Headset className="h-10 w-10 text-stalight-primary" />,
    title: "Virtual Reality Classrooms",
    description: "Immersive virtual reality classrooms for enhanced learning experiences.",
  },
  {
    icon: <Gamepad2 className="h-10 w-10 text-stalight-primary" />,
    title: "Gamified Learning Platform",
    description: "A platform that gamifies the learning process to increase student engagement.",
  },
  {
    icon: <Bot className="h-10 w-10 text-stalight-primary" />,
    title: "AI Tutoring System",
    description: "An AI-driven tutoring system that provides personalized learning experiences.",
  },
  {
    icon: <Monitor className="h-10 w-10 text-stalight-primary" />,
    title: "Smart Classrooms",
    description: "Classrooms equipped with smart technology for interactive learning.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-stalight-primary" />,
    title: "Augmented Reality Learning",
    description: "AR-based learning tools for immersive educational experiences.",
  },
  {
    icon: <Route className="h-10 w-10 text-stalight-primary" />,
    title: "Adaptive Learning Pathways",
    description: "Personalized learning paths that adapt to each student's learning style and pace.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-stalight-primary" />,
    title: "AI-Powered Assessment Tools",
    description: "Advanced assessment tools that use AI to provide instant feedback and insights.",
  }
];

const UpcomingProjects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 768) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(4);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!isHovered) {
      const autoSlideInterval = setInterval(() => {
        nextSlide();
      }, 5000);
      
      return () => clearInterval(autoSlideInterval);
    }
  }, [currentSlide, totalSlides, isHovered]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-stalight-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-stalight-blue/10 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-stalight-accent/10 blur-3xl animate-pulse-glow"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/3 right-1/3 w-20 h-20 glass-card rounded-xl animate-float transform rotate-12" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 glass-card rounded-xl animate-float transform -rotate-12" style={{ animationDelay: '-4s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            Upcoming Projects
          </h2>
          <p className="text-xl text-white/80">
            Discover our cutting-edge innovations in educational technology currently in development
          </p>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation buttons */}
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-stalight-dark/50 hover:bg-stalight-primary/30 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-stalight-dark/50 hover:bg-stalight-primary/30 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
          
          {/* Carousel container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden mx-12"
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Group projects into slides */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex flex-wrap justify-center gap-6">
                  {projects.slice(
                    slideIndex * itemsPerSlide, 
                    (slideIndex + 1) * itemsPerSlide
                  ).map((project, projectIndex) => (
                    <GlassmorphicCard 
                      key={projectIndex}
                      className="flex-1 min-w-[250px] max-w-[300px] text-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] group"
                    >
                      <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-stalight-light">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 font-poppins text-white">
                        {project.title}
                      </h3>
                      <p className="text-white/70 transform transition-opacity duration-300 group-hover:text-white/90">
                        {project.description}
                      </p>
                      <div className="h-1 w-0 bg-gradient-to-r from-stalight-primary to-stalight-blue mt-4 mx-auto group-hover:w-20 transition-all duration-500"></div>
                    </GlassmorphicCard>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-stalight-primary w-6 shadow-[0_0_10px_rgba(155,135,245,0.7)]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
