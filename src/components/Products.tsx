import React from 'react';
import { Brain, Shield, Zap, ArrowRight, Bot, BookOpen, Users, Camera, AlertTriangle, GitBranch, MessageSquare } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-poppins text-gradient-primary">
              Our Products
            </h2>
            <p className="text-xl text-white/80">
              Innovative solutions designed to transform education and safety
            </p>
          </div>

          {/* Flagship Product */}
          <div className="glass-card p-6 md:p-8 rounded-xl mb-16">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary">NEURO CAMPUS™</h3>
                  <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full whitespace-nowrap">Flagship Product</span>
                </div>
                <p className="text-white/80 mb-6">
                  A next-generation academic platform designed to streamline campus operations while integrating cutting-edge AI, blockchain, and automation features.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">NEURA Chatbot</h4>
                    </div>
                    <p className="text-sm text-white/70">AI assistant for instant PDF summaries and Q&A using LLMs</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">NebulaSuggests AI</h4>
                    </div>
                    <p className="text-sm text-white/70">Smart recommendation engine for personalized DSA problems</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">AI Rank Prediction</h4>
                    </div>
                    <p className="text-sm text-white/70">Predicts student rankings and flags performance issues</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Blockchain Validation</h4>
                    </div>
                    <p className="text-sm text-white/70">Tamper-proof, verifiable academic certificates</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Role-Based Dashboards</h4>
                    </div>
                    <p className="text-sm text-white/70">Web + Native App dashboards for admin, faculty, and students</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Face Recognition</h4>
                    </div>
                    <p className="text-sm text-white/70">AI-based attendance with manual fallback</p>
                  </div>
                </div>

                <button
                  className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                  onClick={() => {
                    const el = document.getElementById('dashboard-showcase');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 w-full lg:w-auto">
                <div className="aspect-video rounded-lg overflow-hidden glass-card hover:scale-105 transition-transform">
                  <img 
                    src="/images/neuro-campus-dashboard.png" 
                    alt="Neuro Campus Dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-4 4h-4a1 1 0 01-1-1v-1h6v1a1 1 0 01-1 1z' /></svg>
                    Available on Web & Mobile
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SafeSpace™ */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-gradient-primary">SafeSpace™</h3>
                  <p className="text-sm text-primary">AI-Powered Women's Safety Platform</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Advanced safety system for public spaces and campuses with real-time monitoring and emergency response.
              </p>
              <div className="space-y-4 mb-6">
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                    Emergency Response
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      One-tap emergency alerts
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Auto-connects to emergency services
                    </li>
                  </ul>
                </div>
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-primary" />
                    AI Surveillance
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      AI-integrated CCTV monitoring
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Real-time police notifications
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* GitSolveAI */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-gradient-primary">GitSolveAI</h3>
                  <p className="text-sm text-primary">Smart GitHub Issue Resolution</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                AI-powered platform that automates GitHub issue resolution and streamlines CI/CD workflows.
              </p>
              <div className="space-y-4 mb-6">
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    Smart Automation
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Automated issue resolution
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Smart PR generation
                    </li>
                  </ul>
                </div>
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    CI/CD Integration
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Automated testing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Smart deployment workflows
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* AI CCTV Surveillance */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
                <Camera className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-gradient-primary">AI CCTV Surveillance</h3>
                  <p className="text-sm text-primary">Advanced Campus Security</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Next-generation surveillance system using Computer Vision for enhanced campus security.
              </p>
              <div className="space-y-4 mb-6">
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Threat Detection
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Ragging & bullying detection
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Unauthorized gathering alerts
                    </li>
                  </ul>
                </div>
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Real-time Response
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Instant alert system
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Real-time evidence collection
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
