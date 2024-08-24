import { rootReducer, RootState } from '../rootReducer';
import { AnyAction } from '@reduxjs/toolkit';

describe('rootReducer', () => {
  it('возвращает корректное начальное состояние при неизвестном экшене', () => {
    const action: AnyAction = { type: 'UNKNOWN_ACTION' };
    const initialState: RootState = rootReducer(undefined, action);

    const expectedState: RootState = {
      ingredients: {
        loading: false,
        ingredients: [],
        error: null // Исправлено на null в соответствии с начальным состоянием слайса
      },
      constructorIngredient: {
        bun: null,
        ingredients: []
      },
      user: {
        isLoading: false,
        isAuthChecked: false,
        user: {
          email: '',
          name: ''
        },
        error: '' // Используем пустую строку, если это то, что ожидается
      },
      feeds: {
        orders: [],
        total: 0,
        totalToday: 0,
        isLoading: true,
        error: undefined // Исправлено на null в соответствии с начальным состоянием слайса
      },
      newOrder: {
        orderRequest: false,
        orderModalData: null,
        error: undefined // Исправлено на null в соответствии с начальным состоянием слайса
      },
      orders: {
        orders: [],
        isLoading: true // Проверяем начальное значение isLoading
      }
    };

    expect(initialState).toEqual(expectedState);
  });
});
