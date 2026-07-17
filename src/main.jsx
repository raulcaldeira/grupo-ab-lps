import React from 'react';
import ReactDOM from 'react-dom/client';
import MercedesApp from './components/mercedes/MercedesApp';
import VolvoApp from './components/volvo/VolvoApp';
import './index.css';

const path = window.location.pathname;
const isVolvo = path.includes('volvo');

// SEO meta config per route
const seo = isVolvo
  ? {
      title: 'Volvo | Taxa Zero | AB Gotland',
      description:
        'Toda a linha Volvo com Taxa Zero ou Super Avaliação do seu seminovo. EX30, EX40, EC40, XC60, XC90 e EX90. Solicite sua cotação exclusiva na AB Gotland.',
      ogTitle: 'Volvo | Taxa Zero | AB Gotland',
      ogDescription:
        'Toda a linha Volvo com condições exclusivas. Taxa Zero ou Super Avaliação. Solicite sua cotação.',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Linha Volvo 2026',
        description:
          'Toda a linha Volvo com Taxa Zero. EX30, EX40, EC40, XC60, XC90 e EX90 com condições exclusivas na AB Gotland.',
        brand: { '@type': 'Brand', name: 'Volvo' },
        category: 'SUV Premium',
        offers: {
          '@type': 'AggregateOffer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'BRL',
        },
      },
    }
  : {
      title: 'SUVs Mercedes-Benz | Test-drive Exclusivo | AB Intercar Botafogo',
      description:
        'Escolha entre GLB 220 4MATIC, AMG GLC 43 4MATIC e GLE 450 4MATIC. Agende seu test-drive exclusivo na AB Intercar Botafogo com consultores dedicados.',
      ogTitle: 'SUVs Mercedes-Benz | Test-drive Exclusivo | AB Intercar',
      ogDescription:
        'GLB, AMG GLC 43 e GLE 450 disponíveis agora. Agende seu test-drive exclusivo na AB Intercar Botafogo.',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'SUVs Mercedes-Benz — AB Intercar Botafogo',
        description:
          'Três SUVs premium Mercedes-Benz disponíveis para test-drive exclusivo na AB Intercar Botafogo: GLB 220 4MATIC, AMG GLC 43 4MATIC e GLE 450 4MATIC.',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'GLB 220 4MATIC',
            url: 'https://www.grupoab.com.br/mercedes-benz/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'AMG GLC 43 4MATIC',
            url: 'https://www.grupoab.com.br/mercedes-benz/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'GLE 450 4MATIC',
            url: 'https://www.grupoab.com.br/mercedes-benz/',
          },
        ],
      },
    };

// Favicon
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/svg+xml';
favicon.href = isVolvo ? '/favicon-volvo.svg' : '/favicon-mercedes.svg';
document.head.appendChild(favicon);

// Apply SEO tags
document.title = seo.title;

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (el) {
    el.setAttribute('content', content);
  } else {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    el.setAttribute('content', content);
    document.head.appendChild(el);
  }
}

setMeta('name', 'description', seo.description);
setMeta('property', 'og:title', seo.ogTitle);
setMeta('property', 'og:description', seo.ogDescription);
setMeta('name', 'twitter:title', seo.ogTitle);
setMeta('name', 'twitter:description', seo.ogDescription);

// Structured Data (JSON-LD)
const ldScript = document.createElement('script');
ldScript.type = 'application/ld+json';
ldScript.textContent = JSON.stringify(seo.structuredData);
document.head.appendChild(ldScript);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isVolvo ? <VolvoApp /> : <MercedesApp />}
  </React.StrictMode>
);
