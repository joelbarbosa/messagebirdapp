import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configure_store';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';

const { store } = configureStore();

ReactDOM.render(
  <Root store={store} />,
    document.getElementById('root'));
registerServiceWorker();
