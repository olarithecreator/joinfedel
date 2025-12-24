const KeyFocus = () => {
  const focusAreas = [
    {
      title: "Ideas & Voice",
      description: "Identity in Christ. Voice with purpose. Truth with courage.",
      image: "/idea and voice.png"
    },
    {
      title: "Leadership Systems",
      description: "Values become systems. Systems create impact. Impact serves Christ.",
      image: "/leadership system.png"
    },
    {
      title: "Transformation & Community",
      description: "Love transforms. Service multiplies. Communities rise. All in Christ.",
      image: "/image 1.png"
    }
  ];

  return (
    <section id="key-focus" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <h3 className="text-purple-400 text-base sm:text-lg font-medium mb-3 sm:mb-4 tracking-wider">
            Our Approach
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              KEY FOCUS
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300/90 max-w-3xl mx-auto leading-relaxed px-4">
            Three pillars. One foundation. Christ-centered leadership.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {focusAreas.map((area, index) => (
            <div key={index} className="group glass-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="space-y-4 sm:space-y-6">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl sm:rounded-2xl blur-xl"></div>
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="relative w-full h-40 sm:h-48 object-cover rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-purple-300 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-300/80 leading-relaxed text-xs sm:text-sm">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFocus;

















