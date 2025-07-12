import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  MessageCircle,
  Bell,
  Home,
  Info,
  Download
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}

const DockItem: React.FC<DockItemProps> = ({
  icon,
  label,
  onClick,
  active = false
}) => {
  return (
    <button 
      className={cn(
        "dock-item",
        active && "bg-stalight-primary/20"
      )}
      onClick={onClick}
      data-tooltip={label}
    >
      {icon}
    </button>
  );
};

const FloatingDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'products',
        'neuro-campus',
        'blog',
        'contact'
      ];

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="floating-dock animate-fade-in">
      <DockItem 
        icon={<Home className="h-6 w-6 text-white" />} 
        label="Home"
        onClick={() => scrollToSection('home')}
        active={activeSection === 'home'}
      />
      <DockItem 
        icon={<Info className="h-6 w-6 text-white" />} 
        label="About"
        onClick={() => scrollToSection('about')}
        active={activeSection === 'about'}
      />
      <DockItem 
        icon={<LayoutDashboard className="h-6 w-6 text-white" />} 
        label="Products"
        onClick={() => scrollToSection('products')}
        active={activeSection === 'products'}
      />
      <DockItem 
        icon={<Download className="h-6 w-6 text-white" />} 
        label="NEURO CAMPUS"
        onClick={() => scrollToSection('neuro-campus')}
        active={activeSection === 'neuro-campus'}
      />
      <DockItem 
        icon={<BookOpen className="h-6 w-6 text-white" />} 
        label="Blog"
        onClick={() => scrollToSection('blog')}
        active={activeSection === 'blog'}
      />
      <DockItem 
        icon={<MessageCircle className="h-6 w-6 text-white" />} 
        label="Contact"
        onClick={() => scrollToSection('contact')}
        active={activeSection === 'contact'}
      />
    </div>
  );
};

export default FloatingDock;
