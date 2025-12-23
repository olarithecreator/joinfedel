import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-1/3 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/3 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h3 className="text-purple-400 text-lg font-medium mb-4 tracking-wider">
            Get In Touch
          </h3>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          <p className="text-gray-300/90 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Ready to begin your leadership journey? Contact us to learn more about our programs and how we can help you create meaningful impact.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            {/* Contact Information – email only plus social, no phone or address */}
            <div className="space-y-8">
              <div className="group glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-sm text-purple-400 tracking-wide mb-2 group-hover:text-purple-300 transition-colors">
                  EMAIL
                </div>
                <div className="text-white/90">leaders_fedel@outlook.com</div>
              </div>
              <div className="group glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-sm text-purple-400 tracking-wide mb-2 group-hover:text-purple-300 transition-colors">
                  SOCIAL MEDIA
                </div>
                <div className="text-white/90">@joinfedel</div>
              </div>
            </div>
          </div>

          <div className="glass-dark rounded-3xl p-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = 'https://calendly.com/leaders_fedel/30min';
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-300/80 tracking-wide mb-3">FIRST NAME</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 bg-white/5 text-white placeholder-gray-400 border border-gray-600/50 rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300/80 tracking-wide mb-3">LAST NAME</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 bg-white/5 text-white placeholder-gray-400 border border-gray-600/50 rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300/80 tracking-wide mb-3">EMAIL</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-4 bg-white/5 text-white placeholder-gray-400 border border-gray-600/50 rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300/80 tracking-wide mb-3">MESSAGE</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-4 bg-white/5 text-white placeholder-gray-400 border border-gray-600/50 rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your leadership goals..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-purple-600/90 hover:bg-purple-500 text-white py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
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