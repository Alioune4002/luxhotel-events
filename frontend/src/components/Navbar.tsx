import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary-green text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-accent-gold text-3xl font-serif">LuxHotel Events</Link>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-accent-gold">Accueil</Link></li>
        <li><Link to="/chambres" className="hover:text-accent-gold">Chambres</Link></li>
        <li><Link to="/restaurant" className="hover:text-accent-gold">Restaurant</Link></li>
        <li><Link to="/evenements" className="hover:text-accent-gold">Événements</Link></li>
        <li><Link to="/contact" className="hover:text-accent-gold">Contact</Link></li>
        <li><Link to="/reserver" className="bg-accent-gold text-primary-green px-4 py-2 rounded-full font-bold hover:bg-yellow-300">Réserver</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;