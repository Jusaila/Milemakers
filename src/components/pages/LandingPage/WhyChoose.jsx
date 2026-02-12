const WhyChoose = () => {
    const features = [
      {

        description: 'Stranger-Friendly Trips Come solo, leave with a gang.',
      },
      {
  
        description:
          'Safe & Organized Well-planned stays, transport, and support throughout the journey.',
      },
      {
       
        description: 'Unique Destinations We mix famous spots with hidden gems.',
      },
      {
        
        description:
          'Memory-Filled Experiences Bonfires, road trips, group games, local food, and late-night talks.',
      },
    ];
  
    return (
      <section
        className="w-full bg-white px-6 md:px-16 py-16 md:py-20"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2
              className="text-[#1a1a1a] text-3xl md:text-[44px] font-bold leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose Milemakers?
            </h2>
            <p className="text-[#555] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              At Milemakers, we believe the best part of travel isn’t just the
              place — it’s the people you meet along the way.
            </p>
          </div>
  
          {/* Content */}
        <div className="flex items-center justify-center">

  {/* LEFT — Features */}
<div className="flex flex-col gap-7">
  {features.map((feature, index) => (
    <div key={index} className="flex items-start gap-4">
      {/* Bullet */}
      <span className="text-[#1a1a1a] text-xl leading-none mt-2">•</span>

      {/* Text */}
      <div>
       
        <p className="text-[#000000CC] text-sm md:text-[25px] leading-relaxed mt-1">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>


  {/* RIGHT — Video */}
<div className="relative w-full md:w-[746px]">
  <div className="relative rounded-3xl overflow-hidden shadow-lg">
    <video
      className="w-full h-[340px] md:h-[466px] object-cover"
      controls
      poster="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85"
    >
      <source src="/videos/milemakers.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>


</div>

        </div>
      </section>
    );
  };
  
  export default WhyChoose;
  