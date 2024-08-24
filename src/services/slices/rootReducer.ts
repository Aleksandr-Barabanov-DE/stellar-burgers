import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsSlice } from './IngredientsSlice';
import { feedsSlice } from './feedsSlice';
import { newOrderSlice } from './newOrderSlice';
import { constructorSlice } from './constructorIngredientSlice';
import { userSlice } from './userSlice';
import { userOrdersSlice } from './userOrdersSlice';

export const rootReducer = combineReducers({
  [ingredientsSlice.name]: ingredientsSlice.reducer,
  [constructorSlice.name]: constructorSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [feedsSlice.name]: feedsSlice.reducer,
  [newOrderSlice.name]: newOrderSlice.reducer,
  [userOrdersSlice.name]: userOrdersSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;