import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LottoProvider} from "./context/lottoContext";

ReactDOM.render(
  <LottoProvider>
    <App />
  </LottoProvider>,
  document.getElementById('root')
);