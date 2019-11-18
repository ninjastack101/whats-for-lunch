import * as actions from '../actions/lunchMenuActions';
import { IRecipe, IIngredient } from '../types';
import reducer from './lunchMenuReducer';

describe('Fetch lunch menus', () => {

  interface IState {
    recipes: IRecipe[];
    ingredients: IIngredient[];
    lunchMenu: IRecipe[];
  };

  let initialState: IState = {
    recipes: [],
    ingredients: [],
    lunchMenu: [],
  };

  it('should return the initial state', (done) => {
    const initAction: any = {};
    expect(reducer(undefined, initAction)).toEqual(initialState);
    done();
  });

  it('should handle SAVE_RECIPES', (done) => {

    const startAction: any = {
      type: actions.SAVE_RECIPES,
      payload: {
        recipes: [{
          0: "Ham",
          1: "Cheese"
        }]
      },
    };

    const expectObj = {
      recipes: startAction.payload.recipes,
      ingredients: [],
      lunchMenu: []
    };
    expect(reducer(initialState, startAction)).toEqual(expectObj);
    done();
  });

  it('should handle SAVE_INGREDIENTS', (done) => {

    const startAction: any = {
      type: actions.SAVE_INGREDIENTS,
      payload: {
        ingredients: [{
          0: "Ham",
          1: "Cheese"
        }]
      },
    };

    const expectObj = {
      ingredients: startAction.payload.ingredients,
      recipes: [],
      lunchMenu: []
    };
    expect(reducer(initialState, startAction)).toEqual(expectObj);
    done();
  });

  it('should handle SAVE_INGREDIENTS', (done) => {

    const startAction: any = {
      type: actions.SAVE_INGREDIENTS,
      payload: {
        ingredients: [{
          "best-before": "2019-04-22",
          "title": "Ham",
          "use-by": "2019-04-27"
        }]
      },
    };

    const expectObj = {
      ingredients: startAction.payload.ingredients,
      recipes: [],
      lunchMenu: []
    };
    expect(reducer(initialState, startAction)).toEqual(expectObj);
    done();
  });

  it('should handle SAVE_LUNCH_MENU', (done) => {

    const startAction: any = {
      type: actions.SAVE_LUNCH_MENU,
      payload: {
        lunchMenu: [{
          0: "Bacon",
          1: "Eggs",
          2: "Baked Beans",
        }],
      },
    };

    const expectObj = {
      ingredients: [],
      recipes: [],
      lunchMenu: startAction.payload.lunchMenu
    };
    expect(reducer(initialState, startAction)).toEqual(expectObj);
    done();
  });
});