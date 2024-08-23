import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { orderBurgerApi } from '@api';

// Создаем асинхронный экшен
export const placeNewOrder = createAsyncThunk(
  'order/createOrder',
  orderBurgerApi
);

// Определяем начальное состояние
export interface TNewOrderState {
  orderRequest: boolean;
  orderModalData: TOrder | null;
  error: string | undefined;
}

export const initialState: TNewOrderState = {
  orderRequest: false,
  orderModalData: null,
  error: undefined
};

// Создаем слайс
export const newOrderSlice = createSlice({
  name: 'newOrder',
  initialState,
  reducers: {
    resetOrder: (state) => initialState
  },
  selectors: {
    getOrderRequest: (state) => state.orderRequest,
    getOrderModalData: (state) => state.orderModalData
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeNewOrder.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderModalData = action.payload.order;
      })
      .addCase(placeNewOrder.rejected, (state, action) => {
        state.orderRequest = false;
        state.error = action.error.message;
      })
      .addCase(placeNewOrder.pending, (state) => {
        state.orderRequest = true;
      });
  }
});

// Экспортируем все необходимые элементы
export const { resetOrder } = newOrderSlice.actions;
export const { getOrderRequest, getOrderModalData } = newOrderSlice.selectors;
export default newOrderSlice.reducer;
