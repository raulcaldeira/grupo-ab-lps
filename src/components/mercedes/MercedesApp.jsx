import React, { useState } from 'react';
import MercedesHeader from './MercedesHeader';
import MercedesHero from './MercedesHero';
import MercedesFeatures from './MercedesFeatures';
import MercedesUrgencyBanner from './MercedesUrgencyBanner';
import MercedesFooter from './MercedesFooter';

function MercedesApp() {
  const [selectedModelId, setSelectedModelId] = useState('glb');

  return (
    <>
      <MercedesHeader />
      <main>
        <MercedesHero selectedModelId={selectedModelId} onSelectModel={setSelectedModelId} />
        <MercedesFeatures selectedModelId={selectedModelId} />
        <MercedesUrgencyBanner />
      </main>
      <MercedesFooter selectedModelId={selectedModelId} />
    </>
  );
}

export default MercedesApp;
