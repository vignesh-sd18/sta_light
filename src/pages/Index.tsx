import React from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import UpcomingProjects from '@/components/UpcomingProjects';
import DashboardShowcase from '@/components/DashboardShowcase';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DownloadApp from '@/components/DownloadApp';
import FloatingDock from '@/components/FloatingDock';
import LeadershipTeam from '@/components/LeadershipTeam';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative px-2 sm:px-4 md:px-8">
      {/* Enhanced Aurora Background for entire site */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <div className="aurora-bg w-full h-full"></div>
      </div>
      
      <ThreeBackground />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="products">
        <Products />
      </section>
      <DashboardShowcase />
      <section id="neuro-campus">
        <DownloadApp />
      </section>
      <section id="projects">
        <UpcomingProjects />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="leadership">
        <LeadershipTeam />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <FloatingDock />
    </div>
  );
};

export default Index;
