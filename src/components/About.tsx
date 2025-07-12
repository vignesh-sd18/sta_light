import React from 'react';
import { Brain, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-poppins text-gradient-primary">
              About Stalight Technology
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Stalight Technology Pvt. Ltd. is an AI-first Indian startup focused on building scalable, intelligent, and secure systems across education, public safety, and developer automation.
            </p>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <p className="text-white/70 mb-2">Reg No: UDYAM-KR-03-0515698</p>
              <p className="text-white/70">Founded in Bengaluru by a passionate engineering team.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI + Automation Focused</h3>
              <p className="text-white/70">Cutting-edge AI solutions for modern challenges</p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-World Problem Solvers</h3>
              <p className="text-white/70">Practical solutions for everyday challenges</p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Future-Proof</h3>
              <p className="text-white/70">Built to scale with tomorrow's needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
