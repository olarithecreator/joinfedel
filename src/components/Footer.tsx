import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative py-20 overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-4xl font-light tracking-[0.3em] bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                FEDEL
              </h3>
              <p className="text-purple-300/80 text-lg font-light">Inspire change.</p>
              <p className="text-gray-400/80 leading-relaxed max-w-md">
                Empowering leaders to create meaningful impact through innovative capacity building and transformative development programs.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6 text-purple-400">PROGRAMS</h3>
            <ul className="space-y-4 text-gray-400/80">
              <li>
                <a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Executive Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Emerging Leaders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Community Impact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6 text-purple-400">CONNECT</h3>
            <div className="space-y-4 text-gray-400/80">
              <div className="hover:text-white transition-colors duration-300 cursor-pointer">
                leaders_fedel@outlook.com
              </div>
              <div className="hover:text-white transition-colors duration-300 cursor-pointer">
                +234-8119-471875
              </div>
              <div className="hover:text-white transition-colors duration-300 cursor-pointer">
                @joinfedel
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500/80">
          <p className="mb-4 md:mb-0">© 2024 FEDEL. All Rights Reserved.</p>
          <p className="bg-gradient-to-r from-purple-400/60 to-blue-400/60 bg-clip-text text-transparent font-medium">
            Empowering Leaders for a Better Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;