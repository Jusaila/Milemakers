const CTABanner = () => {
    return (
      <section
        className="w-full px-4 md:px-16 py-6"
        style={{ fontFamily: "'DM Sans', sans-serif", background: '#ffff' }}
      >
          <div className="max-w-[1240px] mx-auto">

        <div className="relative w-full rounded-3xl overflow-hidden aspect-[1139/607]">


          {/* Background image — tea garden / green hills */}
          <img
            src="/images/LandingPage/ctabg.webp"
            alt="Tea garden hills"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay — heavier on left where text is */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-black/10" />
  
          {/* Centered Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="flex flex-col items-center max-w-xl">

              {/* Headline */}
              <h2
                className="text-white text-2xl md:text-3xl font-bold leading-snug mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Experience The Magic Of
                <br />
                Mile Makers Today
              </h2>

              {/* Sub text */}
              <p className="text-white/65 text-xs md:text-sm leading-relaxed mb-6 max-w-md">
                Join group journeys, explore breathtaking destinations, embrace
                diverse cultures, and create memories that last a lifetime.
              </p>

              {/* CTA Button */}
              <button className="flex items-center gap-3 bg-white text-[#1a1a1a] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#f0ede7] active:scale-95 transition-all duration-200 shadow-md">
                Book your Seat Now
                <span className="w-7 h-7 bg-[#2d4a2d] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </span>
              </button>

            </div>
          </div>
        </div>
            </div>
      </section>
    );
  };
  
  export default CTABanner;