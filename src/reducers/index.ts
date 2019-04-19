import { combineReducers } from 'redux';
import app, { initialState as appState } from './app';
import { ApplicationRootState } from '../types';

export const initialState: ApplicationRootState = {
  app: appState,
};

const rootReducer = combineReducers({
  app,
});

export default rootReducer;

