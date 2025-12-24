const Impact = () => {
  const stats = [
    { number: "20+", label: "Leaders Developed" },
    { number: "1+", label: "Countries Reached" },
    { number: "85%", label: "Career Advancement" },
    { number: "2", label: "Years of Impact" }
  ];

  return (
    <section id="impact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <h3 className="text-purple-400 text-base sm:text-lg font-medium mb-3 sm:mb-4 tracking-wider">
            Our Impact
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              OUR IMPACT
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300/90 max-w-3xl mx-auto leading-relaxed px-4">
            Real numbers. Real impact. Real transformation. All through Christ.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="glass p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;