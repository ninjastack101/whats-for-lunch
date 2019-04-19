import { createStore, applyMiddleware, Middleware, Store, compose } from 'redux';
import reducers, { initialState } from '../reducers';

const configureStore = () => {
  const middlewares: Middleware[] = [];

  if (process.env.NODE_ENV !== 'production') {
    const { createLogger } = require('redux-logger')
    middlewares.push(createLogger({
      diff: true,
    }));
  }

  const enhancers = [applyMiddleware(...middlewares)];

  const store: Store = createStore(reducers, initialState, compose(...enhancers));
  return store;
};

export default configureStore;
