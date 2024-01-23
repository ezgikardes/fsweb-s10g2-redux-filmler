import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { store } from './store/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* oluşturuğumuz stor'u app'imize bağladık */}
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
