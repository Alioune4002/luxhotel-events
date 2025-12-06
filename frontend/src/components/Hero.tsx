import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="https://source.unsplash.com/random/1920x800/?luxury-hotel"
        alt="Hôtel Luxueux"
        className="w-full h-[60vh] md:h-[70vh] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-accent-gold">
          Bienvenue à LuxHotel Events
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mt-3">
          Hôtellerie de luxe et événements inoubliables
        </p>
      </div>
    </div>
  );
};

export default Hero; 
