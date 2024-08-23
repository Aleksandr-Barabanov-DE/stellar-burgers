// import newOrderSliceReducer, { initialState, placeNewOrder } from '../newOrderSlice';

// const mockOrder = {
//   _id: '669aedd1119d45001b4fa28a',
//   ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093e'],
//   status: 'done',
//   name: 'Краторный люминесцентный бургер',
//   createdAt: '2024-07-19T22:50:57.102Z',
//   updatedAt: '2024-07-19T22:50:57.498Z',
//   number: 46528
// };

// describe('тесты асинхронных экшенов для создания заказа', () => {
//   test('placeNewOrder fulfilled', () => {
//     const newState = newOrderSliceReducer(
//       initialState,
//       placeNewOrder.fulfilled({ order: mockOrder }, '')
//     );
//     const { orderModalData, orderRequest, error } = newState;

//     expect(orderRequest).toBe(false);
//     expect(orderModalData).toEqual(mockOrder);
//     expect(error).toBeUndefined();
//   });

//   test('placeNewOrder pending', () => {
//     const newState = newOrderSliceReducer(
//       initialState,
//       placeNewOrder.pending('')
//     );
//     const { orderRequest } = newState;

//     expect(orderRequest).toBe(true);
//   });

//   test('placeNewOrder rejected', () => {
//     const newState = newOrderSliceReducer(
//       initialState,
//       placeNewOrder.rejected({ name: '', message: 'test error' }, '')
//     );
//     const { error, orderRequest } = newState;

//     expect(orderRequest).toBe(false);
//     expect(error).toBe('test error');
//   });
// });
