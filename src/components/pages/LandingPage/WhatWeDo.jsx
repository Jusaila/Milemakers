const WhatWeDo = () => {
  const features = [
    'Travel with like-minded people',
    'Carefully planned itineraries',
    'Local experiences, not just tourist spots',
    'A community that grows with every trip',
  ];

  return (
    <section
      className="w-full bg-white px-6 md:px-16 py-16 md:py-20"
      style={{ fontFamily: "'Urbanist', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-8">

        {/* LEFT — Quote + Reviews */}
        <div className="w-full md:w-[340px] flex flex-col gap-6 pt-0 md:pt-8 text-center md:text-left">
          <h2 className="text-[#1a1a1a] text-2xl sm:text-3xl md:text-[55px] font-bold leading-[1.2]">
            " The Perfect Travel Partner for you and your Family "
          </h2>

          <div className="flex flex-col items-center md:items-start gap-3">
            {/* Avatar stack */}
            <div className="flex -space-x-2 justify-center md:justify-start">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80"
                alt="Traveler"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200&q=80"
                alt="Traveler"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=200&q=80"
                alt="Traveler"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-white object-cover"
              />
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#4ade80] border-2 border-white flex items-center justify-center text-white text-xs md:text-sm font-bold">
                50+
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-sm md:text-base font-semibold justify-center md:justify-start">
              <span className="text-[#1a1a1a]">50+</span>
              <span className="text-[#f59e0b] underline decoration-2 underline-offset-2">
                Happy Customers
              </span>
            </div>
          </div>
        </div>

        {/* CENTER — Image */}
        <div className="relative flex-shrink-0">
          <div className="w-[260px] sm:w-[300px] md:w-[419px] h-[380px] sm:h-[450px] md:h-[700px] rounded-[2rem] overflow-hidden shadow-xl">
            <img
              src="/images/LandingPage/whatwedo.webp"
              alt="Friends hiking"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping logo responsive */}
          <div className="absolute -bottom-10 -left-10 md:-bottom-14 md:-left-14 bg-white rounded-full shadow-xl">
            <img
              src="/icons/logo.webp"
              alt="Mile Makers Logo"
              className="w-20 h-20 md:w-36 md:h-36 object-contain p-3 md:p-4"
            />
          </div>
        </div>

        {/* RIGHT — What We Do */}
        <div className="w-full md:w-[380px] flex flex-col gap-4 pt-0 md:pt-8 text-center md:text-left">
          <h3 className="text-[#000000] text-2xl sm:text-3xl md:text-[55px] font-bold leading-[1.2]">
            What We Do
          </h3>

          <p className="text-[#000000CC] text-sm sm:text-base md:text-lg leading-relaxed">
            We organize curated group travel experiences for people who love
            exploring new places — even if they don't have a travel partner.
          </p>

          <p className="text-[#000000CC] text-sm sm:text-base md:text-lg leading-relaxed">
            Whether you're coming solo or with a friend, our trips are designed so
            everyone feels included, safe, and connected.
          </p>

          <ul className="flex flex-col gap-3 mt-2">
            {features.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[#000000CC] text-sm sm:text-base md:text-lg justify-center md:justify-start"
              >
                <span className="text-[#4ade80] text-lg md:text-xl leading-none mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
