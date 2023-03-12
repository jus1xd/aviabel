import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TBrand } from "../../types/types";
// import type { RootState } from '../store'

// Define the initial state using that type
const initialState: TBrand = {
  suggestions: {
    value: "",
    data: {
      id: 0,
      name: "",
      name_ru: "",
    },
  },
};

export const brandsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const {} = brandsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectFinderBrand = (state: RootState) => state.finder.brand

export default brandsSlice;
