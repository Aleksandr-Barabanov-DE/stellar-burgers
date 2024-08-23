import userOrdersReducer, {
  getUserOrders,
  TOrdersState
} from '../userOrdersSlice';

// Моковые данные заказов
const mockOrders = [
  {
    _id: '669aedd1119d45001b4fa28a',
    ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093e'],
    status: 'done',
    name: 'Краторный люминесцентный бургер',
    createdAt: '2024-07-19T22:50:57.102Z',
    updatedAt: '2024-07-19T22:50:57.498Z',
    number: 46528
  },
  {
    _id: '669aed60119d45001b4fa289',
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0940',
      '643d69a5c3f7b9001cfa0947'
    ],
    status: 'done',
    name: 'Флюоресцентный фалленианский метеоритный бургер',
    createdAt: '2024-07-19T22:49:04.841Z',
    updatedAt: '2024-07-19T22:49:05.319Z',
    number: 46527
  }
];

describe('Тесты асинхронных экшенов userOrdersSlice', () => {
  test('getUserOrders fulfilled', () => {
    const initialState: TOrdersState = {
      orders: [],
      isLoading: true
    };

    const newState = userOrdersReducer(
      initialState,
      getUserOrders.fulfilled(mockOrders, '', undefined)
    );

    const { orders, isLoading } = newState;

    expect(isLoading).toBe(false);
    expect(orders).toEqual(mockOrders);
  });

  test('getUserOrders pending', () => {
    const initialState: TOrdersState = {
      orders: [],
      isLoading: false
    };

    const newState = userOrdersReducer(
      initialState,
      getUserOrders.pending('', undefined)
    );

    const { isLoading } = newState;

    expect(isLoading).toBe(true);
  });

  test('getUserOrders rejected', () => {
    const initialState: TOrdersState = {
      orders: [],
      isLoading: true
    };

    const newState = userOrdersReducer(
      initialState,
      getUserOrders.rejected({ name: '', message: 'test error' }, '', undefined)
    );

    const { isLoading } = newState;

    expect(isLoading).toBe(false);
  });
});
