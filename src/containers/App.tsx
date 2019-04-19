import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import RootWrapper from '../components/RootWrapper';
import Routes from '../routes';

// Configure the store instance
const store = configureStore();

const App = () => (
  <RootWrapper>
    <Provider store={store}>
      {Routes}
    </Provider>
  </RootWrapper>
);

export default App;

