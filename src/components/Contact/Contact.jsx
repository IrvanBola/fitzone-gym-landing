import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar con Firebase o tu backend
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            ¡Únete a <span className="text-orange-500">FitZone</span>!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a comenzar tu transformación
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Ubicación</h3>
              <p className="text-gray-600 leading-relaxed">
                Av. Principal 123<br/>Centro, Ciudad<br/>CP 12345
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Teléfono</h3>
              <p className="text-gray-600 leading-relaxed">
                +1 (555) 123-4567<br/>+1 (555) 765-4321
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Email</h3>
              <p className="text-gray-600 leading-relaxed">
                info@fitzone.com<br/>contacto@fitzone.com
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Horarios</h3>
              <p className="text-gray-600 leading-relaxed">
                Lun - Vie: 5:00 - 23:00<br/>Sáb - Dom: 6:00 - 22:00
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
                Solicita Información
              </h3>
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl font-medium bg-gray-50 focus:bg-white focus:border-orange-500 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl font-medium bg-gray-50 focus:bg-white focus:border-orange-500 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl font-medium bg-gray-50 focus:bg-white focus:border-orange-500 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="¿En qué te podemos ayudar? (Membresías, horarios, servicios, etc.)"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl font-medium bg-gray-50 focus:bg-white focus:border-orange-500 focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full text-lg font-semibold uppercase tracking-wide hover:from-orange-600 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;