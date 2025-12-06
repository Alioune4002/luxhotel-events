import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/chambres', label: 'Chambres' },
    { to: '/restaurant', label: 'Restaurant' },
    { to: '/evenements', label: 'Événements' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-primary-green text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-accent-gold text-2xl sm:text-3xl font-serif">
          LuxHotel Events
        </Link>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1 focus:outline-none"
          aria-label="Ouvrir le menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block h-0.5 w-6 bg-white rounded" />
          <span className="block h-0.5 w-6 bg-white rounded" />
          <span className="block h-0.5 w-6 bg-white rounded" />
        </button>

        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="hover:text-accent-gold transition-colors">
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/reserver"
              className="bg-accent-gold text-primary-green px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              Réserver
            </Link>
          </li>
        </ul>
      </div>

      <div className={`md:hidden px-4 sm:px-6 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-3">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 border-b border-white/20 hover:text-accent-gold transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/reserver"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-accent-gold text-primary-green px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              Réserver
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
