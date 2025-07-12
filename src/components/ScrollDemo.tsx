
import React, { useEffect } from 'react';
import GlassmorphicCard from './GlassmorphicCard';

const ScrollDemo: React.FC = () => {
  useEffect(() => {
    // Initialize any component-specific animations here if needed
  }, []);

  return (
    <section id="scroll-demo" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-stalight-dark">
      <div className="container mx-auto px-4 mb-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            Experience Our Scroll Effects
          </h2>
          <p className="text-xl text-white/80">
            Scroll down to see our advanced animations and interactive effects in action
          </p>
        </div>
      </div>

      {/* Sticky Scroll Animation Demo */}
      <div className="sticky-container">
        <div className="sticky-element flex items-center justify-center">
          <GlassmorphicCard className="max-w-4xl w-full mx-auto p-12 text-center">
            <div className="sticky-content active">
              <h3 className="text-3xl font-bold text-white mb-6">Discover AI-Powered Education</h3>
              <p className="text-xl text-white/80">
                Artificial intelligence is transforming how we teach and learn, making education more personalized and effective.
              </p>
            </div>
            <div className="sticky-content">
              <h3 className="text-3xl font-bold text-white mb-6">Blockchain for Academic Records</h3>
              <p className="text-xl text-white/80">
                Secure, tamper-proof academic records that can be instantly verified by employers and institutions worldwide.
              </p>
            </div>
            <div className="sticky-content">
              <h3 className="text-3xl font-bold text-white mb-6">Virtual Reality Classrooms</h3>
              <p className="text-xl text-white/80">
                Immersive learning experiences that make complex concepts tangible and engaging for students of all ages.
              </p>
            </div>
            <div className="sticky-content">
              <h3 className="text-3xl font-bold text-white mb-6">The Future is Here</h3>
              <p className="text-xl text-white/80">
                Join us at Stalight Technology to revolutionize education for the next generation of learners.
              </p>
            </div>
          </GlassmorphicCard>
        </div>
      </div>

      {/* Scroll Speed Variance Demo */}
      <div className="h-screen relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
              Parallax Depth Effect
            </h2>
            <p className="text-xl text-white/80">
              Notice how elements move at different speeds as you scroll, creating a sense of depth and dimension.
            </p>
          </div>
        </div>
        
        {/* Multiple layers moving at different speeds */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="scroll-layer absolute top-1/4 left-1/4 w-24 h-24 glass-card rounded-xl animate-float" 
               data-speed="0.2" data-direction="vertical"></div>
          <div className="scroll-layer absolute bottom-1/3 right-1/4 w-32 h-32 glass-card rounded-full animate-float-reverse" 
               data-speed="-0.1" data-direction="vertical" style={{ animationDelay: '-2s' }}></div>
          <div className="scroll-layer absolute top-1/2 right-1/3 w-48 h-48 glass-card rounded-3xl animate-float-slow" 
               data-speed="0.05" data-direction="horizontal" style={{ animationDelay: '-1s' }}></div>
          <div className="scroll-layer absolute bottom-1/4 left-1/3 w-36 h-36 glass-card rounded-xl animate-float" 
               data-speed="-0.15" data-direction="horizontal" style={{ animationDelay: '-3s' }}></div>
        </div>
      </div>

      {/* Scroll-triggered Transformations Demo */}
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            Scroll-Triggered Transformations
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Watch these elements transform as you scroll through the page
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="scroll-transform" data-transform="rotate" data-speed="0.2" data-max-value="360">
            <GlassmorphicCard className="h-64 flex items-center justify-center">
              <p className="text-white font-bold">Rotation</p>
            </GlassmorphicCard>
          </div>
          <div className="scroll-transform" data-transform="scale" data-speed="0.1" data-max-value="20">
            <GlassmorphicCard className="h-64 flex items-center justify-center">
              <p className="text-white font-bold">Scale</p>
            </GlassmorphicCard>
          </div>
          <div className="scroll-transform" data-transform="skew" data-speed="0.05" data-max-value="30">
            <GlassmorphicCard className="h-64 flex items-center justify-center">
              <p className="text-white font-bold">Skew</p>
            </GlassmorphicCard>
          </div>
          <div className="scroll-transform" data-transform="move" data-speed="0.3" data-max-value="100">
            <GlassmorphicCard className="h-64 flex items-center justify-center">
              <p className="text-white font-bold">Movement</p>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollDemo;
