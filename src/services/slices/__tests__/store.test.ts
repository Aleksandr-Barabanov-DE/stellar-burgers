import store from '../../store'; // путь к вашему store
import { ingredientsSlice } from '../../slices/IngredientsSlice';
import { feedsSlice } from '../../slices/feedsSlice';
import { newOrderSlice } from '../../slices/newOrderSlice';
import { constructorSlice } from '../../slices/constructorIngredientSlice';
import { userSlice } from '../../slices/userSlice';
import { userOrdersSlice } from '../../slices/userOrdersSlice';

// Начальные состояния для каждого слайса
const initialIngredientsState = {
  ingredients: [],
  loading: false,
  error: null
};

const initialFeedsState = {
  orders: [],
  total: 0,
  totalToday: 0,
  isLoading: true,
  error: undefined
};

const initialNewOrderState = {
  isLoading: false,
  orderRequest: false,
  orderModalData: null,
  error: undefined
};

const initialConstructorState = {
  bun: null,
  ingredients: [],
  error: undefined,
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
  error: ''
};

const initialUserOrdersState = {
  isLoading: false,
  error: undefined,
  orderData: []
};
