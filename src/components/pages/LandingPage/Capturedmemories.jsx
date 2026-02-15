const CapturedMemories = () => {
    const memories = [
      {
        id: 1,
        image: '/images/LandingPage/gallary/1.webp',
        name: 'Illikal kall',
        // message: 'Donating for you',
        rotation: '-rotate-6',
      },
      {
        id: 2,
        image: '/images/LandingPage/gallary/3.webp',
        name: 'Yellapetty',
        // message: 'Donating for you',
        rotation: 'rotate-3',
      },
      {
        id: 3,
        image: '/images/LandingPage/gallary/6.webp',
        name: 'Campfire',
        // message: 'Donating for you',
        rotation: '-rotate-2',
      },
      {
        id: 4,
        image: '/images/LandingPage/gallary/10.webp',
        name: 'Aanachadi kuth waterfall',
        // message: 'Donating for you',
        rotation: 'rotate-6',
      },
      {
        id: 5,
        image: '/images/LandingPage/gallary/12.webp',
        name: 'Maamalakandam',
        // message: 'Donating for you',
        rotation: '-rotate-3',
      },
    ];
  
    return (
      <section
        className="w-full bg-white px-6 md:px-16 py-16 md:py-24"
       style={{ fontFamily: "'Urbanist', sans-serif" }}

      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#888] text-xs tracking-widest uppercase mb-3">
              Captured Memories
            </p>
            <h2
              className="text-[#1a1a1a] text-3xl md:text-[48px] font-bold leading-tight mb-4"
              style={{ fontFamily: "'Urbanist', sans-serif" }}

            >
              Capture your Milemakers<br />Journey Forever
            </h2>
            <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Don't wait for the "perfect travel partner" Your next trip family is waiting for you.
            </p>
          </div>
  
          {/* Polaroid Cards Grid */}
          <div className="flex flex-wrap justify-center items-end gap-6 md:gap-4">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className={`flex flex-col bg-white shadow-xl ${memory.rotation} hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer`}
                style={{
                  padding: '16px 16px 20px 16px',
                  width: '260px',
                }}
              >
                {/* Image */}
                <div className="w-full h-[240px] bg-gray-200 overflow-hidden mb-4">
                  <img
                    src={memory.image}
                    alt={memory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
  
                {/* Stars */}
               
  
                {/* Text */}
                <div className="text-center">
                  <p className="text-[#1a1a1a] text-base font-bold mb-0.5">
                    {memory.name}
                  </p>
                  {/* <p className="text-[#666] text-sm italic">
                    {memory.message}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CapturedMemories;