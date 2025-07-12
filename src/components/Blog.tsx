import React, { useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import GlassmorphicButton from './GlassmorphicButton';

const blogPosts = [
  {
    title: "The Future of AI in Education",
    excerpt: "Explore how artificial intelligence is reshaping the educational landscape and creating new opportunities for personalized learning experiences. AI-powered tools are revolutionizing how students learn, providing adaptive content and real-time feedback.",
    fullContent: "Artificial intelligence is transforming education at an unprecedented pace. Machine learning algorithms can now analyze student performance data to create truly personalized learning paths that adapt in real-time to individual strengths and weaknesses. These AI-driven educational platforms can identify knowledge gaps, suggest targeted resources, and even predict areas where a student may struggle in the future. Beyond personalization, AI virtual teaching assistants are available 24/7 to answer questions, provide explanations, and guide students through complex concepts at their own pace. This technology is particularly valuable in regions with teacher shortages or in providing specialized instruction that might not otherwise be available. As natural language processing continues to advance, these AI systems will become increasingly conversational and intuitive, creating learning experiences that closely mirror human instruction while scaling to meet the needs of millions of students simultaneously.",
    date: "April 10, 2025",
    image: "/1.jpg", // Replace with actual image when available
    category: "Technology",
    link: "#blog/ai-in-education",
    id: "blog-content-1"
  },
  {
    title: "Blockchain Technology in Academic Credentials",
    excerpt: "Learn how blockchain is revolutionizing the way academic credentials are verified and maintained in educational institutions. This tamper-proof technology ensures the integrity and authenticity of certificates while simplifying verification processes.",
    fullContent: "Blockchain technology is solving one of the most persistent challenges in education: the secure, tamper-proof verification of academic credentials. By recording educational achievements on a distributed ledger, blockchain creates permanent, verifiable records that cannot be altered or falsified. This eliminates the need for time-consuming background checks and verification processes that plague both educational institutions and employers. Students gain complete ownership of their credentials, allowing them to share verified accomplishments instantly with potential employers worldwide. For educational institutions, blockchain reduces administrative costs associated with transcript requests and verification processes. The technology also enables micro-credentialing, where specific skills and achievements can be recorded and verified independently of traditional degrees. As global education becomes increasingly modular and lifelong learning becomes the norm, blockchain provides the infrastructure needed to track, verify and share educational accomplishments throughout a person's entire career journey.",
    date: "April 5, 2025",
    image: "/2.jpg", // Replace with actual image when available
    category: "Innovation",
    link: "#blog/blockchain-credentials",
    id: "blog-content-2"
  },
  {
    title: "Transforming Student Assessment with AI",
    excerpt: "Discover innovative methods of student assessment that leverage artificial intelligence to provide better insights into student performance and personalized learning paths that adapt to individual strengths and weaknesses.",
    fullContent: "Traditional student assessment methods are being revolutionized by artificial intelligence, shifting from standardized testing to continuous, personalized evaluation. AI-powered assessment tools can analyze not just the final answers, but the entire problem-solving process, identifying exactly where students struggle and succeed. This granular insight allows educators to target instruction precisely where it's needed most. Natural language processing enables automated essay grading that evaluates not just grammar and spelling, but also concept understanding, logical flow, and even creativity. Perhaps most importantly, AI assessment can happen continuously throughout the learning process rather than just at the end, providing immediate feedback that helps students correct misconceptions before they become entrenched. This shifts assessment from being primarily evaluative to being a powerful learning tool itself. These systems also reduce teacher workload, freeing educators to focus on high-value interactions with students rather than grading. As these technologies mature, they promise to create more equitable assessment that recognizes diverse learning styles and provides multiple pathways to demonstrate mastery.",
    date: "March 28, 2025",
    image: "/3.jpg", // Replace with actual image when available
    category: "Education",
    link: "#blog/ai-assessment",
    id: "blog-content-3"
  },
  {
    title: "The Impact of Virtual Reality on Classroom Engagement",
    excerpt: "See how virtual reality is transforming traditional classroom experiences into immersive learning environments that capture students' attention and improve knowledge retention through interactive simulations.",
    fullContent: "Virtual reality is redefining what's possible in education by creating immersive learning environments that were previously unimaginable. Students can now walk through ancient Rome, explore the human bloodstream from inside a cell, or manipulate virtual models of complex molecular structures. These experiences transform abstract concepts into tangible, interactive explorations that engage multiple senses and learning modalities simultaneously. Research shows that VR learning experiences can significantly increase knowledge retention, with some studies reporting retention rates up to 80% higher than traditional learning methods. Beyond content delivery, VR enables powerful collaborative learning experiences where students from around the world can gather in the same virtual space to solve problems together. The technology is particularly transformative for subjects that benefit from spatial understanding or hands-on practice, from architecture and engineering to surgical training. As VR hardware becomes more affordable and content libraries expand, these immersive learning experiences are increasingly accessible to schools at all resource levels, democratizing access to experiential learning that was once available only through expensive field trips or specialized labs.",
    date: "March 15, 2025",
    image: "/4.jpg", // Replace with actual image when available
    category: "Innovation",
    link: "#blog/vr-classroom",
    id: "blog-content-4"
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const handleBlogClick = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="py-24 relative overflow-hidden wavy-background">
      {/* Background wave lines inspired by the reference image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="wave-lines"></div>
      </div>
      
      {/* Background accents */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-stalight-primary/10 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-stalight-blue/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/5 w-48 h-48 rounded-full bg-stalight-accent/10 blur-3xl animate-pulse-glow"></div>
      
      {/* 3D animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-16 h-16 glass-card rounded-xl animate-float transform rotate-12 backdrop-blur-lg scroll-transform" 
             data-transform="rotate" data-speed="0.1" data-max-value="30" style={{ animationDelay: '-1.7s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 glass-card rounded-xl animate-float-reverse transform -rotate-12 scroll-transform" 
             data-transform="skew" data-speed="0.05" data-max-value="15" style={{ animationDelay: '-3.2s' }}></div>
        <div className="absolute top-2/3 right-1/5 w-20 h-20 glass-card rounded-lg animate-float-slow transform-style-3d scroll-zoom" 
             data-scale-rate="0.0008" data-max-scale="1.3" style={{ animationDelay: '-2.5s' }}></div>
        
        {/* New 3D elements */}
        <div className="absolute top-1/3 left-1/4 w-24 h-24 animate-rotate-slow opacity-20 scroll-transform" 
             data-transform="rotate" data-speed="0.3" data-max-value="360">
          <div className="absolute inset-0 glass-pyramid"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 animate-float-slow opacity-30 scroll-layer" 
             data-speed="-0.05" data-direction="horizontal" style={{ animationDelay: '-4.2s' }}>
          <div className="absolute inset-0 glass-cube"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal-item">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins text-gradient-primary">
            Latest Insights & Trends
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with our latest articles on educational innovations and transformative approaches to learning in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="scroll-reveal-item opacity-0 translate-y-10"
              style={{ 
                transitionDelay: `${index * 0.1}s` 
              }}
            >
              <GlassmorphicCard 
                className="flex flex-col h-full hover:scale-105 transition-all duration-500 hover:shadow-[0_0_30px_rgba(155,135,245,0.3)] backdrop-blur-md"
              >
                <div className="rounded-lg overflow-hidden mb-4 h-48 bg-gradient-to-br from-stalight-primary/20 to-stalight-blue/20 group relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-stalight-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-stalight-primary text-sm font-medium px-3 py-1 rounded-full bg-stalight-primary/10 backdrop-blur-sm">{post.category}</span>
                    <span className="text-white/60 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins text-white">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <Button 
                  variant="link" 
                  className="text-stalight-primary hover:text-stalight-primary/80 p-0 flex items-center gap-2 mt-2 transition-all duration-300 group read-more-button"
                  onClick={() => handleBlogClick(post)}
                >
                  Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </GlassmorphicCard>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-stalight-dark/95 rounded-2xl p-8 shadow-2xl border border-white/10">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="rounded-lg overflow-hidden mb-6 h-64 bg-gradient-to-br from-stalight-primary/20 to-stalight-blue/20">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-stalight-primary text-sm font-medium px-3 py-1 rounded-full bg-stalight-primary/10 backdrop-blur-sm">
                {selectedPost.category}
              </span>
              <span className="text-white/60 text-sm">{selectedPost.date}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins text-white">
              {selectedPost.title}
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed">
                {selectedPost.fullContent}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
