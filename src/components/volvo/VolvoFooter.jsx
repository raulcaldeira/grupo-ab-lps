import React from 'react';
import logoEditoraGlobo from '../../images/logo-editora-globo.png';
import logoAutoesporte from '../../images/logo-autoesporte.svg';
import abGotlandLogo from '../../images/volvo/ab-gotland-logo.png';
import volvoLogo from '../../images/volvo/volvo-logo-white.png';

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
            <img src={logoAutoesporte} alt="Autoesporte" className="h-7 md:h-6" />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className="text-sm text-volvo-blue font-semibold hover:underline cursor-pointer"
            >
              Agendar test-drive
            </button>
            <div className="w-px h-4 bg-gray-300"></div>
            <a
              href="https://www.grupoab.com.br/volvo/novos/?utm_source=globo&utm_medium=site_globo&utm_campaign=20260601_volvo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 font-semibold hover:text-gray-900 hover:underline"
            >
              Saiba Mais
            </a>
            <div className="w-px h-4 bg-gray-300"></div>
            <img src={abGotlandLogo} alt="AB Gotland" className="h-4 md:h-5 invert" />
            <div className="w-px h-4 bg-gray-300"></div>
            <img src={volvoLogo} alt="Volvo" className="h-2.5 md:h-3 invert" />
          </div>
        </div>

        {/* Dealer locations */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-gray-500">
            <div>
              <p className="font-semibold text-gray-700">Gotland Veículos Ltda. - Ivan Lins</p>
              <p>Av. Ministro Ivan Lins, 240</p>
              <p>Barra da Tijuca - Rio de Janeiro - RJ</p>
              <p>CEP: 22620-110</p>
              <p>CNPJ: 04.169.129/0001-89</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Gotland Veículos Ltda. - Erico</p>
              <p>Av. Érico Veríssimo, 858</p>
              <p>Barra da Tijuca - Rio de Janeiro - RJ</p>
              <p>CEP: 22621-180</p>
              <p>CNPJ: 04.169.129/0002-60</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Gotland Veículos Ltda. - Botafogo</p>
              <p>Rua Bambina, 43</p>
              <p>Botafogo - Rio de Janeiro - RJ</p>
              <p>CEP: 22251-050</p>
              <p>CNPJ: 04.169.129/0004-21</p>
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
          Conteúdo oferecido por AB Gotland Volvo. Produzido pelo Autoesporte para Editora Globo.
        </p>
      </div>
    </footer>
  );
}

export default VolvoFooter;
