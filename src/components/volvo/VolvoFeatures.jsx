import React from 'react';
import volvoShowroom from '../../images/volvo/volvo-xc90-aerial.jpg';

const models = [
  {
    name: 'EX30',
    tagline: '100% elétrico, compacto e urbano',
    description: 'O SUV elétrico mais acessível da Volvo. Design compacto e tecnologia de ponta para o dia a dia.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'EX40',
    tagline: '100% elétrico com versatilidade',
    description: 'Performance elétrica com o espaço e conforto que você precisa. Autonomia e segurança Volvo.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'EC40',
    tagline: '100% elétrico, perfil coupé',
    description: 'Design coupé com motorização 100% elétrica. Estilo e sustentabilidade em um só veículo.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: 'XC60',
    tagline: 'O SUV premium mais vendido',
    description: 'Elegância escandinava, tecnologia avançada e segurança incomparável. O SUV que define a Volvo.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'XC90',
    tagline: 'Luxo e espaço para toda a família',
    description: 'O topo da linha Volvo. 7 lugares, acabamento premium e a melhor tecnologia de segurança do mundo.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    name: 'EX90',
    tagline: '100% elétrico, 7 lugares',
    description: 'O futuro da Volvo. SUV elétrico de 7 lugares com tecnologia LiDAR e autonomia excepcional.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function VolvoFeatures() {
  return (
    <section className="bg-gray-950 py-14 md:py-20">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
          Conheça toda a linha Volvo
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Design escandinavo, segurança incomparável e tecnologia de ponta. Escolha o Volvo ideal para você.
        </p>

        {/* Showcase image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <img
            src={volvoShowroom}
            alt="Volvo XC90 - Linha completa Volvo"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 py-6 border-y border-gray-800">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-volvo-blue">6</p>
            <p className="text-sm text-gray-500 mt-1">modelos disponíveis</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-volvo-blue">Taxa 0%</p>
            <p className="text-sm text-gray-500 mt-1">de financiamento</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-volvo-blue">4</p>
            <p className="text-sm text-gray-500 mt-1">modelos<br />100% elétricos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-volvo-blue">5 estrelas</p>
            <p className="text-sm text-gray-500 mt-1">Euro NCAP</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-7 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-800 group"
            >
              <div className="w-12 h-12 bg-volvo-blue/10 text-volvo-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-volvo-blue group-hover:text-white transition-colors">
                {model.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{model.name}</h3>
              <p className="text-volvo-blue text-sm font-semibold mb-2">{model.tagline}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VolvoFeatures;
