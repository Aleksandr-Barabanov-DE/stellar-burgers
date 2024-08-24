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
        error: undefined
      },
      constructorIngredient: {
        bun: null, // соответствует initialState
        ingredients: []
      },
      user: {
        isLoading: false,
        isAuthChecked: false,
        user: {
          email: '',
          name: ''
        },
        error: undefined
      },
      feeds: {
        orders: [],
        total: 0,
        totalToday: 0,
        isLoading: true,
        error: undefined
      },
      newOrder: {
        orderRequest: false,
        orderModalData: null,
        error: undefined
      },
      orders: {
        orders: [],
        isLoading: true
      }
    };

    expect(initialState).toEqual(expectedState);
  });
});
