import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/app';
import store from './store';

import './styles.css';


// componente Wrapper, aqui va todo
function Wrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<Wrapper />, rootElement);
