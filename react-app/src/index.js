import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
// import * as sessionActions from './store/session'
// import * as threadActions from './store/threads'

const store = configureStore();

// if (process.env.NODE_ENV !== 'production') {
//   window.store = store;
//   window.sessionActions = sessionActions;
//   window.threadActions = threadActions
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);