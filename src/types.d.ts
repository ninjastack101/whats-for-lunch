
export interface IRecipe {
  title: string;
  ingredients: string[];
};

export interface IIngredient {
  title: string;
  'best-before': string;
  'use-by': string;
};

// App Reducer state type 
export interface IAppReducerState {};

// Lunch Menu Reducer state type 
export interface ILunchMenuReducerState {
  ingredients: IIngredient[];
  recipes: IRecipe[];
};

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly app: AppState;
  readonly lunchMenu: ILunchMenuReducerState;
};
