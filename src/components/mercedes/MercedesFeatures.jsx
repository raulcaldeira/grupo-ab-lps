import React from 'react';
import mercedesInterior from '../../images/mercedes/mercedes-gle-interior.jpg';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '612 cv de potência',
    description: 'Motor V8 biturbo de 4.0L com 612 cv e 850 Nm de torque para uma performance brutal.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '0 a 100 km/h em 3,8s',
    description: 'Aceleração esportiva com a tecnologia AMG que leva a performance ao limite.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Blindagem inclusa',
    description: 'Proteção balística de fábrica para sua total segurança e tranquilidade no dia a dia.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    title: 'Tração 4MATIC+',
    description: 'Sistema de tração integral inteligente que distribui o torque de forma ideal em qualquer condição.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'MBUX de última geração',
    description: 'Sistema de infotainment com telas de alta resolução, comandos de voz e inteligência artificial.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Interior premium',
    description: 'Acabamento em couro Nappa, iluminação ambiente de 64 cores e bancos com ajuste elétrico.',
  },
];

function MercedesFeatures() {
  return (
    <section className="bg-gray-950 py-14 md:py-20">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
          Performance e luxo sem igual
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          O Mercedes-AMG GLE 63 S combina a brutalidade de um esportivo com o conforto de um SUV premium.
        </p>

        {/* Interior image showcase */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <img
            src={mercedesInterior}
            alt="Interior Mercedes-AMG GLE 63 S"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 py-6 border-y border-gray-800">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-mercedes-red">612 cv</p>
            <p className="text-sm text-gray-500 mt-1">de potência</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-mercedes-red">3,8s</p>
            <p className="text-sm text-gray-500 mt-1">0 a 100 km/h</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-mercedes-red">V8</p>
            <p className="text-sm text-gray-500 mt-1">biturbo<br />4.0L</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-mercedes-red">850 Nm</p>
            <p className="text-sm text-gray-500 mt-1">de torque</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-7 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-800 group"
            >
              <div className="w-12 h-12 bg-mercedes-red/10 text-mercedes-red rounded-lg flex items-center justify-center mb-4 group-hover:bg-mercedes-red group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MercedesFeatures;
