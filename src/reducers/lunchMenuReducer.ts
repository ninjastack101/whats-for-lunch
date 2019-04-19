import { handleActions } from 'redux-actions';
import * as types from '../actions/lunchMenuActions';
import { IRecipe, IIngredient } from '../types';

export interface IState {
  recipes: IRecipe[];
  ingredients: IIngredient[];
  lunchMenu: IRecipe[];
}

export const initialState: IState = {
  recipes: [],
  ingredients: [],
  lunchMenu: [],
};

export default handleActions({
  [types.SAVE_RECIPES]: (state: IState, action) => ({
    ...state,
    recipes: action.payload.recipes,
  }),
  [types.SAVE_INGREDIENTS]: (state: IState, action) => ({
    ...state,
    ingredients: action.payload.ingredients,
  }),
  [types.SAVE_LUNCH_MENU]: (state: IState, action) => ({
    ...state,
    lunchMenu: action.payload.lunchMenu,
  }),
}, initialState);

