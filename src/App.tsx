import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Configure the store instance
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <h2>Hey!, What's for lunch ;)</h2>
  </Provider>
);

export default App;

