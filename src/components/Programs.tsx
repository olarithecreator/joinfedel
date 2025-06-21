import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: "Executive Leadership Program",
      description: "An intensive program for senior executives and organizational leaders focused on strategic thinking and transformational leadership.",
      duration: "1 months",
      format: "Hybrid",
      features: ["Strategic Vision", "Change Management", "Global Perspectives", "Executive Coaching"]
    },
    {
      title: "Emerging Leaders Initiative", 
      description: "Developing the next generation of leaders through mentorship, practical experience, and network building.",
      duration: "1 months",
      format: "In-person",
      features: ["Mentorship Program", "Project-Based Learning", "Network Building", "Skills Development"]
    },
    {
      title: "Community Impact Fellowship",
      description: "Empowering local leaders to create sustainable change through community engagement and social innovation.",
      duration: "3 months", 
      format: "Regional",
      features: ["Community Engagement", "Social Innovation", "Impact Measurement", "Resource Mobilization"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/istockphoto-1437719297-612x612.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-wide">PROGRAMS</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive leadership development programs are designed to meet leaders at every stage of their journey, from emerging talent to seasoned executives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white border border-gray-200 p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-gray-900 tracking-wide">{program.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{program.description}</p>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600 py-4 border-t border-gray-200">
                  <div>
                    <span className="font-medium">Duration:</span> {program.duration}
                  </div>
                  <div>
                    <span className="font-medium">Format:</span> {program.format}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 tracking-wide">KEY FEATURES</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex justify-end">
                  <a href="https://tally.so/r/3EEO2q" target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-800 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-700 transition-colors">
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