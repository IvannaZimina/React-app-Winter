import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main'; // основная страница куда подключаются конмпоненты и контернеры
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
