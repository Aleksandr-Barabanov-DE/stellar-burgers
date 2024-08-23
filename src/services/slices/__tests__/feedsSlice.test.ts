import reducer, { TFeedsState, feedsSlice, getAllFeeds } from '../feedsSlice'; // Обновите путь, если нужно
import { TOrder } from '@utils-types';

// Mock API response
const mockFeedResponse = {
  success: true,
  orders: [
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
  ],
  total: 46154,
  totalToday: 116
};

// Initial state
const initialState: TFeedsState = {
  orders: [],
  total: 0,
  totalToday: 0,
  isLoading: true,
  error: undefined
};

describe('Feeds Slice', () => {
  test('getAllFeeds fulfilled', () => {
    const newState = reducer(
      initialState,
      getAllFeeds.fulfilled(mockFeedResponse, '')
    );
    expect(newState.orders).toEqual(mockFeedResponse.orders);
    expect(newState.total).toEqual(mockFeedResponse.total);
    expect(newState.totalToday).toEqual(mockFeedResponse.totalToday);
    expect(newState.isLoading).toBe(false);
    expect(newState.error).toBeUndefined();
  });

  test('getAllFeeds pending', () => {
    const newState = reducer(initialState, getAllFeeds.pending(''));
    expect(newState.isLoading).toBe(true);
    expect(newState.error).toBeUndefined();
  });

  test('getAllFeeds rejected', () => {
    const newState = reducer(
      initialState,
      getAllFeeds.rejected({ name: '', message: 'test error' }, '')
    );
    expect(newState.isLoading).toBe(false);
    expect(newState.error).toBe('test error');
    expect(newState.orders).toEqual([]);
    expect(newState.total).toBe(0);
    expect(newState.totalToday).toBe(0);
  });
});
