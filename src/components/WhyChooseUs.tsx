import React from 'react';
import { Brain, Shield, Zap, Users, Clock, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI-First Approach",
      description: "We leverage cutting-edge AI technology to deliver intelligent, automated solutions that adapt to your needs."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Enterprise-Grade Security",
      description: "Our solutions are built with security at their core, ensuring your data and operations are always protected."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Scalable Architecture",
      description: "Our systems are designed to grow with your needs, from small institutions to large enterprises."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Support",
      description: "Our team of specialists provides comprehensive support and training to ensure smooth implementation."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Rapid Deployment",
      description: "Quick implementation and integration with existing systems to minimize disruption."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Proven Track Record",
      description: "Trusted by leading educational institutions and organizations across India."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-poppins text-gradient-primary">
              Why Choose Stalight Technology?
            </h2>
            <p className="text-xl text-white/80">
              Experience the difference with our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="glass-card p-6 rounded-xl transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-white/70">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 