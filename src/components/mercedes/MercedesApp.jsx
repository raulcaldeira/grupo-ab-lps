import React from 'react';
import MercedesHeader from './MercedesHeader';
import MercedesHero from './MercedesHero';
import MercedesFeatures from './MercedesFeatures';
import MercedesUrgencyBanner from './MercedesUrgencyBanner';
import MercedesFooter from './MercedesFooter';

function MercedesApp() {
  return (
    <>
      <MercedesHeader />
      <main>
        <MercedesHero />
        <MercedesFeatures />
        <MercedesUrgencyBanner />
      </main>
      <MercedesFooter />
    </>
  );
}

export default MercedesApp;
