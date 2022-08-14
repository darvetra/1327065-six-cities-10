import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import {offers} from './mocks/offers';

const MAP_SETTINGS = {
  latitude: 52.37454,
  longitude: 4.897976,
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
