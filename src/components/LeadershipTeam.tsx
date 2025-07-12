import React from 'react';

const leaders = [
  {
    name: 'Ritesh N',
    role: 'CEO & Founder',
    bio: 'Dynamic leader with a vision to revolutionize education through technology.',
    image: '/ceo.jpg',
    initials: 'RN',
  },
  {
    name: 'Pannaga J A',
    role: 'CTO & Co-Founder',
    bio: 'Tech visionary with a passion for creating scalable education solutions.',
    image: '/cto.jpg',
    initials: 'PJ',
  },
  {
    name: 'Prof. Swathi Srikanth',
    role: 'Company Representative & Mentor',
    bio: 'Trusted advisor and academic guide who brings clarity, mentorship, and leadership to the core of Stalight\'s mission.',
    image: '/cr.jpg',
    initials: 'SS',
  },
];

const LeadershipTeam: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background/80 to-black/90 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">Leadership Team</h2>
          <p className="text-xl text-white/80">Meet the visionaries driving Stalight Technology forward</p>
        </div>
        <div className="flex flex-col items-center space-y-12">
          {/* Prof. Swathi Srikanth - Top Center */}
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4 bg-white/10 flex items-center justify-center">
              {leaders[2].image ? (
                <img src={leaders[2].image} alt={leaders[2].name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl font-bold text-primary">{leaders[2].initials}</span>
              )}
            </div>
            <h3 className="text-2xl font-semibold text-gradient-primary mb-1">{leaders[2].name}</h3>
            <p className="text-primary font-medium mb-2">{leaders[2].role}</p>
            <p className="text-white/80 text-base">{leaders[2].bio}</p>
          </div>
          {/* CEO and CTO - Below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {leaders.slice(0, 2).map((leader) => (
              <div key={leader.name} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4 bg-white/10 flex items-center justify-center">
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl font-bold text-primary">{leader.initials}</span>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-gradient-primary mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-2">{leader.role}</p>
                <p className="text-white/80 text-base">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam; 