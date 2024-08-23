import ingredientsSliceReducer, {
  initialState,
  getIngredientsList
} from '../IngredientsSlice';

const mockIngredients = [
  {
    _id: '643d69a5c3f7b9001cfa093c',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    id: '1'
  },
  {
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
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
    id: '2'
  },
  {
    _id: '643d69a5c3f7b9001cfa0942',
    name: 'Соус Spicy-X',
    type: 'sauce',
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
    id: '3'
  }
];

describe('тесты асинхронных экшенов для ингредиентов', () => {
  test('getIngredientsList fulfilled', () => {
    const newState = ingredientsSliceReducer(
      initialState,
      getIngredientsList.fulfilled(mockIngredients, '')
    );
    const { ingredients, loading, error } = newState;

    expect(loading).toBe(false);
    expect(ingredients).toEqual(mockIngredients);
    expect(error).toBeNull();
  });

  test('getIngredientsList pending', () => {
    const newState = ingredientsSliceReducer(
      initialState,
      getIngredientsList.pending('')
    );
    const { loading } = newState;

    expect(loading).toBe(true);
  });

  test('getIngredientsList rejected', () => {
    const newState = ingredientsSliceReducer(
      initialState,
      getIngredientsList.rejected({ name: '', message: 'test error' }, '')
    );
    const { error, loading } = newState;

    expect(loading).toBe(false);
    expect(error).toBe('test error');
  });
});
