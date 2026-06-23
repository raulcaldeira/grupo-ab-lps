import React from 'react';
import ReactDOM from 'react-dom/client';
import MercedesApp from './components/mercedes/MercedesApp';
import VolvoApp from './components/volvo/VolvoApp';
import './index.css';

const path = window.location.pathname;
const isVolvo = path.includes('volvo');
document.title = isVolvo
  ? 'Volvo | Taxa Zero | AB Gotland'
  : 'Mercedes-AMG GLE 63 S | AB Intercar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isVolvo ? <VolvoApp /> : <MercedesApp />}
  </React.StrictMode>
);
