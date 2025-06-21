import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 relative">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img 
          src="/2.png" 
          alt="Pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="/eyes.jpeg" 
              alt="Vision and Leadership" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-light text-gray-900 tracking-wide">
                OUR VISION
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fedel is dedicated to developing exceptional leaders who create positive change in their communities and organizations. Through comprehensive programs, we build capacity, foster innovation, and create lasting impact.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900 tracking-wide">TRANSFORMATIVE LEARNING</h3>
                <p className="text-gray-700 leading-relaxed">
                  Experiential programs that challenge participants to grow beyond their comfort zones and develop authentic leadership capabilities.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900 tracking-wide">GLOBAL NETWORK</h3>
                <p className="text-gray-700 leading-relaxed">
                  Connect with a diverse community of leaders from around the world, fostering collaboration and shared learning.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900 tracking-wide">LASTING IMPACT</h3>
                <p className="text-gray-700 leading-relaxed">
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