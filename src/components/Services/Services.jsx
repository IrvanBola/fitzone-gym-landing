import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🏋️‍♂️',
      title: 'Entrenamiento Personal',
      description: 'Rutinas personalizadas con entrenadores certificados para maximizar tus resultados.',
      features: ['Plan personalizado', '1:1 con entrenador', 'Seguimiento constante']
    },
    {
      icon: '🤸‍♀️',
      title: 'Clases Grupales',
      description: 'Variedad de clases dinámicas y divertidas para todos los niveles de condición física.',
      features: ['Yoga', 'CrossFit', 'Zumba', 'Spinning']
    },
    {
      icon: '💪',
      title: 'Musculación',
      description: 'Área completa de pesas libres y máquinas de última generación para construcción muscular.',
      features: ['Pesas libres', 'Máquinas modernas', 'Zona funcional']
    },
    {
      icon: '🏃‍♂️',
      title: 'Cardio Zone',
      description: 'Equipos cardiovasculares de alta tecnología para mejorar tu resistencia y quemar grasa.',
      features: ['Caminadoras', 'Elípticas', 'Bicicletas', 'Remo']
    },
    {
      icon: '🥗',
      title: 'Nutrición',
      description: 'Asesoría nutricional personalizada para complementar tu entrenamiento y lograr tus metas.',
      features: ['Plan nutricional', 'Seguimiento', 'Recetas saludables']
    },
    {
      icon: '🧘‍♀️',
      title: 'Zona de Relajación',
      description: 'Espacios dedicados al bienestar, recuperación y relajación post-entrenamiento.',
      features: ['Sauna', 'Jacuzzi', 'Área de estiramientos']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Nuestros <span className="text-orange-500">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre todo lo que FitZone tiene para ofrecerte
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-orange-500 font-bold mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;