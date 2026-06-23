import React from 'react';
import logoEditoraGlobo from '../../images/logo-editora-globo.png';
import logoGlab from '../../images/logo-glab.png';
import abIntercarLogo from '../../images/mercedes/ab-intercar-logo.png';
import ibamaLogo from '../../images/mercedes/ibama.png';

function MercedesFooter() {
  const scrollToForm = () => {
    const el = document.getElementById('formulario');
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoEditoraGlobo} alt="Editora Globo" className="h-5 md:h-6" />
            <div className="w-px h-5 bg-gray-300"></div>
            <img src={logoGlab} alt="G.lab" className="h-5 md:h-6" />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className="text-sm text-mercedes-red font-semibold hover:underline cursor-pointer"
            >
              Solicitar cotação
            </button>
            <div className="w-px h-4 bg-gray-300"></div>
            <a
              href="https://www.grupoab.com.br/mercedes-benz/novos/amg-gle-63-4matic/?utm_source=globo&utm_medium=site_globo&utm_campaign=20260601_mercedes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 font-semibold hover:text-gray-900 hover:underline"
            >
              Saiba Mais
            </a>
            <div className="w-px h-4 bg-gray-300"></div>
            <img src={abIntercarLogo} alt="AB Intercar Mercedes-Benz" className="h-5 md:h-6 invert" />
          </div>
        </div>

        {/* IBAMA + Legal text */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-4">
          <img src={ibamaLogo} alt="IBAMA - Proconve Homologado" className="h-8" />
          <p className="text-center sm:text-left text-xs text-gray-500 leading-relaxed">
            Ofertas válidas enquanto durarem os nossos estoques. Consulte condições na concessionária. Reservamo-nos o direito de corrigir possíveis erros de digitação. Imagens meramente ilustrativas.
          </p>
        </div>

        <p className="text-center text-xs text-gray-600 mt-4">
          Conteúdo oferecido por AB Intercar Mercedes-Benz. Produzido pelo G.lab para Editora Globo.
        </p>
      </div>
    </footer>
  );
}

export default MercedesFooter;
