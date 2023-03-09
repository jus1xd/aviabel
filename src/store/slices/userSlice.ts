import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

// Define a type for the slice state
interface IUserState {
  username: string,
}

// Define the initial state using that type
const initialState: IUserState = {
  username: localStorage.getItem('username') || '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload
      localStorage.setItem('username', action.payload)
    },
  },
})

export const { setUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectFinderBrand = (state: RootState) => state.finder.brand

export default userSlice