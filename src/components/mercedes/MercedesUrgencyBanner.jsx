import React from 'react';

function MercedesUrgencyBanner() {
  const scrollToForm = () => {
    const el = document.getElementById('formulario');
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setTimeout(() => {
      el.classList.add('animate-form-pulse');
      el.addEventListener('animationend', () => el.classList.remove('animate-form-pulse'), { once: true });
    }, 700);
  };

  return (
    <section className="bg-gray-950 pt-4 pb-12 md:pt-6 md:pb-16">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-mercedes-red to-red-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="text-center md:text-left relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Exclusividade AB Intercar
            </h2>
            <p className="text-red-100 text-lg max-w-xl leading-relaxed">
              A sua Mercedes-Benz no Rio de Janeiro. Condições especiais por tempo limitado com blindagem inclusa.
            </p>
          </div>
          <button
            onClick={scrollToForm}
            className="relative z-10 bg-white text-gray-900 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all text-lg shadow-lg whitespace-nowrap cursor-pointer"
          >
            Quero minha cotação
          </button>
        </div>
      </div>
    </section>
  );
}

export default MercedesUrgencyBanner;
