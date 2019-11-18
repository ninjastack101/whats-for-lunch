import configureStore from 'redux-mock-store';
import * as actions from './lunchMenuActions';

const mockStore = configureStore();
const store = mockStore();

describe('Fetch lunch details', () => {

  beforeEach(() => {
    store.clearActions();
  });

  it('Should dispatch the save recipes action', (done) => {

    const expectedActions = {
      payload: {
        recipes: {
          recipes: "recipes"
        },
      },
      type: actions.SAVE_RECIPES
    };
    expect(actions.saveRecipes({ recipes: 'recipes' })).toEqual(expectedActions);
    done();
  });

  it('Should dispatch the save ingredients action', (done) => {

    const expectedActions = {
      payload: {
        ingredients: {
          ingredients: "ingredients"
        },
      },
      type: actions.SAVE_INGREDIENTS
    };
    expect(actions.saveIngredients({ ingredients: 'ingredients' })).toEqual(expectedActions);
    done();
  });

  it('Should dispatch the save lunch menu', (done) => {

    const expectedActions = {
      payload: {
        lunchMenu: {
          lunchMenu: "lunchMenu"
        },
      },
      type: actions.SAVE_LUNCH_MENU
    };
    expect(actions.saveLunchMenu({ lunchMenu: 'lunchMenu' })).toEqual(expectedActions);
    done();
  });
});