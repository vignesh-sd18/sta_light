
import React, { useEffect, useRef } from 'react';

const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Basic canvas setup with a fallback animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setDimensions = () => {
      if (canvas && ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setDimensions();
    window.addEventListener('resize', setDimensions);

    // Enhanced particle settings
    const particles: { 
      x: number; 
      y: number; 
      size: number; 
      speedX: number; 
      speedY: number; 
      color: string;
      alpha: number;
      pulse: number;
    }[] = [];
    
    const particleCount = 70; // Increased from 50
    
    // Create particles with enhanced properties
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3.5 + 0.5, // More varied sizes
        speedX: (Math.random() - 0.5) * 0.7, // Slightly faster
        speedY: (Math.random() - 0.5) * 0.7,
        color: `rgba(155, 135, 245, ${Math.random() * 0.7 + 0.3})`, // Brighter purple
        alpha: Math.random() * 0.7 + 0.3, // Variable opacity
        pulse: Math.random() * 0.02 + 0.01 // Pulse rate for size variation
      });
    }

    // Animation loop with enhanced effects
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles with pulsing effect
      particles.forEach(particle => {
        // Pulsing size effect
        particle.size += Math.sin(Date.now() * particle.pulse) * 0.05;
        
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position with slight acceleration
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary checking with edge glow
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
          particle.alpha = Math.random() * 0.7 + 0.3; // Randomize opacity on bounce
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
          particle.alpha = Math.random() * 0.7 + 0.3;
        }
      });
      
      // Draw connecting lines for nearby particles with enhanced glow
      ctx.globalAlpha = 0.5;
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          if (distance < 120) { // Increased connection distance
            ctx.strokeStyle = `rgba(155, 135, 245, ${0.3 * (1 - distance / 120)})`; // Brighter connections
            ctx.lineWidth = 0.6; // Slightly thicker
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      ctx.globalAlpha = 1;
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setDimensions);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default ThreeBackground;
