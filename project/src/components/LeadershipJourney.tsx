const LeadershipJourney = () => {
  return (
    <section
      id="leadership-journey"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden"
    >
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
          <h3 className="text-purple-400 text-base sm:text-lg font-medium tracking-wider">
            Leadership Journey
          </h3>
        </div>
        {/* Content intentionally kept minimal to match the simpler state you had before */}
      </div>
    </section>
  );
};

export default LeadershipJourney;


