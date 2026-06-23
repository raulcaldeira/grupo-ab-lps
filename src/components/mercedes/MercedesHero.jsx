import React, { useState, useEffect, useRef } from 'react';
import mercedesExterior from '../../images/mercedes/mercedes-gle-exterior.png';

function MercedesHero() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formHeight, setFormHeight] = useState(660);
  const formRef = useRef(null);
  const iframeRef = useRef(null);

  const scrollToForm = () => {
    const el = document.getElementById('formulario');
    if (!el) return;
    const headerHeight = 64;
    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'form-submitted') {
        setFormSubmitted(true);
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead');
        }
        setTimeout(scrollToForm, 100);
      }
      if (event.data?.type === 'sfmc-form-height' && event.data?.height) {
        setFormHeight(event.data.height + 20);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <section id="hero" className="bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-mercedes-red/15 rounded-full blur-[120px] -translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-700/20 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4"></div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 py-8 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left - Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-mercedes-red font-semibold text-sm tracking-[0.2em] uppercase mb-3">Mercedes-AMG</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              A oferta que você{' '}
              <span className="text-mercedes-red">esperava chegou.</span>
            </h1>

            <div className="mb-5">
              <p className="text-gray-400 text-lg md:text-xl mb-1">Mercedes-AMG GLE 63 S 4MATIC+ Coupé</p>
            </div>

            {/* Mobile: Price + CTA */}
            <div className="lg:hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-4 text-center">
              <p className="text-gray-400 text-sm mb-1">A partir de</p>
              <p className="text-2xl font-extrabold text-white">R$ 1.149.900</p>
              <div className="mt-2 inline-flex items-center gap-2 bg-mercedes-red/20 text-mercedes-red px-3 py-1.5 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-bold text-sm">Blindagem Inclusa</span>
              </div>
            </div>
            <div className="lg:hidden mb-6">
              <button
                onClick={scrollToForm}
                className="w-full bg-mercedes-red text-white font-bold py-4 rounded-xl text-lg hover:bg-mercedes-red/90 transition-colors cursor-pointer"
              >
                Solicitar cotação agora
              </button>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={mercedesExterior}
                alt="Mercedes-AMG GLE 63 S 4MATIC+ Coupé"
                className="w-80 md:w-96 lg:w-[440px] rounded-xl"
              />
            </div>
          </div>

          {/* Right - Price + Form */}
          <div
            ref={formRef}
            id="formulario"
            className="w-full max-w-md lg:max-w-lg flex-shrink-0 scroll-mt-20"
          >
            {/* Price highlight */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-4 text-center">
              <p className="text-gray-400 text-sm mb-1">A partir de</p>
              <p className="text-3xl md:text-4xl font-extrabold text-white">
                R$ 1.149.900
              </p>
              <div className="mt-3 inline-flex items-center gap-2 bg-mercedes-red/20 text-mercedes-red px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-bold text-sm">Blindagem Inclusa</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl">
              <div className="bg-gradient-to-r from-gray-900 to-black px-6 py-4 rounded-t-2xl">
                <h2 className="text-white text-xl font-bold text-center">
                  {formSubmitted ? 'Obrigado!' : 'Solicite sua cotação'}
                </h2>
                {!formSubmitted && (
                  <p className="text-gray-400 text-sm text-center mt-1">
                    Preencha os dados abaixo e entraremos em contato
                  </p>
                )}
              </div>

              <div className="p-1">
                {!formSubmitted ? (
                  <iframe
                    ref={iframeRef}
                    src="https://mchyb-7yzb-g12z8ttz9nhyzyck1.pub.sfmc-content.com/nur1g5beaph"
                    title="Formulário de cotação Mercedes-AMG GLE 63"
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Inscrição realizada!</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Em breve um consultor da <strong className="text-gray-900">AB Intercar</strong> entrará em contato com sua cotação exclusiva do Mercedes-AMG GLE 63 S.
                    </p>
                    <div className="border-t border-gray-200 pt-5">
                      <p className="text-sm text-gray-500">
                        Enquanto isso, conheça mais sobre o veículo:
                      </p>
                      <a
                        href="https://www.grupoab.com.br/mercedes-benz/novos/amg-gle-63-4matic/?utm_source=globo&utm_medium=site_globo&utm_campaign=20260601_mercedes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-mercedes-red font-semibold hover:underline"
                      >
                        Ver detalhes do modelo
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
    </section>
  );
}

export default MercedesHero;
