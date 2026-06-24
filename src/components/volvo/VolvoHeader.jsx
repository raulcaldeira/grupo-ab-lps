import React from 'react';
import logoEditoraGlobo from '../../images/logo-editora-globo.png';
import logoAutoesporte from '../../images/logo-autoesporte.svg';
import abGotlandLogo from '../../images/volvo/ab-gotland-logo.png';
import volvoLogo from '../../images/volvo/volvo-logo-white.png';

function VolvoHeader() {
  const scrollToForm = () => {
    const el = document.getElementById('formulario');
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <img src={logoEditoraGlobo} alt="Editora Globo" className="h-7 md:h-9" />
          <div className="w-px h-6 bg-gray-300"></div>
          <img src={logoAutoesporte} alt="Autoesporte" className="h-7 md:h-9" />
        </div>
        <div className="flex items-center gap-4">
          <img src={abGotlandLogo} alt="AB Gotland" className="h-3.5 md:h-4 hidden sm:block invert" />
          <div className="w-px h-5 bg-gray-300 hidden sm:block"></div>
          <img src={volvoLogo} alt="Volvo" className="w-28 md:w-32 hidden sm:block invert" />
          <button
            onClick={scrollToForm}
            className="bg-volvo-blue text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-volvo-light transition-colors cursor-pointer"
          >
            Solicitar cotação
          </button>
        </div>
      </div>
    </header>
  );
}

export default VolvoHeader;
