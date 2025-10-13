import React from 'react';

const Restaurant: React.FC = () => {
  return (
    <section className="bg-bg-beige p-8">
      <h2 className="text-4xl font-serif text-primary-green text-center mb-8 md:text-5xl sm:text-3xl">Notre Restaurant</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src="https://media.architecturaldigest.com/photos/66c8923688f5dc5cc31e1e35/16:9/w_2560%2Cc_limit/CH_BAD_ROMAN_NYC_ROUND_1_020323952A.jpg"
          alt="Restaurant"
          className="w-full md:w-1/2 rounded h-64 object-cover"
        />
        <div className="md:w-1/2">
          <p className="text-text-dark mb-4">Découvrez une cuisine européenne raffinée dans un cadre élégant.</p>
          <ul className="list-disc pl-6">
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