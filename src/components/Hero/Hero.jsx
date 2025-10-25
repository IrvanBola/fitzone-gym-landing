import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="w-full h-full flex items-center">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              TRANSFORMA TU <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">CUERPO</span>
              <br />
              TRANSFORMA TU <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">VIDA</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 leading-relaxed opacity-90 max-w-3xl mx-auto">
              Únete a FitZone y descubre el gimnasio más moderno de la ciudad. 
              Equipos de última generación, entrenadores certificados y un ambiente 
              motivador te esperan para alcanzar tus objetivos fitness.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold uppercase tracking-wide min-w-48 hover:from-orange-600 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Únete Ahora
              </button>
              <button 
                className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-full text-lg font-semibold uppercase tracking-wide min-w-48 hover:bg-white hover:text-gray-800 transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => {
                  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Servicios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;