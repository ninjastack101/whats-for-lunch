import { IRecipe, IIngredient } from '../types';
import { formatDate, sortItemsByDate } from './date';

const BEST_BEFORE = 'best-before'
const USE_BY 			= 'use-by'

export interface MappedIngredients {
  [key: string]: IIngredient
}

export const canMakeRecipe = (
  recipe: IRecipe,
  ingredients: MappedIngredients,
) => recipe.ingredients.reduce(
  (prev: boolean, next: string) => {
    if (ingredients[next]) {
      const currentDate = formatDate(new Date());
      return ingredients[next][USE_BY] > currentDate && prev;
    }

    return false;
  },
  true,
);

export const getNonExpiringRecipes = (
  recipes: IRecipe[],
  ingredients: MappedIngredients,
) => (
  recipes.filter(recipe => canMakeRecipe(recipe, ingredients))
);

export const getRecipeBestBeforeDate = (
  recipeIngredients: string[],
  ingredients: MappedIngredients,
) => {
  let recentBestBeforeDate = '';

  recipeIngredients.forEach((ingredient) => {
    if(
      !recentBestBeforeDate
      || ingredients[ingredient][BEST_BEFORE] < recentBestBeforeDate
    ) {
      recentBestBeforeDate = ingredients[ingredient][BEST_BEFORE];
    }
  });

  return recentBestBeforeDate;
};

export const sortRecipeByDate = (
  recipes: IRecipe[],
  ingredients: MappedIngredients,
) => {
  const recipesWithBestBeforeDate = recipes.map(recipe => ({
    ...recipe,
    date: getRecipeBestBeforeDate(recipe.ingredients,ingredients),
  }));

  return sortItemsByDate(recipesWithBestBeforeDate, 'date');
}
