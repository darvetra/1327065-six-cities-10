import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import {offers} from './mocks/offers';

const MAP_SETTINGS = {
  latitude: 52.3909553943508,
  longitude: 4.85309666406198,
  zoom: 13,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App mapSettings={MAP_SETTINGS} offers={offers} />
  </React.StrictMode>,
);
