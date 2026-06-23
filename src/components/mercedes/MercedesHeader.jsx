import React from 'react';
import logoEditoraGlobo from '../../images/logo-editora-globo.png';
import logoGlab from '../../images/logo-glab.png';
import abIntercarLogo from '../../images/mercedes/ab-intercar-logo.png';

function MercedesHeader() {
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
          <img src={logoGlab} alt="G.lab" className="h-7 md:h-9" />
        </div>
        <div className="flex items-center gap-4">
          <img src={abIntercarLogo} alt="AB Intercar Mercedes-Benz" className="h-8 md:h-10 invert hidden sm:block" />
          <button
            onClick={scrollToForm}
            className="bg-mercedes-red text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-mercedes-red/90 transition-colors cursor-pointer"
          >
            Solicitar cotação
          </button>
        </div>
      </div>
    </header>
  );
}

export default MercedesHeader;
