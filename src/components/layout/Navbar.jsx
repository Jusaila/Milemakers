const Navbar = () => {
    const navLinks = ['About Us', 'Destinations', 'Packages', 'Contact'];
  
    return (
      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-[118px] h-[136px] rounded-full overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img
              src="/icons/logo.png"
              alt="TravelTribe logo"
              className="w-full h-full object-contain"
            />
          </div>

          
        </a>
  
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/80 hover:text-white text-sm font-medium px-4 py-1 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {link}
            </a>
          ))}
        </div>
  
        {/* Book Now Button */}
        <button className="flex items-center gap-2 bg-white text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-white/90 active:scale-95 transition-all duration-200 shadow-lg">
          Book now
          <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </button>
      </nav>
    );
  };
  
  export default Navbar;