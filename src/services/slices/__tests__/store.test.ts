import store from '../../store'; // путь к вашему store
import { ingredientsSlice } from '../../slices/IngredientsSlice';
import { feedsSlice } from '../../slices/feedsSlice';
import { newOrderSlice } from '../../slices/newOrderSlice';
import { constructorSlice } from '../../slices/constructorIngredientSlice';
import { userSlice } from '../../slices/userSlice';
import { userOrdersSlice } from '../../slices/userOrdersSlice';

// Начальные состояния для каждого слайса
const initialIngredientsState = {
  isLoading: false,
  ingredients: [],
  error: undefined
};

const initialFeedsState = {
  isLoading: false,
  orders: [],
  feed: {
    total: 0,
    totalToday: 0
  },
  error: undefined
};

const initialNewOrderState = {
  isLoading: false,
  error: undefined
};

const initialConstructorState = {
  isLoading: false,
  error: undefined,
  orderRequest: false,
  orderModalData: null,
  constructorItems: {
    bun: {},
    ingredients: []
  }
};

const initialUserState = {
  isLoading: false,
  isAuthChecked: false,
  user: {
    email: '',
    name: ''
  },
  error: undefined
};

const initialUserOrdersState = {
  isLoading: false,
  error: undefined,
  orderData: []
};

test('тест начального состояния хранилища', () => {
  const state = store.getState();

  const expectedState = {
    [ingredientsSlice.name]: initialIngredientsState,
    [feedsSlice.name]: initialFeedsState,
    [newOrderSlice.name]: initialNewOrderState,
    [constructorSlice.name]: initialConstructorState,
    [userSlice.name]: initialUserState,
    [userOrdersSlice.name]: initialUserOrdersState
  };

  expect(state).toEqual(expectedState);
});
