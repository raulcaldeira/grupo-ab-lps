// Dados dos 3 modelos para a LP multi-modelo Mercedes-Benz
import glb220Wide from '../../images/mercedes/glb-220-wide.png';
import glc43Wide from '../../images/mercedes/glc-43-amg-wide.png';
import glc43Hero from '../../images/mercedes/glc-43-amg-hero.png';
import gle450Wide from '../../images/mercedes/gle-450-wide.png';
import interiorGlb from '../../images/mercedes/interior-glb.png';
import interiorGlcAmg from '../../images/mercedes/interior-glc-amg.jpg';
import interiorGle from '../../images/mercedes/interior-gle.png';

export const MODELS = [
  {
    id: 'glb',
    name: 'GLB 220 4MATIC',
    shortName: 'GLB',
    badge: 'Mercedes-Benz SUV',
    tagline: 'O SUV para toda a família.',
    description:
      'Espaço, versatilidade e tecnologia num SUV compacto com tração 4MATIC e capacidade para até 7 passageiros.',
    price: 'R$ 381.900',
    heroImageUrl: 'https://media.oneweb.mercedes-benz.com/images/dynamic/europe/BR/247645/806/iris.png?q=COSY-EU-100-1713d0VXqaWFqtyO67PobzIr3eWsrrCsdRRzwQZUnRZbMw3SGtle9tsd2HdcUfp8qXGEubSJ0l3IJOB2NMcbApjTlI5uVcZQC31C1kzNwPnm7jA6ZhKV5Kh%25vqCJjyLRgcDYaxPa9rH1entn8wYOxoiZr7YM4FACuTg95vp6PDCIoSeWHmUtsd8JxcUfiM1XGE4JYJ0lgCVOB2PzFbAp7oMIkbX1ZxQcTg9Ukm6tTuweSc60gItsdHsVcUfa8MXGEsnYJ0lw4fOB2ABcbAp5iXI5uCeDQC3zSTkzN7lbm7sDgubYwR9hDvdeuqCj6hVNpLpIZIGwC7Ux0wPfeqYOgzT&BKGND=9&IMGT=P27&cp=U7lLKRUtPa6KAFr8s_ubHw&uni=m&POV=BE330,PZM',
    formImageUrl: glb220Wide,
    interiorImageUrl: interiorGlb,
    stats: [
      { value: '190 cv', label: 'de potência' },
      { value: '7,9s', label: '0–100 km/h' },
      { value: '7', label: 'passageiros' },
      { value: '4MATIC', label: 'tração integral' },
    ],
    features: [
      {
        icon: 'bolt',
        title: 'Motor 2.0L Turbo',
        description: 'Motor 4 cilindros turbo de 190 cv e 300 Nm de torque — ágil, eficiente e responsivo.',
      },
      {
        icon: 'grid4',
        title: 'Tração 4MATIC',
        description: 'Sistema de tração integral que oferece estabilidade e segurança em qualquer tipo de terreno.',
      },
      {
        icon: 'users',
        title: '7 Passageiros',
        description: 'Terceira fileira de assentos para acomodar toda a família com conforto e praticidade.',
      },
      {
        icon: 'monitor',
        title: 'MBUX 10,2"',
        description: 'Central multimídia com tela de 10,2 polegadas, comandos de voz e inteligência artificial.',
      },
      {
        icon: 'key',
        title: 'KEYLESS GO',
        description: 'Acesso e partida sem chave para uma experiência mais prática e conveniente.',
      },
      {
        icon: 'wifi',
        title: 'Wireless Charging',
        description: 'Carregamento sem fio integrado ao console central para manter seu smartphone sempre carregado.',
      },
    ],
    dealerUrl:
      'https://www.grupoab.com.br/mercedes-benz/?utm_source=globo&utm_medium=site_globo&utm_campaign=20260601_mercedes',
  },
  {
    id: 'glc',
    name: 'AMG GLC 43 4MATIC',
    shortName: 'AMG GLC 43',
    badge: 'Mercedes-AMG',
    tagline: 'Performance esportiva. Alma SUV.',
    description:
      'O DNA AMG num SUV premium: motor V6 biturbo, suspensão esportiva adaptativa e design agressivo para quem vive a adrenalina.',
    price: 'R$ 527.900',
    heroImageUrl: glc43Hero,
    formImageUrl: glc43Wide,
    interiorImageUrl: interiorGlcAmg,
    stats: [
      { value: '421 cv', label: 'de potência' },
      { value: '4,7s', label: '0–100 km/h' },
      { value: 'V6', label: 'biturbo 3.0L' },
      { value: '520 Nm', label: 'de torque' },
    ],
    features: [
      {
        icon: 'bolt',
        title: 'Motor AMG V6 Biturbo',
        description: 'Motor 6 cilindros biturbo 3.0L de 421 cv e 520 Nm de torque — performance pura em cada acelerada.',
      },
      {
        icon: 'clock',
        title: '0–100 em 4,7s',
        description: 'Aceleração esportiva com a garra AMG e toda a versatilidade de um SUV premium.',
      },
      {
        icon: 'grid4',
        title: 'Tração 4MATIC+',
        description: 'Distribuição variável de torque entre os eixos para máxima aderência em qualquer curva.',
      },
      {
        icon: 'star',
        title: 'Design AMG',
        description: 'Grade Panamericana, difusor traseiro, saídas de escapamento duplas e rodas AMG exclusivas.',
      },
      {
        icon: 'sliders',
        title: 'AMG RIDE CONTROL',
        description: 'Suspensão esportiva adaptativa com modos Comfort, Sport e Sport+ para cada momento.',
      },
      {
        icon: 'chart',
        title: 'AMG TRACK PACE',
        description: 'Sistema MBUX com telemetria em tempo real: monitore sua performance onde quer que esteja.',
      },
    ],
    dealerUrl:
      'https://www.grupoab.com.br/mercedes-benz/?utm_source=globo&utm_medium=site_globo&utm_campaign=20260601_mercedes',
  },
  {
    id: 'gle',
    name: 'GLE 450 4MATIC',
    shortName: 'GLE',
    badge: 'Mercedes-Benz',
    tagline: 'O SUV de luxo supremo.',
    description:
      'Tecnologia EQ Boost, suspensão a ar E-ACTIVE BODY CONTROL e interior em couro Nappa que redefine sofisticação.',
    price: 'R$ 784.900',
    heroImageUrl:
      'https://media.oneweb.mercedes-benz.com/images/dynamic/europe/BR/167133/806/iris.png?q=COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlaStsd2HVcUfpO6XGEunSJ0l3DAOB2NS1bApUAbI5uGfIQC30kTkzNHTwm7j86ohKViXF%25vq4ulyLRgY6YaxPrprH1enDn8wYzyoiZB5oM4FAC2Tg95Yn6PDaksSeWHeutsd8JGcUfiO1XGE4TXJ0lg6AOB2PbnbApe7RI5usKDQC32MrkzNL6Sm%25kbFDZhOtsdB%25ycJtj9GXOc5smJ0l4IAOB2i8RbAp0A9I5uB4xQC3AsrkzN5lNm7jd89hKVvSM%25vqLtcyLRaLmYaxH0hrH18BRn8wioyoiCpBxySfD2MpC75gTwZbMFwRPRYEY7fHizWKfAN59S%25B8O&cp=8mhxDZy3qhkDFW2gqQWvpQ&imgt=P27&bkgnd=9&pov=BE330&uni=cs',
    formImageUrl: gle450Wide,
    interiorImageUrl: interiorGle,
    stats: [
      { value: '367 cv', label: 'de potência' },
      { value: '5,7s', label: '0–100 km/h' },
      { value: 'EQ Boost', label: 'eletrificado' },
      { value: '500 Nm', label: 'de torque' },
    ],
    features: [
      {
        icon: 'bolt',
        title: 'Motor EQ Boost',
        description: 'Motor inline-6 biturbo 3.0L com eletrificação de 22 cv extras e recuperação de energia em frenagem.',
      },
      {
        icon: 'arrows',
        title: 'Suspensão a Ar',
        description: 'E-ACTIVE BODY CONTROL mantém o veículo nivelado e absorve imperfeições com precisão cirúrgica.',
      },
      {
        icon: 'clock',
        title: '0–100 em 5,7s',
        description: 'Performance refinada combinada com toda a elegância que só o GLE oferece.',
      },
      {
        icon: 'star',
        title: 'Interior Premium',
        description: 'Bancos em couro Nappa, teto panorâmico elétrico e iluminação ambiente de 64 cores.',
      },
      {
        icon: 'monitor',
        title: 'MBUX Avançado',
        description: 'Telas de alta resolução com navegação por IA e conexão total ao ecossistema Mercedes Me.',
      },
      {
        icon: 'grid4',
        title: 'Tração 4MATIC',
        description: 'Sistema de tração integral inteligente para máxima estabilidade em qualquer condição.',
      },
    ],
    dealerUrl:
      'https://www.grupoab.com.br/mercedes-benz/novos/amg-gle-63-4matic/?utm_source=globo&utm_medium=site_globo&utm_campaign=20260601_mercedes',
  },
];
