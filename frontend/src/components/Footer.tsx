import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-green text-white p-4 text-center mt-auto">  
      <p>&copy; 2025 LuxHotel Events By Alioune. Tous droits réservés.</p>
      <ul className="flex justify-center space-x-4 mt-2 flex-wrap">  
        <li><a href="#" className="hover:text-accent-gold">Facebook</a></li>
        <li><a href="#" className="hover:text-accent-gold">Instagram</a></li>
        <li><a href="#" className="hover:text-accent-gold">Twitter</a></li>
      </ul>
    </footer>
  );
};

export default Footer;