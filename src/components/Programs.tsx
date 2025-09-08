import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: "Executive Leadership Program",
      description: "An intensive program for senior executives and organizational leaders focused on strategic thinking and transformational leadership.",
      duration: "1 months",
      format: "Hybrid",
      features: ["Strategic Vision", "Change Management", "Global Perspectives", "Executive Coaching"],
      icon: (
        <svg className="w-12 h-12 text-purple-400 mx-auto transition-all duration-300 group-hover:text-purple-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      title: "Emerging Leaders Initiative", 
      description: "Developing the next generation of leaders through mentorship, practical experience, and network building.",
      duration: "1 months",
      format: "In-person",
      features: ["Mentorship Program", "Project-Based Learning", "Network Building", "Skills Development"],
      icon: (
        <svg className="w-12 h-12 text-purple-400 mx-auto transition-all duration-300 group-hover:text-purple-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Community Impact Fellowship",
      description: "Empowering local leaders to create sustainable change through community engagement and social innovation.",
      duration: "3 months", 
      format: "Regional",
      features: ["Community Engagement", "Social Innovation", "Impact Measurement", "Resource Mobilization"],
      icon: (
        <svg className="w-12 h-12 text-purple-400 mx-auto transition-all duration-300 group-hover:text-purple-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="programs" className="py-24 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h3 className="text-purple-400 text-lg font-medium mb-4 tracking-wider">
            Our Focus
          </h3>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              PROGRAMS
            </span>
          </h2>
          <p className="text-lg text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive leadership development programs are designed to meet leaders at every stage of their journey, from emerging talent to seasoned executives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group glass-dark rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="space-y-6">
                <div className="flex justify-center mb-6">
                  {program.icon}
                </div>
                
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-medium text-white group-hover:text-purple-300 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-300/80 leading-relaxed text-sm">{program.description}</p>
                </div>
                
                <div className="flex justify-between text-sm text-gray-400 py-4 border-t border-gray-700/50">
                  <div>
                    <span className="font-medium text-purple-400">Duration:</span> {program.duration}
                  </div>
                  <div>
                    <span className="font-medium text-purple-400">Format:</span> {program.format}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-white tracking-wide text-center text-sm">
                    KEY FEATURES
                  </h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm text-gray-300/80">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: `${idx * 0.1}s`}}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex justify-center">
                  <a href="https://tally.so/r/3EEO2q" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-600/90 hover:bg-purple-500 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                      APPLY
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;