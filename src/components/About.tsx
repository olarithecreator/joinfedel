const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <h3 className="text-purple-400 text-base sm:text-lg font-medium mb-3 sm:mb-4 tracking-wider">
            Our Mission
          </h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          <div className="relative order-1 lg:order-1 animate-fade-in mb-8 lg:mb-0" style={{animationDelay: '0.3s'}}>
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl sm:rounded-3xl blur-xl"></div>
            <img 
              src="/eyes.jpeg" 
              alt="Vision and Leadership" 
              className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20 rounded-2xl sm:rounded-3xl"></div>
          </div>

          <div className="space-y-6 sm:space-y-8 order-2 lg:order-2 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed">
                Fedel Leadership exists to raise purpose-driven leaders through the teachings of Christ.
              </p>
              <p className="text-sm sm:text-base text-gray-300/85 leading-relaxed">
                We are committed to helping individuals understand who they were created to be, develop leadership capacity rooted in truth and service, and live out that leadership in ways that bring hope, structure, and lasting impact to communities.
              </p>
              <p className="text-sm sm:text-base text-gray-300/85 leading-relaxed">
                At Fedel, leadership is not about position or status — it is about identity, responsibility, and service modeled after Christ.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="group glass p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-wide mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors">
                  PROCESS 1
                </h3>
                <p className="text-sm sm:text-base text-gray-300/80 leading-relaxed mb-4 sm:mb-6">
                  This is where leadership begins. Fedel shapes thinking, identity, and expression through Christ-centered teaching and conversation that gives clarity of purpose and confidence of voice.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-purple-400/90 font-medium tracking-wide mb-1 sm:mb-2">Includes:</p>
                  <div className="space-y-1.5 sm:space-y-2 pl-3 sm:pl-4 border-l-2 border-purple-400/30">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1 text-xs sm:text-sm">•</span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-medium">Fedel YouTube</span>
                        <span className="text-gray-400/80"> — Leadership teachings, insights, and conversations rooted in Christ</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1 text-xs sm:text-sm">•</span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-medium">Fedel Podcast</span>
                        <span className="text-gray-400/80"> — In-depth discussions on identity, leadership, and purpose.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group glass p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-wide mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors">
                  PROCESS 2
                </h3>
                <p className="text-sm sm:text-base text-gray-300/80 leading-relaxed mb-4 sm:mb-6">
                  Leadership must move beyond inspiration into structure. Fedel builds systems that educate, support, and mobilize individuals into purposeful leadership and compassionate action.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-purple-400/90 font-medium tracking-wide mb-1 sm:mb-2">Includes:</p>
                  <div className="space-y-1.5 sm:space-y-2 pl-3 sm:pl-4 border-l-2 border-purple-400/30">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1 text-xs sm:text-sm">•</span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-medium">Fedel Initiative</span>
                        <span className="text-gray-400/80"> — Enlightening people on who they were created to be through education, understanding, and illumination</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1 text-xs sm:text-sm">•</span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-medium">Fedel Accelerators</span>
                        <span className="text-gray-400/80"> — Public outreach and empowerment for the helpless, hopeless, and motherless, including monthly online leadership development sessions grounded in Christ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group glass p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-wide mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors">
                  PROCESS 3
                </h3>
                <p className="text-sm sm:text-base text-gray-300/80 leading-relaxed mb-4 sm:mb-6">
                  True leadership produces lasting change. Fedel creates spaces where transformation is deepened through community, shared experience, and long-term personal and societal impact.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-purple-400/90 font-medium tracking-wide mb-1 sm:mb-2">Includes:</p>
                  <div className="space-y-1.5 sm:space-y-2 pl-3 sm:pl-4 border-l-2 border-purple-400/30">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1 text-xs sm:text-sm">•</span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-medium">Fedel Quarterly Meet</span>
                        <span className="text-gray-400/80"> — Curated leadership gatherings for reflection, connection, and growth</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1 text-xs sm:text-sm">•</span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-medium">Life-Altering Programme</span>
                        <span className="text-gray-400/80"> — Immersive experiences designed to realign identity, purpose, and leadership expression</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;