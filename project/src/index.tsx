import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import {hotels} from './mocks/hotels';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App hotels={hotels} />
  </React.StrictMode>,
);
