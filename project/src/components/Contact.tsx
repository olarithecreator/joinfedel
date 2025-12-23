import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/3 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <h3 className="text-purple-400 text-base sm:text-lg font-medium mb-3 sm:mb-4 tracking-wider">
            Get In Touch
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300/90 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            Ready to start? Let's talk. Your journey begins here.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <div className="space-y-6 sm:space-y-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            {/* Contact Information from your card */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="group glass p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-xs sm:text-sm text-purple-400 tracking-wide mb-1.5 sm:mb-2 group-hover:text-purple-300 transition-colors">
                  EMAIL
                </div>
                <a href="mailto:leaders_fedel@outlook.com" className="text-sm sm:text-base text-white/90 break-words hover:text-purple-300 transition-colors">
                  leaders_fedel@outlook.com
                </a>
              </div>
              <div className="group glass p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-xs sm:text-sm text-purple-400 tracking-wide mb-1.5 sm:mb-2 group-hover:text-purple-300 transition-colors">
                  SOCIAL MEDIA
                </div>
                <div className="text-sm sm:text-base text-white/90">@joinfedel</div>
              </div>
            </div>
          </div>

          <div className="glass-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <form 
              className="space-y-4 sm:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = 'https://calendly.com/leaders_fedel/30min';
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-300/80 tracking-wide mb-2 sm:mb-3">FIRST NAME</label>
                  <input 
                    type="text" 
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/5 text-white text-sm sm:text-base placeholder-gray-400 border border-gray-600/50 rounded-lg sm:rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-gray-300/80 tracking-wide mb-2 sm:mb-3">LAST NAME</label>
                  <input 
                    type="text" 
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/5 text-white text-sm sm:text-base placeholder-gray-400 border border-gray-600/50 rounded-lg sm:rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-gray-300/80 tracking-wide mb-2 sm:mb-3">EMAIL</label>
                <input 
                  type="email" 
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/5 text-white text-sm sm:text-base placeholder-gray-400 border border-gray-600/50 rounded-lg sm:rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-gray-300/80 tracking-wide mb-2 sm:mb-3">MESSAGE</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/5 text-white text-sm sm:text-base placeholder-gray-400 border border-gray-600/50 rounded-lg sm:rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your leadership goals..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-purple-600/90 hover:bg-purple-500 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                BOOK A 30 MIN CALL
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;