import React from 'react';
import logoEditoraGlobo from '../../images/logo-editora-globo.png';
import logoGlab from '../../images/logo-glab.png';
import abGotlandLogo from '../../images/volvo/ab-gotland-logo.png';

function VolvoFooter() {
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
            <img src={logoEditoraGlobo} alt="Editora Globo" className="h-7 md:h-6" />
            <div className="w-px h-6 bg-gray-300"></div>
            <img src={logoGlab} alt="G.lab" className="h-7 md:h-6" />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className="text-sm text-volvo-blue font-semibold hover:underline cursor-pointer"
            >
              Solicitar cotação
            </button>
            <div className="w-px h-4 bg-gray-300"></div>
            <a
              href="https://www.grupoab.com.br/volvo/novos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 font-semibold hover:text-gray-900 hover:underline"
            >
              Saiba Mais
            </a>
            <div className="w-px h-4 bg-gray-300"></div>
            <img src={abGotlandLogo} alt="AB Gotland Volvo" className="h-4 md:h-5 invert" />
          </div>
        </div>

        {/* Dealer locations */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h3 className="text-sm font-bold text-gray-700 mb-3 text-center">Nossas lojas no Rio de Janeiro</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-gray-500">
            <div>
              <p className="font-semibold text-gray-700">Barra - Ivan Lins</p>
              <p>Av. Ivan Lins, Barra da Tijuca</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Barra - Erico Veríssimo</p>
              <p>Av. Erico Veríssimo, Barra da Tijuca</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Botafogo</p>
              <p>Botafogo, Rio de Janeiro</p>
            </div>
          </div>
        </div>

        {/* Legal text */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-center text-xs text-gray-500 leading-relaxed">
            Ofertas válidas enquanto durarem os nossos estoques. Consulte condições na concessionária. Reservamo-nos o direito de corrigir possíveis erros de digitação. Imagens meramente ilustrativas.
          </p>
        </div>

        <p className="text-center text-xs text-gray-600 mt-4">
          Conteúdo oferecido por AB Gotland Volvo. Produzido pelo G.lab para Editora Globo.
        </p>
      </div>
    </footer>
  );
}

export default VolvoFooter;
