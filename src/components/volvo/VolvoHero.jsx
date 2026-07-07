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
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-4">
              <img src={volvoLogo} alt="Volvo" className="h-4 md:h-5" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Descubra qual Volvo<br />
              <span className="text-volvo-blue">foi feito para você.</span>
            </h1>

            <div className="mb-5">
              <p className="text-gray-400 text-lg md:text-xl mb-1">Agende seu test-drive exclusivo no Rio de Janeiro e experimente toda a linha Volvo.</p>
            </div>

            {/* Mobile: CTA to scroll to form */}
            <div className="lg:hidden mb-6">
              <button
                onClick={scrollToForm}
                className="w-full bg-volvo-blue text-white font-bold py-4 rounded-xl text-lg hover:bg-volvo-light transition-colors cursor-pointer"
              >
                Agendar meu test-drive
              </button>
            </div>

            {/* Hero Image */}
            <div className="w-full h-64 md:h-80 lg:h-[370px] rounded-xl overflow-hidden">
              <img
                src={volvoHero}
                alt="Toda Linha Volvo - AB Gotland"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 55%' }}
              />
            </div>

            {/* Test-drive badge card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mt-6 w-full text-left flex flex-col gap-2">
              <p className="text-volvo-blue font-bold text-sm tracking-widest uppercase">Test-drive exclusivo</p>
              <p className="text-white text-sm font-medium">Escolha o modelo que preferir. Um test-drive exclusivo, preparado sob medida para você por nossos consultores dedicados.</p>
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
                  {formSubmitted ? 'Obrigado!' : 'Agende seu test-drive'}
                </h2>
                {!formSubmitted && (
                  <p className="text-blue-200 text-sm text-center mt-1">
                    Em breve um consultor entrará em contato com você
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Enviado com sucesso!</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Em breve um consultor da <strong className="text-gray-900">AB Gotland</strong> entrará em contato com sua cotação exclusiva Volvo.
                    </p>
                    <div className="border-t border-gray-200 pt-5">
                      <p className="text-sm text-gray-500">
                        Enquanto isso, conheça mais sobre a linha Volvo:
                      </p>
                      <a
                        href="https://www.grupoab.com.br/volvo/novos/?utm_source=globo&utm_medium=site_globo&utm_campaign=20260601_volvo"
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
