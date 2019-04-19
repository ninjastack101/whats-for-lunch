import { AnyAction } from 'redux';
import { IAppReducerState } from '../types';

export const initialState: IAppReducerState = {};

const appReducer = (state: IAppReducerState = initialState, action: AnyAction) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default appReducer;
