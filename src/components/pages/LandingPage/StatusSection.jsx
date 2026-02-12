const StatsSection = () => {
    return (
      <section
        className="relative w-full bg-[#f5f2ec] overflow-hidden py-16 px-6 md:px-16"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Palm tree image — bottom left, partially cut off */}
        <div className="absolute -left-6 bottom-0 w-[260px] md:w-[320px] pointer-events-none select-none z-10">
          <img
            src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&q=80"
            alt="Palm tree"
            className="w-full h-auto object-contain"
            style={{ filter: 'saturate(1.1)' }}
          />
        </div>
  
        {/* Quote block — right side */}
        <div className="flex justify-end">
          <div className="max-w-xs md:max-w-sm">
            {/* Open quote mark */}
            <span
              className="text-[#2d4a2d] text-6xl font-serif leading-none block mb-2"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 0.8 }}
            >
              "
            </span>
            <p
              className="text-[#1a1a1a] text-xl md:text-2xl font-semibold leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From dream destinations
              to real experiences, travel
              transforms ordinary
              moments into
              extraordinary stories.
              <span
                className="text-[#2d4a2d]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >"</span>
            </p>
          </div>
        </div>
  
        {/* Stats row */}
        <div className="relative z-20 mt-14 flex items-center justify-center gap-12 md:gap-20 pl-40 md:pl-60">
          {/* Stat 1 */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="text-3xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              10 +
            </span>
            <span className="text-xs text-[#555] tracking-wide uppercase">
              Group Journey
            </span>
          </div>
  
          {/* Divider */}
          <div className="w-px h-8 bg-[#ccc]" />
  
          {/* Stat 2 */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="text-3xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              100 +
            </span>
            <span className="text-xs text-[#555] tracking-wide uppercase">
              Shared Smiles
            </span>
          </div>
  
          {/* Divider */}
          <div className="w-px h-8 bg-[#ccc]" />
  
          {/* Stat 3 — infinity icon */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-[#1a1a1a]">∞</span>
            <span className="text-xs text-[#555] tracking-wide uppercase">
              Memories
            </span>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;