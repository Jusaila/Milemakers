const StatusSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* Left decorative rectangle */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 md:w-4 h-[460px] md:h-[760px] bg-[#2d4a2d]" />

      {/* Right decorative rectangle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 md:w-4 h-[460px] md:h-[760px] bg-[#2d4a2d]" />

      <div className="flex flex-col md:flex-row">

        {/* LEFT — Image (starts AFTER green bar) */}
        
        <div className="w-full md:w-1/2 flex justify-start pl-2 md:pl-4">

          <img
            src="/images/LandingPage/status.webp"
            alt="Palm tree"
            className="w-[420px] md:w-[520px] lg:w-[990px] h-auto object-contain"
            style={{ filter: 'saturate(1.15) brightness(1.05)' }}
          />
        </div>

        {/* RIGHT — Content */}
    
        <div className="w-full md:w-1/2 px-6 md:pl-8 md:pr-16 py-16 md:py-0 flex items-center">

          <div className="flex flex-col gap-12 max-w-xl">

            <p
              className="text-[#000] text-2xl md:text-[55px] font-semibold leading-snug"
              style={{ fontFamily: "'Urbanist', sans-serif" }}

            >
              “From dream destinations to real experiences, travel transforms
              ordinary moments into extraordinary stories.”
            </p>

            <div className="flex items-center gap-10 md:gap-16">
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl md:text-5xl font-bold">10+</span>
                <span className="text-xs uppercase text-[#000000CC]">Group Journeys</span>
              </div>

              <div className="w-px h-12 bg-[#ccc]" />

              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl md:text-5xl font-bold">100+</span>
                <span className="text-xs uppercase text-[#000000CC]">Shared Smiles</span>
              </div>

              <div className="w-px h-12 bg-[#ccc]" />

              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl md:text-5xl font-bold">∞</span>
                <span className="text-xs uppercase text-[#000000CC]">Memories</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StatusSection;
