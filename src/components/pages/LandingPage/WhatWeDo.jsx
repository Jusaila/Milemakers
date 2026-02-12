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
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8">
  
          {/* LEFT — Quote + Reviews */}
          <div className="w-full md:w-[340px] flex flex-col gap-6 pt-8 shrink-0">
            {/* Quote */}
            <h2
              className="text-[#1a1a1a] text-3xl md:text-[55px] font-bold leading-[1.2]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              " The Perfect Travel Partner for you and your Family "
            </h2>
  
            {/* Review section */}
            <div className="flex flex-col gap-3">
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/150?img=1"
                  alt="Reviewer"
                  className="w-11 h-11 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://i.pravatar.cc/150?img=5"
                  alt="Reviewer"
                  className="w-11 h-11 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://i.pravatar.cc/150?img=9"
                  alt="Reviewer"
                  className="w-11 h-11 rounded-full border-2 border-white object-cover"
                />
                {/* Green plus badge */}
                <div className="w-11 h-11 rounded-full bg-[#4ade80] border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                  50+
                </div>
              </div>
              
              {/* Text below avatars */}
              <div className="flex items-center gap-1.5 text-base font-semibold">
                <span className="text-[#1a1a1a]">50+</span>
                <span className="text-[#f59e0b] underline decoration-2 underline-offset-2">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
  
          {/* CENTER — Image with logo overlapping bottom-left */}
          <div className="relative flex-shrink-0">
            {/* Main image card */}
            <div className="w-[280px] md:w-[419px] h-[450px] md:h-[700px] rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src="/images/LandingPage/whatwedo.webp"
                alt="Friends hiking on mountain"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Logo badge — positioned at bottom-left, overlapping the image */}
            <div className="absolute -bottom-6 left-4 flex items-center gap-2.5 bg-white rounded-full shadow-lg pl-1 pr-4 py-1">
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-100">
                <img
                  src="/icons/logo.webp"
                  alt="Mile Makers Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
             
            </div>
          </div>
  
          {/* RIGHT — What We Do section */}
          <div className="w-full md:w-[380px] flex flex-col gap-4 pt-8 shrink-0">
            <h3
              className="text-[#000000] text-3xl md:text-[55px] font-bold leading-[1.2]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We Do
            </h3>
  
            <p className="text-[#000000CC] text-base md:text-lg leading-relaxed">
              We organize curated group travel experiences for people who love
              exploring new places — even if they don't have a travel partner.
            </p>
  
            <p className="text-[#000000CC] text-base md:text-lg leading-relaxed">
              Whether you're coming solo or with a friend, our trips are designed so
              everyone feels included, safe, and connected.
            </p>
  
            {/* Bullet points */}
            <ul className="flex flex-col gap-3 mt-2">
              {features.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[#000000CC] text-base md:text-lg"
                >
                  <span className="text-[#4ade80] text-xl leading-none mt-0.5">•</span>
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