const WhyChoose = () => {
  const features = [
    {
      description: 'Stranger-Friendly Trips — Come solo, leave with a gang.',
    },
    {
      description:
        'Safe & Organized — Well-planned stays, transport, and support throughout the journey.',
    },
    {
      description: 'Unique Destinations — We mix famous spots with hidden gems.',
    },
    {
      description:
        'Memory-Filled Experiences — Bonfires, road trips, group games, local food, and late-night talks.',
    },
  ];

  return (
    <section
      className="w-full bg-white px-6 md:px-16 py-16 md:py-20"
      style={{ fontFamily: "'Urbanist', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-[#1a1a1a] text-2xl sm:text-3xl md:text-[44px] font-bold leading-tight mb-4">
            Why Choose Milemakers?
          </h2>
          <p className="text-[#555] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            At Milemakers, we believe the best part of travel isn’t just the
            place — it’s the people you meet along the way.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12">

          {/* LEFT — Features */}
          <div className="flex flex-col gap-6 md:gap-7 max-w-xl text-center md:text-left">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4 justify-center md:justify-start">
                <span className="text-[#1a1a1a] text-lg md:text-xl leading-none mt-1.5">•</span>

                <p className="text-[#000000CC] text-sm sm:text-base md:text-[25px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT — Video */}
          <div className="relative w-full max-w-[640px] md:max-w-none md:w-[746px]">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <video
                className="w-full h-[240px] sm:h-[300px] md:h-[466px] object-cover"
                controls
                preload="metadata"
                poster="/images/LandingPage/gallary/7.webp"
              >
                <source
                  src="https://res.cloudinary.com/dqs5as2yt/video/upload/v1770979153/WhatsApp_Video_2026-02-13_at_3.31.37_PM_fdm3pf.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
