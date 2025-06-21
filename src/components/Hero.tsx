import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/1.png" 
          alt="Background Pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-light tracking-wider">
                FEDEL
              </h1>
              <p className="text-2xl font-light tracking-wide text-gray-300">
                Inspire change.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Empowering leaders to create meaningful impact through innovative capacity building and transformative development programs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-700 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-600 transition-colors">
                EXPLORE PROGRAMS
              </button>
              <button className="border border-gray-400 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-800 hover:border-gray-300 transition-colors">
                LEARN MORE
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div>
                <div className="text-3xl font-light">20+</div>
                <div className="text-gray-500 text-sm tracking-wide">LEADERS TRAINED</div>
              </div>
              <div>
                <div className="text-3xl font-light">1+</div>
                <div className="text-gray-500 text-sm tracking-wide">COUNTRIES</div>
              </div>
              <div>
                <div className="text-3xl font-light">2</div>
                <div className="text-gray-500 text-sm tracking-wide">YEARS IMPACT</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img 
                src="/Youth-Day-of-Service-LEAP-Africa-VA (1).jpg" 
                alt="Leadership Development" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;