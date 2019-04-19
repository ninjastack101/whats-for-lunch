import { combineReducers } from 'redux';
import app, { initialState as appState } from './app';
import lunchMenu, { initialState as lunchMenuState } from './lunchMenuReducer';
import { ApplicationRootState } from '../types';

export const initialState: ApplicationRootState = {
  app: appState,
  lunchMenu: lunchMenuState,
};

const rootReducer = combineReducers({
  app,
  lunchMenu,
});

export default rootReducer;

