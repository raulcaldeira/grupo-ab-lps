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
      title: 'Mercedes-AMG GLE 63 S 4MATIC+ Coupé | AB Intercar',
      description:
        'Mercedes-AMG GLE 63 S 4MATIC+ Coupé com 612 cv e condições exclusivas na AB Intercar. Solicite sua cotação agora.',
      ogTitle: 'Mercedes-AMG GLE 63 S 4MATIC+ Coupé | AB Intercar',
      ogDescription:
        'Mercedes-AMG GLE 63 S com 612 cv. Condições exclusivas na AB Intercar. Solicite sua cotação.',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Mercedes-AMG GLE 63 S 4MATIC+ Coupé',
        description:
          'SUV esportivo de alto desempenho com motor V8 biturbo de 612 cv, tração integral 4MATIC+ e acabamento AMG.',
        brand: { '@type': 'Brand', name: 'Mercedes-Benz' },
        category: 'SUV Esportivo',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'BRL',
        },
        vehicleEngine: {
          '@type': 'EngineSpecification',
          fuelType: 'Gasolina',
          enginePower: {
            '@type': 'QuantitativeValue',
            value: '612',
            unitCode: 'BHP',
          },
        },
      },
    };

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
