import reducer, {
  addItem,
  deleteItem,
  clearAll,
  updateAll
} from '../constructorIngredientSlice';
import { TConstructorIngredient } from '@utils-types';

const mockIngredient: TConstructorIngredient = {
  id: '4',
  _id: '643d69a5c3f7b9001cfa093e',
  name: 'Филе Люминесцентного тетраодонтимформа',
  type: 'main',
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  price: 988,
  image: 'https://code.s3.yandex.net/react/code/meat-03.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png'
};

const mockBunIngredient: TConstructorIngredient = {
  id: '5',
  _id: '643d69a5c3f7b9001cfa093d',
  name: 'Флюоресцентная булка R2-D3',
  type: 'bun',
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  price: 988,
  image: 'https://code.s3.yandex.net/react/code/bun-01.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png'
};

describe('Constructor Ingredient Slice', () => {
  const initialState = {
    bun: null,
    ingredients: []
  };

  test('добавить ингредиент: main/sauce', () => {
    const newState = reducer(initialState, addItem(mockIngredient));

    expect(newState.ingredients.length).toBe(1);
    expect(newState.ingredients[0].name).toEqual(
      'Филе Люминесцентного тетраодонтимформа'
    );
    expect(newState.bun).toBeNull();
  });

  test('добавить ингредиент: bun', () => {
    const newState = reducer(initialState, addItem(mockBunIngredient));

    expect(newState.bun?.name).toEqual('Флюоресцентная булка R2-D3');
  });

  test('удалить ингредиент', () => {
    const state = {
      ...initialState,
      bun: null,
      ingredients: [mockIngredient]
    };

    const newState = reducer(state, deleteItem(mockIngredient));

    expect(newState.ingredients).toEqual([]);
  });

  test('очистить все ингредиенты', () => {
    const state = {
      ...initialState,
      bun: mockBunIngredient,
      ingredients: [mockIngredient]
    };

    const newState = reducer(state, clearAll());

    expect(newState).toEqual({
      bun: null,
      ingredients: []
    });
  });

  test('обновить все ингредиенты', () => {
    const newIngredients = [mockIngredient, mockBunIngredient];

    const newState = reducer(initialState, updateAll(newIngredients));

    expect(newState.ingredients).toEqual(newIngredients);
  });
});
