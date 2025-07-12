
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com', label: 'YouTube' },
];

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="pt-16 pb-8 relative overflow-hidden bg-black">
      {/* Wave background lines inspired by the reference image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="wave-lines"></div>
      </div>
      
      {/* Background accents with enhanced animation */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-stalight-primary/5 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-stalight-blue/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-stalight-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '-3s' }}></div>
      
      {/* 3D floating elements with enhanced animation */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 glass-card rounded-xl animate-float-slow transform rotate-12" style={{ animationDelay: '-1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 glass-card rounded-xl animate-float-reverse transform -rotate-12" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-10 h-10 glass-card rounded-lg animate-float transform-style-3d" style={{ animationDelay: '-2.5s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-12">
          {/* Company info */}
          <div className="scroll-reveal-item opacity-0 translate-y-10" style={{ transitionDelay: '0.1s' }}>
            <div className="mb-8 flex justify-center">
              <a href="#home" className="flex items-center" onClick={(e) => handleLinkClick(e, '#home')}>
                <span className="text-3xl lg:text-4xl font-bold font-poppins text-gradient-primary">Stalight</span>
                <span className="ml-2 text-2xl lg:text-3xl font-light font-poppins text-white">Technology</span>
              </a>
            </div>
            <p className="text-white/70 mb-8 text-center max-w-2xl">
              Empowering educators and students with cutting-edge technology solutions for a brighter, more interconnected future of learning.
            </p>
            <div className="flex space-x-6 justify-center">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  onClick={(e) => handleLinkClick(e, social.href)}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-stalight-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(155,135,245,0.4)] group"
                  aria-label={social.label}
                >
                  <span className="transform transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>© {new Date().getFullYear()} Stalight Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
