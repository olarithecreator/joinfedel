const LeadershipJourney = () => {
  const journeyStages = [
    {
      title: "The foundation: mindset alteration",
      description: "Identity in Christ. Voice with purpose. Truth with courage.",
      image: "/thinking-man.jpg",
      programs: [
        {
          name: "Fedel YouTube",
          description: "Leadership teachings, insights, and conversations rooted in Christ"
        },
        {
          name: "Fedel Podcast",
          description: "In-depth discussions on identity, leadership, and purpose."
        }
      ]
    },
    {
      title: "The journey: Christ based Formation",
      description: "Values become systems. Systems create impact. Impact serves Christ.",
      image: "/Lead 2.jpg",
      programs: [
        {
          name: "Fedel Initiative",
          description: "Enlightening people on who they were created to be through education, understanding, and illumination"
        },
        {
          name: "Fedel Accelerators",
          description: "Public outreach and empowerment for the helpless, hopeless, and motherless, including monthly online leadership development sessions grounded in Christ"
        }
      ]
    },
    {
      title: "The destination: capacity building through Christ",
      description: "Love transforms. Service multiplies. Communities rise. All in Christ.",
      image: "/lead 3.png",
      programs: [
        {
          name: "Fedel Quarterly Meet",
          description: "Curated leadership gatherings for reflection, connection, and growth"
        },
        {
          name: "Life-Altering Programme",
          description: "Immersive experiences designed to realign identity, purpose, and leadership expression"
        }
      ]
    }
  ];

  return (
    <section id="leadership-journey" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <h3 className="text-purple-400 text-base sm:text-lg font-medium mb-3 sm:mb-4 tracking-wider">
            Leadership Journey
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              LEADERSHIP JOURNEY
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300/90 max-w-3xl mx-auto leading-relaxed px-4">
            From inspiration to transformation. Your leadership journey begins here.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {journeyStages.map((stage, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image column – always on the left on large screens */}
              <div className="relative order-1">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl sm:rounded-3xl blur-xl"></div>
                <img 
                  src={stage.image} 
                  alt={stage.title}
                  className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20 rounded-2xl sm:rounded-3xl"></div>
              </div>

              {/* Text + programs column – always on the right */}
              <div className="space-y-6 sm:space-y-8 order-2">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                      {stage.title}
                    </span>
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <p className="text-xs sm:text-sm text-purple-400/90 font-medium tracking-wide">Includes:</p>
                  <div className="space-y-3 sm:space-y-4">
                    {stage.programs.map((program, pIndex) => (
                      <div key={pIndex} className="group glass p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <span className="text-purple-400 mt-0.5 sm:mt-1 text-xs sm:text-sm">•</span>
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm sm:text-base mb-1 group-hover:text-purple-300 transition-colors">
                              {program.name}
                            </h4>
                            <p className="text-gray-300/80 text-xs sm:text-sm leading-relaxed">
                              {program.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipJourney;