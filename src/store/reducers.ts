import { combineReducers } from "@reduxjs/toolkit";
import { brandsApi } from "./services/getBrands";
import finderSlice from "./slices/finderSlice";
import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";

export const rootReducer = combineReducers({
  finder: finderSlice.reducer,
  user: userSlice.reducer,
  product: productSlice.reducer,
  [brandsApi.reducerPath]: brandsApi.reducer,
});