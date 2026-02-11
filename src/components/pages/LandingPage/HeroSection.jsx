import { useEffect, useRef } from 'react';

const cards = [
  {
    id: 1,
    title: 'Jungle Kayaking',
    location: 'Meghalaya',
    img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80',
  },
  {
    id: 2,
    title: 'Deep Sea Diving',
    location: 'Lakshadweep',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
  },
  {
    id: 3,
    title: 'Desert Safari',
    location: 'Rajasthan',
    img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80',
  },
  {
    id: 4,
    title: 'River Rafting',
    location: 'Rishikesh',
    img: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=400&q=80',
  },
  {
    id: 5,
    title: 'Snow Trekking',
    location: 'Himachal Pradesh',
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
  },
  {
    id: 6,
    title: 'Backwater Cruise',
    location: 'Kerala',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80',
  },
];

const allCards = [...cards, ...cards, ...cards];

const CARD_WIDTH = 190;
const GAP = 14;
const STEP = CARD_WIDTH + GAP;
const TOTAL_WIDTH = STEP * cards.length;
const SPEED = 0.55;

const HeroSection = () => {
  const trackRef = useRef(null);
  const animFrameRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= TOTAL_WIDTH) {
          posRef.current = 0;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1600&q=90')",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

      <div className="relative z-10 h-full flex items-center pt-40">
        <div className="flex items-center w-full">

          {/* ── LEFT TEXT — 55% width, more padding ── */}
          <div className="w-full md:w-[55%] px-10 md:px-20 flex flex-col gap-6 shrink-0">

            {/* Tag */}
            <span
              className="inline-flex items-center gap-2 text-amber-300 text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="w-6 h-px bg-amber-300 inline-block" />
              Kerala's Group Travel Community
            </span>

            {/* Headline — both phrases on ONE line each, no wrapping */}
            <h1
              className="text-white font-bold leading-[1.15]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 3.8vw, 3.5rem)',
                whiteSpace: 'nowrap',
              }}
            >
              Travel with Strangers.
              <br />
              <span className="text-amber-300">Return with Stories.</span>
            </h1>

            {/* Body */}
            <p
              className="text-white/65 text-sm leading-relaxed max-w-[400px]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Since August 2, 2025, Milemakers has been bringing people from
              Kerala together through unforgettable group trips. We turn unknown
              faces into travel buddies, and travel buddies into lifelong memories.
            </p>

            {/* CTA */}
            <button
              className="self-start flex items-center gap-3 border border-white/40 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Join the Next Trip
              <span className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </button>
          </div>

          {/* ── RIGHT CARDS — fade mask on both sides ── */}
          <div
            className="flex-1 overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 78%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 78%, transparent 100%)',
            }}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
          >
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{ gap: `${GAP}px`, width: `${STEP * allCards.length}px` }}
            >
              {allCards.map((card, i) => (
                <div
                  key={`${card.id}-${i}`}
                  className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
                  style={{ width: `${CARD_WIDTH}px`, height: '260px' }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3.5">
                    <p
                      className="text-white font-bold text-sm leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {card.title}
                    </p>
                    <p
                      className="text-white/55 text-xs mt-0.5 flex items-center gap-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <svg className="w-2.5 h-2.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                      </svg>
                      {card.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom counter */}
      {/* <div className="absolute bottom-8 w-full flex items-center justify-between px-10 md:px-20">
        <div
          className="flex items-center gap-3 text-white/30 text-xs tracking-widest uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <span>{cards.length} Destinations</span>
          <span className="w-20 h-px bg-white/20 inline-block" />
        </div>
        <span
          className="text-white/10 font-bold select-none"
          style={{ fontSize: '5.5rem', lineHeight: 1, fontFamily: "'Playfair Display', serif" }}
        >
          01
        </span>
      </div> */}
    </section>
  );
};

export default HeroSection;