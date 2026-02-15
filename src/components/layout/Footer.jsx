const Footer = () => {
  const quickLinks = ['Home', 'About Us', 'Packages', 'Gallery'];

  const socials = [
    { label: 'Instagram', icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
      </svg>
    )},
    { label: 'Facebook', icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )},
    { label: 'YouTube', icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
      </svg>
    )},
    { label: 'LinkedIn', icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
      </svg>
    )},
  ];

  return (
    <footer
      className="w-full bg-[#ffff] border-t border-[#e0ddd7] px-6 md:px-16 pt-12 pb-6"
      style={{ fontFamily: "'Urbanist', sans-serif" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-10 mb-10">

        {/* Col 1 — Logo + about */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <a href="/" className="flex items-center gap-1 group">
            <div className="w-[100px] md:w-[118px] h-auto rounded-full overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src="/icons/logo.png"
                alt="TravelTribe logo"
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          <p className="text-[#00000080] text-sm md:text-[20px] leading-relaxed max-w-[380px]">
            Milemakers has been bringing people from Kerala together through unforgettable
            group trips. We turn unknown faces into travel buddies, and travel buddies
            into lifelong memories.
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:mt-[100px]">
          <h4 className="text-[#1a1a1a] text-xs font-bold tracking-widest uppercase">
            Quick Links
          </h4>
          {quickLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[rgba(0,0,0,0.5)] text-xs hover:text-[#2d4a2d] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Col 3 — Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:mt-[100px]">
          <h4 className="text-[#1a1a1a] text-xs font-bold tracking-widest uppercase">
            Contact Info
          </h4>
          <p className="text-[rgba(0,0,0,0.5)] text-xs">+91 8281-797072</p>
          <p className="text-[rgba(0,0,0,0.5)] text-xs">Milemakers.in@gmail.com</p>
        </div>

        {/* Col 4 — Newsletter + Social */}
        <div className="flex flex-col items-center md:items-start gap-4 md:mt-[100px]">

          {/* Email subscribe */}
          <div className="w-full max-w-[260px] md:max-w-none flex items-center border border-[#d0cdc8] rounded-full overflow-hidden bg-white">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-2.5 text-xs bg-transparent outline-none text-[#333] placeholder:text-[#aaa]"
            />
            <button className="bg-[#000000] text-white text-xs font-semibold px-4 py-2.5 hover:bg-[#1e3320] transition-colors shrink-0">
              Subscribe
            </button>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-[#d0cdc8] bg-white flex items-center justify-center text-[#555] hover:bg-[#000000] hover:text-white hover:border-[#2d4a2d] transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#e0ddd7] pt-5 text-center">
        <p className="text-[#aaa] text-xs">
          © 2025 Milemakers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
