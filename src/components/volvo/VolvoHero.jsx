import React, { useState, useEffect, useRef } from 'react';
import volvoHero from '../../images/volvo/volvo-toda-linha.png';
import volvoLogo from '../../images/volvo/volvo-logo-white.png';

function VolvoHero() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formHeight, setFormHeight] = useState(660);
  const formRef = useRef(null);

  const scrollToForm = () => {
    const el = document.getElementById('formulario');
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
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
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section id="hero" className="bg-gray-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-volvo-blue/15 rounded-full blur-[120px] -translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-700/20 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4"></div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 py-8 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left - Content */}
          <div className="flex-1 text-center lg:text-left">
            <img src={volvoLogo} alt="Volvo" className="h-4 md:h-5 mb-4 mx-auto lg:mx-0" />
            <p className="text-volvo-blue font-semibold text-sm tracking-[0.2em] uppercase mb-3">Volvo Cars</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              A oferta que você{' '}
              <span className="text-volvo-blue">esperava chegou.</span>
            </h1>

            <div className="mb-5">
              <p className="text-gray-400 text-lg md:text-xl mb-1">Toda Linha Volvo</p>
            </div>

            {/* Offer highlight */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6 w-80 md:w-96 lg:w-[440px] mx-auto lg:mx-0 text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-1">Condições exclusivas</p>
              <p className="text-2xl md:text-3xl font-extrabold text-white">
                Taxa Zero
              </p>
              <p className="text-gray-400 text-base mt-1">ou Super Avaliação do Seu Seminovo</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-volvo-blue/20 text-volvo-blue px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-bold text-sm">Exclusividade AB Gotland</span>
              </div>
            </div>

            {/* Mobile: CTA to scroll to form */}
            <div className="lg:hidden mb-6">
              <button
                onClick={scrollToForm}
                className="w-full bg-volvo-blue text-white font-bold py-4 rounded-xl text-lg hover:bg-volvo-light transition-colors cursor-pointer"
              >
                Solicitar cotação agora
              </button>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-80 md:w-96 lg:w-[440px] h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden">
                <img
                  src={volvoHero}
                  alt="Toda Linha Volvo - AB Gotland"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 70%' }}
                />
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            ref={formRef}
            id="formulario"
            className="w-full max-w-md lg:max-w-lg flex-shrink-0 scroll-mt-20"
          >
            <div className="bg-white rounded-2xl shadow-2xl">
              <div className="bg-gradient-to-r from-volvo-blue to-volvo-light px-6 py-4 rounded-t-2xl">
                <h2 className="text-white text-xl font-bold text-center">
                  {formSubmitted ? 'Obrigado!' : 'Solicite sua cotação'}
                </h2>
                {!formSubmitted && (
                  <p className="text-blue-200 text-sm text-center mt-1">
                    Preencha os dados abaixo e entraremos em contato
                  </p>
                )}
              </div>

              <div className="p-1">
                {!formSubmitted ? (
                  <iframe
                    src="https://mchyb-7yzb-g12z8ttz9nhyzyck1.pub.sfmc-content.com/0v043ujro2p"
                    title="Formulário de cotação Volvo"
                    width="100%"
                    height={formHeight}
                    scrolling="no"
                    style={{ border: 'none', display: 'block', overflow: 'hidden' }}
                    allow="clipboard-write"
                  />
                ) : (
                  <div className="p-10 text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-volvo-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-volvo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Inscrição realizada!</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Em breve um consultor da <strong className="text-gray-900">AB Gotland</strong> entrará em contato com sua cotação exclusiva Volvo.
                    </p>
                    <div className="border-t border-gray-200 pt-5">
                      <p className="text-sm text-gray-500">
                        Enquanto isso, conheça mais sobre a linha Volvo:
                      </p>
                      <a
                        href="https://www.grupoab.com.br/volvo/novos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-volvo-blue font-semibold hover:underline"
                      >
                        Ver todos os modelos
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

export default VolvoHero;
