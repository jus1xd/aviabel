import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

// Define a type for the slice state
interface IFinderState {
  brand: string,
  model: string,
  // ...
}

// Define the initial state using that type
const initialState: IFinderState = {
  brand: '',
  model: '',
}

export const finderSlice = createSlice({
  name: 'finder',
  initialState,
  reducers: {
    finderBrandValue: (state, action: PayloadAction<string>) => {
      state.brand = action.payload
    },
    finderModelValue: (state, action: PayloadAction<string>) => {
      state.model = action.payload
    }
  },
})

export const { finderBrandValue, finderModelValue } = finderSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectFinderBrand = (state: RootState) => state.finder.brand

export default finderSlice