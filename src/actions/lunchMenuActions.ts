import { createAction } from 'redux-actions';
import { Action, ActionCreator, Store } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IRecipe, IIngredient } from '../types';
import axios from '../utils/axios';
import { Dispatch } from 'react';
import mapItemsToKeys from '../utils/mapItemsToKeys';
import { getNonExpiringRecipes, sortRecipeByDate } from '../utils/recipes';

const module = 'LUNCH_MENU';

export const FETCH_LUNCH_DETAILS_REQUEST = `[${module}] FETCH_LUNCH_DETAILS_REQUEST`;
export const FETCH_LUNCH_DETAILS_FAILURE = `[${module}] FETCH_LUNCH_DETAILS_FAILURE`;
export const FETCH_LUNCH_DETAILS_SUCCESS = `[${module}] FETCH_LUNCH_DETAILS_SUCCESS`;

export const SAVE_RECIPES = `[${module}] SAVE_RECIPES`;
export const SAVE_INGREDIENTS = `[${module}] SAVE_INGREDIENTS`;
export const SAVE_LUNCH_MENU = `[${module}] SAVE_LUNCH_MENU`;

export const fetchLunchDetailsRequest = createAction(FETCH_LUNCH_DETAILS_REQUEST);
export const fetchLunchDetailsFailure = createAction(
  FETCH_LUNCH_DETAILS_FAILURE,
  (error: any) => ({ error }),
);
export const fetchLunchDetailsSuccess = createAction(FETCH_LUNCH_DETAILS_SUCCESS);

export const saveRecipes: ActionCreator<Action> = createAction(
  SAVE_RECIPES,
  (recipes: IRecipe[]) => ({ recipes }),
);

export const saveIngredients: ActionCreator<Action> = createAction(
  SAVE_INGREDIENTS,
  (ingredients: IIngredient[]) => ({ ingredients }),
);

export const saveLunchMenu: ActionCreator<Action> = createAction(
  SAVE_LUNCH_MENU,
  (lunchMenu: any) => ({ lunchMenu }),
);

export const fetchLunchDetails = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(fetchLunchDetailsRequest());

    const { data: { recipes} } = await axios.get('/5c85f7a1340000e50f89bd6c');
    dispatch(saveRecipes(recipes));
  
    const { data: { ingredients } } = await axios.get('/5cb016f83100006c00e131b0');	
    dispatch(saveIngredients(ingredients));

    dispatch(fetchLunchDetailsSuccess());
    dispatch(prepareLunchMenu());
  } catch(error) {
    dispatch(fetchLunchDetailsFailure(error.message));
  }
};

export const prepareLunchMenu = () => async (dispatch: Dispatch<any>, getState: any) => {
  const { lunchMenu: { recipes, ingredients } } = getState();
  const mappedIngredients = mapItemsToKeys(ingredients, { keyPath: 'title' });
  const nonExpiringRecipes = getNonExpiringRecipes(recipes, mappedIngredients);
  const lunchMenu = sortRecipeByDate(nonExpiringRecipes, mappedIngredients);
  dispatch(saveLunchMenu(lunchMenu));
};
