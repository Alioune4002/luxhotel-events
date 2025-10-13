import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="https://source.unsplash.com/random/1920x800/?luxury-hotel"
        alt="Hôtel Luxueux"
        className="w-full h-96 object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl font-serif text-accent-gold">Bienvenue à LuxHotel Events</h1>
        <p className="text-2xl text-white mt-2">Hôtellerie de luxe et événements inoubliables</p>
      </div>
    </div>
  );
};

export default Hero; 