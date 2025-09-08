import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-purple-300/40 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8 text-white text-center lg:text-left animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight tracking-wide">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Inspiring Change,
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent">
                  Empowering Leaders
                </span>
              </h1>
              <p className="text-xl text-gray-300/90 leading-relaxed max-w-2xl">
                Empowering leaders to create meaningful impact through innovative capacity building and transformative development programs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#programs">
                <button className="group bg-purple-600/90 hover:bg-purple-500 text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                  EXPLORE PROGRAMS
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </a>
              <Link to="/podcast">
                <button className="group glass border border-purple-400/50 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/15 hover:scale-105">
                  LISTEN TO PODCAST
                </button>
              </Link>
              <a href="https://tally.so/r/3EEO2q" target="_blank" rel="noopener noreferrer">
                <button className="group glass border border-purple-400/50 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/15 hover:scale-105">
                  APPLY
                </button>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src="/hero-image.png.jpg" 
                alt="Leadership Development" 
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-purple-900/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;