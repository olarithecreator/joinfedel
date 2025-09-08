import React from 'react';

const Impact = () => {
  const stats = [
    { number: "20+", label: "Leaders Developed" },
    { number: "1+", label: "Countries Reached" },
    { number: "85%", label: "Career Advancement" },
    { number: "2", label: "Years of Impact" }
  ];

  return (
    <section id="impact" className="py-24 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h3 className="text-purple-400 text-lg font-medium mb-4 tracking-wider">
            Our Impact
          </h3>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              OUR IMPACT
            </span>
          </h2>
          <p className="text-lg text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in the achievements of our participants and the positive change they create in their organizations and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-light text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-dark p-12 max-w-4xl mx-auto rounded-3xl animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <blockquote className="text-xl text-white/90 leading-relaxed mb-8 text-center italic">
            "Fedel transformed my approach to leadership. The program gave me the tools and perspective needed to drive meaningful change in my organization and community."
          </blockquote>
          <div className="flex items-center justify-center space-x-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-full blur"></div>
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Daniel Inyang"
                className="relative w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div className="text-center">
              <div className="font-medium text-white text-lg">Daniel Inyang</div>
              <div className="text-sm text-purple-400">CEO, Impact Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;