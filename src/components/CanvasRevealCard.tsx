
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CanvasRevealCardProps {
  children: React.ReactNode;
  className?: string;
  imageSrc?: string;
  title?: string;
  onClick?: () => void;
  spotlight?: boolean;
}

const CanvasRevealCard: React.FC<CanvasRevealCardProps> = ({
  children,
  className,
  imageSrc,
  title,
  onClick,
  spotlight = true,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!spotlight) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div 
      ref={cardRef}
      className={cn(
        "canvas-reveal relative rounded-xl overflow-hidden transition-all duration-700 scroll-reveal-item",
        spotlight && "card-spotlight",
        isVisible && "animate-fade-in",
        className
      )}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={spotlight ? {
        '--x': `${position.x}px`,
        '--y': `${position.y}px`,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
      } as React.CSSProperties : {
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
      } as React.CSSProperties}
    >
      {imageSrc && (
        <div className="relative overflow-hidden group">
          <img 
            src={imageSrc} 
            alt={title || "Dashboard preview"} 
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`canvas-dots absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${isHovering ? 'active' : ''}`}></div>
          
          {/* Enhanced gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Add a glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br from-stalight-primary/30 to-stalight-blue/10 opacity-0 mix-blend-overlay transition-opacity duration-500 ${isHovering ? 'opacity-40' : ''}`}></div>
        </div>
      )}
      <div className="p-4 glass-card backdrop-blur-md bg-black/30 border-t border-white/10 transition-all duration-300 group-hover:bg-black/40">
        {title && (
          <h3 className="text-lg font-semibold mb-2 text-gradient-primary transition-all duration-300 group-hover:text-white">{title}</h3>
        )}
        <div className="transition-all duration-300 group-hover:translate-x-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CanvasRevealCard;
