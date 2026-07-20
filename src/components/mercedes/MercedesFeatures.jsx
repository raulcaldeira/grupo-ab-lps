import React from 'react';
import { MODELS } from './mercedesData';
import gleInterior from '../../images/mercedes/mercedes-gle-interior.jpg';
import glbInteriorFallback from '../../images/mercedes/mercedes-gle-interior.jpg';

const ICONS = {
  bolt: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  clock: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  grid4: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  ),
  monitor: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  key: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  wifi: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  sliders: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  arrows: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  ),
};

const MODEL_HIGHLIGHTS = [
  { id: 'glb', label: 'GLB 220 4MATIC', stats: ['190 cv', '7 lugares', '4MATIC'], tagline: 'Espaço para toda a família' },
  { id: 'glc', label: 'AMG GLC 43 4MATIC', stats: ['421 cv', '4,7s 0–100', 'V6 Biturbo'], tagline: 'Performance esportiva pura' },
  { id: 'gle', label: 'GLE 450 4MATIC', stats: ['367 cv', 'EQ Boost', 'Suspensão a Ar'], tagline: 'Luxo e sofisticação supremos' },
];

const SHARED_FEATURES = [
  { icon: 'grid4', title: 'Tração 4MATIC', description: 'Sistema de tração integral inteligente presente nos 3 modelos — estabilidade total em qualquer superfície.' },
  { icon: 'monitor', title: 'MBUX com Inteligência Artificial', description: 'Central multimídia com comandos de voz, navegação por IA e integração total ao ecossistema Mercedes Me.' },
  { icon: 'bolt', title: 'Motores Turbo de Alta Performance', description: 'De 190 cv a 421 cv: cada modelo GL entrega potência, eficiência e resposta instantânea ao acelerador.' },
  { icon: 'shield', title: 'Segurança PRE-SAFE®', description: 'Sistema preventivo que detecta risco de colisão e aciona proteções ativas antes do impacto acontecer.' },
  { icon: 'star', title: 'Interior Premium Mercedes', description: 'Acabamentos em couro genuíno, iluminação ambiente e materiais de alto padrão em todos os modelos GL.' },
  { icon: 'wifi', title: 'Conectividade Total', description: 'Apple CarPlay, Android Auto, carregamento sem fio e atualizações over-the-air integrados de série.' },
];

function MercedesFeatures({ selectedModelId }) {
  const model = MODELS.find((m) => m.id === selectedModelId);

  return (
    <section className="bg-gray-950 py-14 md:py-20">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
          A linha GL Mercedes-Benz
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Três SUVs premium com DNA Mercedes-Benz — cada um com seu perfil, todos com o mesmo padrão de excelência.
        </p>

        {/* Interior image — specific to selected model */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <img
            src={model.interiorImageUrl ?? gleInterior}
            alt={`Interior ${model.name}`}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* 3-model comparison bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {MODEL_HIGHLIGHTS.map((m) => (
            <div
              key={m.id}
              className={`rounded-xl p-5 border text-center transition-colors ${
                m.id === selectedModelId
                  ? 'border-mercedes-red bg-mercedes-red/10'
                  : 'border-gray-800 bg-gray-900'
              }`}
            >
              <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${m.id === selectedModelId ? 'text-mercedes-red' : 'text-gray-500'}`}>
                {m.label}
              </p>
              <p className="text-white text-sm mb-3">{m.tagline}</p>
              <div className="flex justify-center gap-3">
                {m.stats.map((s, i) => (
                  <span key={i} className="text-mercedes-red font-extrabold text-sm bg-black/30 px-2 py-1 rounded-lg">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Shared features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHARED_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-7 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-800 group"
            >
              <div className="w-12 h-12 bg-mercedes-red/10 text-mercedes-red rounded-lg flex items-center justify-center mb-4 group-hover:bg-mercedes-red group-hover:text-white transition-colors">
                {ICONS[feature.icon] ?? ICONS.bolt}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href={model.dealerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-mercedes-red text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-mercedes-red/90 hover:scale-105 transition-all shadow-lg"
          >
            Conheça todos os detalhes do {model.shortName}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MercedesFeatures;
