import React, { useState, useEffect, useRef } from 'react';
import { MODELS } from './mercedesData';
import gleExterior from '../../images/mercedes/mercedes-gle-exterior.png';

function MercedesHero({ selectedModelId, onSelectModel }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formHeight, setFormHeight] = useState(660);
  const formRef = useRef(null);

  const model = MODELS.find((m) => m.id === selectedModelId);
  const heroImage = model.heroImageUrl ?? gleExterior;

  const scrollToForm = (modelId) => {
    if (modelId) onSelectModel(modelId);
    setTimeout(() => {
      const el = document.getElementById('formulario');
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setTimeout(() => {
        el.classList.add('animate-form-pulse');
        el.addEventListener('animationend', () => el.classList.remove('animate-form-pulse'), { once: true });
      }, 600);
    }, 50);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'form-submitted') {
        setFormSubmitted(true);
        if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
      }
      if (event.data?.type === 'sfmc-form-height' && event.data?.height) {
        setFormHeight(event.data.height + 20);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section className="bg-black">
      {/* ── Intro banner ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-mercedes-red/10 rounded-full blur-[140px] -translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gray-700/15 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        </div>
        <div className="max-w-content mx-auto px-4 sm:px-6 pt-10 pb-6 text-center relative z-10">
          <p className="text-mercedes-red font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            AB Intercar Mercedes-Benz · Botafogo RJ
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Escolha o seu SUV Mercedes-Benz<br />
            <span className="text-mercedes-red">e agende seu test-drive exclusivo.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Três modelos premium disponíveis agora. Compare, escolha e viva a experiência ao volante com nossos consultores dedicados.
          </p>
        </div>
      </div>

      {/* ── 3 model cards ── */}
      <div className="max-w-content mx-auto px-4 sm:px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {MODELS.map((m) => {
            const img = m.heroImageUrl ?? gleExterior;
            const isSelected = m.id === selectedModelId;
            return (
              <button
                key={m.id}
                onClick={() => scrollToForm(m.id)}
                className={`group relative rounded-2xl overflow-hidden text-left transition-all duration-300 cursor-pointer border-2 ${
                  isSelected
                    ? 'border-mercedes-red shadow-[0_0_30px_rgba(155,27,48,0.4)]'
                    : 'border-white/10 hover:border-mercedes-red/50 hover:shadow-[0_0_20px_rgba(155,27,48,0.2)]'
                }`}
              >
                {/* Badge "Selecionado" */}
                {isSelected && (
                  <div className="absolute top-3 right-3 z-20 bg-mercedes-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Selecionado
                  </div>
                )}

                {/* Car image */}
                <div className="relative bg-gradient-to-b from-gray-900 to-black h-56 md:h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src={img}
                    alt={m.name}
                    className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(10,10,10)_85%)] pointer-events-none" />
                </div>

                {/* Info */}
                <div className="bg-gray-950 p-5 border-t border-white/5">
                  <p className="text-mercedes-red text-xs font-bold tracking-widest uppercase mb-1">{m.badge}</p>
                  <h2 className="text-white font-extrabold text-xl mb-1">{m.name}</h2>
                  <p className="text-gray-400 text-sm mb-4 leading-snug">{m.tagline}</p>

                  {/* Key specs — 2 destaque */}
                  <div className="flex gap-4 mb-4">
                    <div>
                      <p className="text-mercedes-red font-extrabold text-lg leading-none">{m.stats[0].value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{m.stats[0].label}</p>
                    </div>
                    <div className="w-px bg-gray-800" />
                    <div>
                      <p className="text-mercedes-red font-extrabold text-lg leading-none">{m.stats[1].value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{m.stats[1].label}</p>
                    </div>
                    <div className="w-px bg-gray-800" />
                    <div>
                      <p className="text-white font-bold text-sm leading-none">{m.price}</p>
                      <p className="text-gray-500 text-xs mt-0.5">a partir de</p>
                    </div>
                  </div>

                  <div
                    className={`w-full text-center text-sm font-bold py-3 rounded-xl transition-colors ${
                      isSelected
                        ? 'bg-mercedes-red text-white'
                        : 'bg-white/5 text-gray-300 group-hover:bg-mercedes-red group-hover:text-white'
                    }`}
                  >
                    {isSelected ? 'Preencher formulário ↓' : `Quero testar o ${m.shortName}`}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Form section ── */}
      <div className="bg-gray-950 border-t border-white/5">
        <div
          ref={formRef}
          id="formulario"
          className="max-w-content mx-auto px-4 sm:px-6 py-10 md:py-14 scroll-mt-20"
        >
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
            {/* Left — selected model summary */}
            <div className="flex-1 flex flex-col">
              <p className="text-mercedes-red font-semibold text-sm tracking-[0.2em] uppercase mb-3">{model.badge}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                {model.tagline}<br />
                <span className="text-mercedes-red">{model.name}</span>
              </h2>
              <p className="text-gray-400 text-base mb-6 max-w-md">{model.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {model.stats.map((stat, i) => (
                  <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                    <p className="text-mercedes-red font-extrabold text-2xl">{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Car image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-b from-gray-900 to-black">
                <img
                  src={heroImage}
                  alt={model.name}
                  className="w-full object-contain"
                  style={{ height: 240 }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(10,10,10)_85%)] pointer-events-none" />
              </div>

              {/* Exclusivity note — mt-auto empurra para o fundo da coluna */}
              <div className="mt-auto bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3">
                <div className="w-2 flex-shrink-0 bg-mercedes-red rounded-full" />
                <div>
                  <p className="text-white font-bold text-sm">Test-drive exclusivo — {model.name}</p>
                  <p className="text-gray-400 text-sm mt-0.5">Preparado sob medida por nossos consultores dedicados da AB Intercar Botafogo.</p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="w-full max-w-md lg:max-w-lg flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-2xl">
                <div className="bg-gradient-to-r from-gray-900 to-black px-6 py-4 rounded-t-2xl">
                  <h3 className="text-white text-xl font-bold text-center">
                    {formSubmitted ? 'Obrigado!' : `Agende seu test-drive — ${model.shortName}`}
                  </h3>
                  {!formSubmitted && (
                    <p className="text-gray-400 text-sm text-center mt-1">
                      Em breve um consultor entrará em contato com você
                    </p>
                  )}
                </div>
                <div className="p-1">
                  {!formSubmitted ? (
                    <iframe
                      src="https://mchyb-7yzb-g12z8ttz9nhyzyck1.pub.sfmc-content.com/nur1g5beaph"
                      title={`Formulário de test-drive ${model.name}`}
                      width="100%"
                      height={formHeight}
                      scrolling="no"
                      style={{ border: 'none', display: 'block', overflow: 'hidden' }}
                      allow="clipboard-write"
                    />
                  ) : (
                    <div className="p-10 text-center animate-fade-in-up">
                      <div className="w-16 h-16 bg-mercedes-red/10 rounded-full flex items-center justify-center mx-auto mb-5">
                        <svg className="w-8 h-8 text-mercedes-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Enviado com sucesso!</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Em breve um consultor da <strong className="text-gray-900">AB Intercar</strong> entrará em
                        contato para agendar seu test-drive do{' '}
                        <strong className="text-gray-900">{model.name}</strong>.
                      </p>
                      <div className="border-t border-gray-200 pt-5">
                        <p className="text-sm text-gray-500">Enquanto isso, conheça mais sobre o veículo:</p>
                        <a
                          href={model.dealerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-mercedes-red font-semibold hover:underline"
                        >
                          Ver detalhes do {model.shortName}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MercedesHero;
