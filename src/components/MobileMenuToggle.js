// MobileMenuToggle.js
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

const MobileMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Toggle button */}
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleMenu}
      >
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && <MobileMenu />}
    </div>
  );
};

export default MobileMenuToggle;
