import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h3 className="text-purple-400 text-lg font-medium mb-4 tracking-wider">
            Our Mission
          </h3>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              OUR VISION
            </span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
            <img 
              src="/eyes.jpeg" 
              alt="Vision and Leadership" 
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20 rounded-3xl"></div>
          </div>

          <div className="space-y-8 order-1 lg:order-2 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300/90 leading-relaxed">
                Fedel is dedicated to developing exceptional leaders who create positive change in their communities and organizations. Through comprehensive programs, we build capacity, foster innovation, and create lasting impact.
              </p>
            </div>

            <div className="space-y-10">
              <div className="group glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-medium text-white tracking-wide mb-3 group-hover:text-purple-300 transition-colors">
                  TRANSFORMATIVE LEARNING
                </h3>
                <p className="text-gray-300/80 leading-relaxed">
                  Experiential programs that challenge participants to grow beyond their comfort zones and develop authentic leadership capabilities.
                </p>
              </div>
              
              <div className="group glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-medium text-white tracking-wide mb-3 group-hover:text-purple-300 transition-colors">
                  GLOBAL NETWORK
                </h3>
                <p className="text-gray-300/80 leading-relaxed">
                  Connect with a diverse community of leaders from around the world, fostering collaboration and shared learning.
                </p>
              </div>
              
              <div className="group glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-medium text-white tracking-wide mb-3 group-hover:text-purple-300 transition-colors">
                  LASTING IMPACT
                </h3>
                <p className="text-gray-300/80 leading-relaxed">
                  Continuous support and resources to ensure participants create meaningful change in their spheres of influence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;