import React from 'react';
import VolvoHeader from './VolvoHeader';
import VolvoHero from './VolvoHero';
import VolvoFeatures from './VolvoFeatures';
import VolvoUrgencyBanner from './VolvoUrgencyBanner';
import VolvoFooter from './VolvoFooter';

function VolvoApp() {
  return (
    <>
      <VolvoHeader />
      <main>
        <VolvoHero />
        <VolvoFeatures />
        <VolvoUrgencyBanner />
      </main>
      <VolvoFooter />
    </>
  );
}

export default VolvoApp;
