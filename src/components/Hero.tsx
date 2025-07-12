import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import GlassmorphicButton from './GlassmorphicButton';

const Hero = () => {
  const heroRef = useRef(null);
  const floatingElementsRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const parallaxEffect = () => {
      const scrollValue = window.scrollY;

      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollValue * 0.3}px)`;
        heroRef.current.style.opacity = `${1 - scrollValue * 0.002}`;
      }

      if (floatingElementsRef.current) {
        const elements = floatingElementsRef.current.children;
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          const speed = 0.05 + i * 0.02;
          const yPos = -scrollValue * speed;
          const xPos = i % 2 === 0 ? scrollValue * 0.1 : -scrollValue * 0.1;
          const rotation = scrollValue * (i % 2 === 0 ? 0.05 : -0.05);
          element.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) rotate(${rotation}deg)`;
        }
      }

      if (waveRef.current) {
        waveRef.current.style.transform = `translateY(${scrollValue * 0.2}px)`;
      }
    };

    const initScrollReveal = () => {
      const revealItems = document.querySelectorAll('.scroll-reveal-item');

      const revealCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      };

      const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      });

      revealItems.forEach((item) => {
        revealObserver.observe(item);
      });
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          parallaxEffect();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    initScrollReveal();

    const progressiveReveal = () => {
      const elements = document.querySelectorAll('.progressive-reveal');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('revealed');
        }, 200 * index);
      });
    };

    progressiveReveal();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/90"></div>

      <div ref={waveRef} className="absolute inset-0 pointer-events-none overflow-hidden wavy-background">
        <div className="wave-lines"></div>
        <div className="wave-curved"></div>
      </div>

      <div className="absolute inset-0 perspective-[1000px]">
        <div ref={floatingElementsRef} className="relative h-full w-full">
          <div className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float parallax-element" data-speed="0.3"></div>
          <div className="absolute bottom-1/4 right-1/5 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-float parallax-element" data-speed="0.5" style={{ animationDelay: '-3s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-primary/10 blur-3xl animate-float parallax-element" data-speed="0.2" style={{ animationDelay: '-1.5s' }}></div>

          <div className="absolute top-1/3 left-1/3 w-16 h-16 glass-card rounded-xl animate-float transform rotate-12 transform-style-3d scroll-transform"
               data-transform="rotate" data-speed="0.1" data-max-value="45" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 glass-card rounded-xl animate-float transform -rotate-12 transform-style-3d scroll-transform"
               data-transform="skew" data-speed="0.05" data-max-value="15" style={{ animationDelay: '-4s' }}></div>

          <div className="absolute top-2/3 left-1/4 w-24 h-24 glass-card rounded-full animate-float-slow backdrop-blur-lg bg-white/5 border border-white/20 shadow-xl scroll-zoom"
               data-scale-rate="0.001" data-max-scale="1.3" style={{ animationDelay: '-1s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-28 h-28 animate-rotate-slow transform-style-3d scroll-transform"
               data-transform="rotate" data-speed="0.2" data-max-value="360">
            <div className="absolute inset-0 glass-pyramid transform-style-3d"></div>
          </div>
          <div className="absolute bottom-1/5 left-1/3 w-32 h-32 animate-float-reverse transform-style-3d scroll-layer"
               data-speed="-0.1" data-direction="horizontal" style={{ animationDelay: '-2.5s' }}>
            <div className="absolute inset-0 glass-cube transform-style-3d"></div>
          </div>

          <div className="absolute top-1/2 right-1/5 w-36 h-36 animate-float-slow transform-style-3d scroll-layer"
               data-speed="0.15" data-direction="vertical" style={{ animationDelay: '-3.5s' }}>
            <div className="absolute inset-0 glass-helix transform-style-3d"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/6 w-48 h-48 animate-pulse-glow transform-style-3d opacity-30 scroll-zoom"
               data-scale-rate="0.0005" data-max-scale="1.2">
            <div className="absolute inset-0 glass-sphere transform-style-3d"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto scroll-reveal-item">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-fade-in">
            Igniting Intelligence through Innovation
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto progressive-reveal backdrop-blur-sm p-4 rounded-lg bg-white/5">
            We build intelligent systems for campuses, safety, and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative progressive-reveal">
            <GlassmorphicButton
              onClick={() => scrollToSection('neuro-campus')}
              className="bg-primary text-white font-medium py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.7)] relative z-10"
              glowEffect={true}
            >
              <span className="relative z-10 font-bold text-white">Explore Neuro Campus</span>
              <ChevronRight className="ml-2 h-5 w-5 relative z-10" />
            </GlassmorphicButton>
            <GlassmorphicButton
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="hover:bg-white/10 text-white font-medium py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] relative z-10"
            >
              Contact Us
            </GlassmorphicButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          className="text-white/60 hover:text-white rounded-full p-2 hover:bg-white/5 transition-all duration-300 relative z-10"
          onClick={() => scrollToSection('about')}
        >
          <ChevronRight className="h-6 w-6 animate-pulse-soft" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
