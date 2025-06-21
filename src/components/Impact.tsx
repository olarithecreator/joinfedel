import React from 'react';

const Impact = () => {
  const stats = [
    { number: "20+", label: "Leaders Developed" },
    { number: "1+", label: "Countries Reached" },
    { number: "85%", label: "Career Advancement" },
    { number: "2", label: "Years of Impact" }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/1.png" 
          alt="Background Pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-6 tracking-wide">OUR IMPACT</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in the achievements of our participants and the positive change they create in their organizations and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-light text-white mb-4">{stat.number}</div>
              <div className="text-sm text-gray-400 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm p-12 max-w-4xl mx-auto border border-gray-700">
          <blockquote className="text-xl text-white leading-relaxed mb-8 text-center">
            "Fedel transformed my approach to leadership. The program gave me the tools and perspective needed to drive meaningful change in my organization and community."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100" 
              alt="Sarah Johnson"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-center">
              <div className="font-medium text-white">Daniel Inyang</div>
              <div className="text-sm text-gray-400">CEO, Impact Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;