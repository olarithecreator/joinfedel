import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/2.png" 
          alt="Pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-4xl font-light tracking-wider">FEDEL</h3>
              <p className="text-gray-400 text-lg">Inspire change.</p>
              <p className="text-gray-500 leading-relaxed max-w-md">
                Empowering leaders to create meaningful impact through innovative capacity building and transformative development programs.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6">PROGRAMS</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Executive Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emerging Leaders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Impact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wide mb-6">CONNECT</h3>
            <div className="space-y-3 text-gray-400">
              <div>leaders_fedel@outlook.com</div>
              <div>+234-8119-471875</div>
              <div>@joinfedel</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Fedel. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;