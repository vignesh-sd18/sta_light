import React, { useEffect, useRef, useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: "AI-Powered Learning",
    description: "Our neural network algorithms adapt to each student's learning style and pace, creating a truly personalized educational experience."
  },
  {
    title: "Immersive Campus Experience",
    description: "Experience campus life in a fully digital environment with virtual classrooms, labs, and social spaces."
  },
  {
    title: "Blockchain Certification",
    description: "Every achievement is securely recorded and verifiable through our blockchain-based certification system."
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive analytics provide insights into student performance, engagement, and areas for improvement."
  }
];

const NeuroCampusReveal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const dotsRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    // Create dots for the Gemini effect
    if (svgRef.current) {
      const svg = svgRef.current;
      const width = svg.clientWidth;
      const height = svg.clientHeight;
      
      // Clear existing dots
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }
      
      // Create new dots
      dotsRef.current = [];
      const dotCount = 200;
      for (let i = 0; i < dotCount; i++) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", `${Math.random() * width}`);
        circle.setAttribute("cy", `${Math.random() * height}`);
        circle.setAttribute("r", `${Math.random() * 2 + 1}`);
        circle.setAttribute("fill", "#9b87f5");
        circle.setAttribute("opacity", `${Math.random() * 0.5 + 0.2}`);
        svg.appendChild(circle);
        dotsRef.current.push(circle);
      }
    }
    
    // Animate dots
    const animateDots = () => {
      if (!svgRef.current) return;
      
      const width = svgRef.current.clientWidth;
      const height = svgRef.current.clientHeight;
      
      dotsRef.current.forEach(dot => {
        const x = parseFloat(dot.getAttribute("cx") || "0");
        const y = parseFloat(dot.getAttribute("cy") || "0");
        
        // Random movement
        const newX = x + (Math.random() - 0.5) * 2;
        const newY = y + (Math.random() - 0.5) * 2;
        
        // Keep within bounds
        dot.setAttribute("cx", `${newX < 0 ? width : (newX > width ? 0 : newX)}`);
        dot.setAttribute("cy", `${newY < 0 ? height : (newY > height ? 0 : newY)}`);
      });
      
      requestAnimationFrame(animateDots);
    };
    
    const animation = requestAnimationFrame(animateDots);
    
    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollPercentage = 1 - Math.max(0, Math.min(1, rect.bottom / (rect.height + window.innerHeight)));
      const newIndex = Math.min(features.length - 1, Math.floor(scrollPercentage * features.length));
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
      
      if (containerRef.current) {
        const rotateX = scrollPercentage * 20 - 10;
        const rotateY = scrollPercentage * 20 - 10;
        containerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', handleScroll);
          } else {
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.current.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer.current && containerRef.current) {
        observer.current.unobserve(containerRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <section id="neuro-campus" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-stalight-dark">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="aurora-bg w-full h-full"></div>
      </div>
      
      {/* Gemini-style SVG effect */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <svg ref={svgRef} className="w-full h-full" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            Introducing NEURO CAMPUS
          </h2>
          <p className="text-xl text-white/80">
            The future of education technology, powered by AI and blockchain
          </p>
        </div>
        
        <div className="container-3d-scroll min-h-[80vh]">
          <div ref={containerRef} className="scroll-rotator w-full h-full py-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`scroll-content ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="flex flex-col md:flex-row gap-10 items-center justify-center h-full">
                  <div className="w-full md:w-1/2">
                    <GlassmorphicCard className="card-spotlight p-8 h-full">
                      <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-white/80">
                        {feature.description}
                      </p>
                      <div className="mt-6">
                        <button className="text-stalight-primary flex items-center text-lg transition-all hover:translate-x-2">
                          Learn more <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </GlassmorphicCard>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="canvas-reveal rounded-2xl overflow-hidden w-full max-w-md aspect-[4/3] card-spotlight">
                      <img 
                        src={`/lovable-uploads/photo-1461749280684-dccba630e2f6.avif`} 
                        alt={feature.title}
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                          e.currentTarget.src = `/lovable-uploads/e67c8bb8-4937-4d34-88a3-4057ffe0cf00.png`;
                        }}
                      />
                      <div className="canvas-dots absolute inset-0 opacity-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-stalight-primary w-12' : 'bg-white/30'
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    const scrollAmount = index * (containerRef.current?.clientHeight || 0) / features.length;
                    window.scrollTo({
                      top: (containerRef.current?.offsetTop || 0) + scrollAmount,
                      behavior: 'smooth'
                    });
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroCampusReveal;
