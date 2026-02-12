import { useRef } from 'react';

const trips = [
  {
    id: 1,
    title: 'Munnar Hills',
    description: 'The beautiful sunrise in the cloud',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=85',
  },
  {
    id: 2,
    title: 'Beach Paradise',
    description: 'Golden shores and crystal waters',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=85',
  },
  {
    id: 3,
    title: 'Desert Safari',
    description: 'Thrilling adventures in golden dunes',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&q=85',
  },
  {
    id: 4,
    title: 'Tropical Sunset',
    description: 'Palm trees and vibrant skies',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&q=85',
  },
  {
    id: 5,
    title: 'Island Escape',
    description: 'Turquoise waters and serenity',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=85',
  },
];

const TripsGallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className="w-full bg-white px-6 md:px-16 py-16 md:py-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Header */}
      <div className="text-center mb-4">
        <p className="text-[#888] text-xs tracking-widest uppercase mb-2">
          Trips We Love
        </p>
        <h2
          className="text-[#1a1a1a] text-3xl md:text-4xl font-bold leading-snug max-w-xl mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to make new friends and new memories?
        </h2>
        <p className="text-[#666] text-sm mt-3 max-w-md mx-auto">
          From misty hills to coastal sunsets, our trips capture the best of
          nature, culture, and connection.
        </p>
      </div>

      {/* Cards container */}
      <div className="relative mt-10">
        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {trips.map((trip, index) => {
            // Different heights for visual interest
            const heights = ['h-[360px]', 'h-[420px]', 'h-[360px]', 'h-[380px]', 'h-[400px]'];
            const cardHeight = heights[index % heights.length];

            return (
              <div
                key={trip.id}
                className={`relative flex-shrink-0 w-[280px] ${cardHeight} rounded-3xl overflow-hidden shadow-md group cursor-pointer`}
              >
                {/* Image */}
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1">
                  <h3
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {trip.title}
                  </h3>
                  <p className="text-white/70 text-xs">{trip.description}</p>

                  {/* Arrow icon */}
                  <button className="self-end w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mt-2 hover:bg-white/30 transition-all">
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
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-[#ccc] bg-white flex items-center justify-center hover:bg-[#2d4a2d] hover:border-[#2d4a2d] hover:text-white transition-all duration-200"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-[#ddd] rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-[#2d4a2d] rounded-full" />
          </div>

          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-[#ccc] bg-white flex items-center justify-center hover:bg-[#2d4a2d] hover:border-[#2d4a2d] hover:text-white transition-all duration-200"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TripsGallery;