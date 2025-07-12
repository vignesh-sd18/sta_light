
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
  onClick?: () => void;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowEffect = false,
  onClick,
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6",
        hoverEffect && "glass-card-hover",
        glowEffect && "animate-pulse-glow",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
