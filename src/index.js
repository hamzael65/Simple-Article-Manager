import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/Store'; // Importing the store
import App from './App';

ReactDOM.render(
  <Provider store={store}>  {/* Wrap the app with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
