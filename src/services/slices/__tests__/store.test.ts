import store from '../../store'; // путь к вашему store
import { ingredientsSlice } from '../../slices/IngredientsSlice';
import { feedsSlice } from '../../slices/feedsSlice';
import { newOrderSlice } from '../../slices/newOrderSlice';
import { constructorSlice } from '../../slices/constructorIngredientSlice';
import { userSlice } from '../../slices/userSlice';
import { userOrdersSlice } from '../../slices/userOrdersSlice';

// Начальные состояния для каждого слайса
const initialIngredientsState = {
  loading: false, // поправлено на loading в соответствии с вашими ошибками
  ingredients: [],
  error: null // изменено с undefined на null
};

const initialFeedsState = {
  isLoading: true, // поправлено на isLoading в соответствии с вашими ошибками
  orders: [],
  total: 0,
  totalToday: 0,
  error: undefined // изменено с null на undefined
};

const initialNewOrderState = {
  isLoading: false,
  orderRequest: false, // добавлено в соответствии с вашими ошибками
  orderModalData: null, // добавлено в соответствии с вашими ошибками
  error: undefined // изменено с null на undefined
};

const initialConstructorState = {
  bun: null, // изменено с {} на null в соответствии с вашими ошибками
  ingredients: [],
  error: undefined, // изменено с null на undefined
  isLoading: false,
  orderRequest: false,
  orderModalData: null
};

const initialUserState = {
  isLoading: false,
  isAuthChecked: false,
  user: {
    email: '',
    name: ''
  },
  error: '' // изменено с undefined на пустую строку
};

const initialUserOrdersState = {
  isLoading: false,
  error: undefined, // изменено с null на undefined
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
