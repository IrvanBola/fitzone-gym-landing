import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <div className="nav-brand">
          <h2 className="text-white text-3xl font-bold">FIT<span className="text-orange-500">ZONE</span></h2>
        </div>
        
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-black/98 md:bg-transparent transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row md:gap-8 p-8 md:p-0">
            <li><button onClick={() => scrollToSection('home')} className="text-white hover:text-orange-500 font-medium py-2 md:py-0 transition-colors duration-300 text-lg md:text-base border-b border-white/10 md:border-none w-full md:w-auto text-left">Inicio</button></li>
            <li><button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-500 font-medium py-2 md:py-0 transition-colors duration-300 text-lg md:text-base border-b border-white/10 md:border-none w-full md:w-auto text-left">Nosotros</button></li>
            <li><button onClick={() => scrollToSection('services')} className="text-white hover:text-orange-500 font-medium py-2 md:py-0 transition-colors duration-300 text-lg md:text-base border-b border-white/10 md:border-none w-full md:w-auto text-left">Servicios</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-500 font-medium py-2 md:py-0 transition-colors duration-300 text-lg md:text-base w-full md:w-auto text-left">Contacto</button></li>
          </ul>
        </nav>

        <button className="md:hidden flex flex-col p-2" onClick={toggleMenu}>
          <span className="w-6 h-0.5 bg-white mb-1 transition-all duration-300 rounded"></span>
          <span className="w-6 h-0.5 bg-white mb-1 transition-all duration-300 rounded"></span>
          <span className="w-6 h-0.5 bg-white transition-all duration-300 rounded"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;