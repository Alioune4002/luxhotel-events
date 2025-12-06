import React from 'react';

const Restaurant: React.FC = () => {
  return (
    <section className="bg-bg-beige px-4 sm:px-6 md:px-10 py-10">
      <h2 className="text-3xl sm:text-4xl font-serif text-primary-green text-center mb-8 md:text-5xl">
        Notre Restaurant
      </h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src="https://media.architecturaldigest.com/photos/66c8923688f5dc5cc31e1e35/16:9/w_2560%2Cc_limit/CH_BAD_ROMAN_NYC_ROUND_1_020323952A.jpg"
          alt="Restaurant"
          className="w-full md:w-1/2 rounded-xl h-64 object-cover shadow"
        />
        <div className="md:w-1/2 space-y-3 text-center md:text-left">
          <p className="text-text-dark">
            Découvrez une cuisine européenne raffinée dans un cadre élégant.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text-dark">
            <li>Entrées gastronomiques</li>
            <li>Plats principaux de saison</li>
            <li>Desserts exquis</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
