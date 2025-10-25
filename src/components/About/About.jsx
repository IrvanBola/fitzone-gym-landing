import React from 'react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Miembros Activos' },
    { number: '15+', label: 'Entrenadores Certificados' },
    { number: '5', label: 'Años de Experiencia' },
    { number: '24/7', label: 'Acceso al Gimnasio' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
                Sobre <span className="text-orange-500">FitZone</span>
              </h2>
              <p className="text-xl text-gray-600">
                Tu destino fitness de confianza
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                En FitZone creemos que el fitness es más que solo ejercicio - es un estilo de vida. 
                Desde nuestra apertura, nos hemos dedicado a crear un ambiente donde cada persona 
                puede alcanzar sus objetivos de salud y bienestar.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Contamos con instalaciones de última generación, equipos modernos y un equipo de 
                entrenadores altamente calificados que te acompañarán en cada paso de tu 
                transformación física y mental.
              </p>

              <div className="space-y-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    🎯 Misión
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Transformar vidas a través del fitness, proporcionando las mejores instalaciones y apoyo profesional.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    👁️ Visión
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Ser el gimnasio líder de la región, reconocido por nuestros resultados excepcionales y comunidad unida.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Gimnasio FitZone"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 p-12 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <h3 className="text-4xl lg:text-5xl font-black mb-2 drop-shadow-lg">
                  {stat.number}
                </h3>
                <p className="text-lg font-medium text-white/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;