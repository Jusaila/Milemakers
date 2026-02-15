import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ['Home', 'About Us', 'Destinations', 'Packages', 'Contact'];

  // ✅ YOUR ORIGINAL GLASS — unchanged
  const glassClass = `
    relative
    bg-white/15
    backdrop-blur-[6px]
    rounded-full
    border border-white/10
    shadow-[0_8px_13px_rgba(0,0,0,0.25)]
    before:content-['']
    before:absolute
    before:inset-0
    before:rounded-full
    before:pointer-events-none
    before:shadow-[-1px_-3px_4px_rgba(255,255,255,0.4)_inset]
    after:content-['']
    after:absolute
    after:inset-0
    after:rounded-full
    after:pointer-events-none
    after:shadow-[4px_5px_6px_rgba(255,255,255,0.4)_inset]
  `;

  return (
    <nav className="absolute top-6 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <img
          src="/icons/logo-white.png"
          alt="Milemakers logo"
          className="w-[120px]"
        />

        {/* DESKTOP MENU — unchanged */}
        <div
          className={`
            hidden md:flex items-center gap-8
            px-10 py-4
            mx-auto
            ${glassClass}
          `}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-base font-medium opacity-90 hover:opacity-100 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* DESKTOP BOOK — unchanged */}
        <button
          className={`
            hidden md:flex items-center gap-3
            px-5 py-2.5
            text-white text-sm font-medium
            rounded-full
            ${glassClass}
            hover:bg-white/15
            transition
          `}
        >
          Book now
          <span className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </button>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-white"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU — clean bar (NEW) */}
      <div
        className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="mx-6 bg-white/15 backdrop-blur-[6px] border border-white/10 rounded-2xl shadow-[0_8px_13px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col divide-y divide-white/10">

            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setOpen(false)}
                className="px-5 py-4 text-white text-sm font-medium hover:bg-white/10 transition"
              >
                {link}
              </a>
            ))}

            {/* MOBILE BOOK */}
            <button
              className="flex items-center justify-between px-5 py-4 text-white text-sm font-semibold hover:bg-white/10 transition"
              onClick={() => setOpen(false)}
            >
              Book now
              <span className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
