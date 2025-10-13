import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [ 
      { breakpoint: 768, settings: { arrows: false } },  
    ],
  };

  return (
    <div className="overflow-hidden"> 
      {/* Hero Section avec Slider */}
      <Slider {...settings}>
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/503016934/photo/entrance-of-luxury-hotel.jpg?s=612x612&w=0&k=20&c=DXFzucB2xWGf3PI6_yjhLKDvrFcGlOpOjXh6KDI8rqU="
            alt="Hôtel Luxueux"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80" /> 
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl font-serif text-accent-gold md:text-6xl sm:text-4xl">Bienvenue à LuxHotel Events</h1>
            <p className="text-2xl text-white mt-2 md:text-3xl sm:text-xl">Hôtellerie de luxe et événements inoubliables</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/1387884589/photo/table-setting-for-an-event.jpg?s=612x612&w=0&k=20&c=uKg6gBbqqB1PLN1dtuj0LAUFDlXSaOgevC0a9pa41H0="
            alt="Événements"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80" />  
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl font-serif text-accent-gold md:text-6xl sm:text-4xl">Événements d'Exception</h1>
            <p className="text-2xl text-white mt-2 md:text-3xl sm:text-xl">Organisez vos événements avec élégance</p>
          </div>
        </div>
      </Slider>

      {/* Section Facilities */}
      <section className="bg-bg-beige p-8">
        <h2 className="text-4xl font-serif text-primary-green text-center mb-8 md:text-5xl sm:text-3xl">Nos Installations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="https://media.gettyimages.com/id/1331465591/photo/3d-render-of-a-luxury-hotel-swimming-pool.jpg?s=612x612&w=gi&k=20&c=064FLlL7FKDbfRdsMJ7TgvOWP5dCy3Pn9xmcENR2374="
              alt="Piscine"
              className="mx-auto rounded w-full h-48 object-cover"
            />
            <p className="mt-4 text-text-dark">Piscine chauffée</p>
          </div>
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1155413611/photo/modern-interior-design-of-spa-sauna-concept-of-fine-living-relaxation-3d-rendering.jpg?s=612x612&w=0&k=20&c=APkwMRa_SNmnxMYMyVINUDahJF6TXdqjFqY99Z9lJMw="
              alt="Spa"
              className="mx-auto rounded w-full h-48 object-cover"
            />
            <p className="mt-4 text-text-dark">Spa de luxe</p>
          </div>
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1211886784/photo/modern-gym-interior-with-sport-and-fitness-equipment-fitness-center-interior-interior-workout.jpg?s=612x612&w=0&k=20&c=MCmLSxq-tDeh6XEDWPRewkLJr-FZR734sdNQ3wbExTc="
              alt="Salle de sport"
              className="mx-auto rounded w-full h-48 object-cover"
            />
            <p className="mt-4 text-text-dark">Salle de sport</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;