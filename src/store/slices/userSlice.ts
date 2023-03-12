import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

// Define a type for the slice state
interface IUserState {
  email: string,
  username?: string,
  name?: string,
  surname?: string,
  password: string,
  isAuth?: boolean
}

// Define the initial state using that type
const initialState: IUserState = {
  email: '',
  username: '',
  name: '',
  surname: '',
  password: '',
  isAuth: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<IUserState>) => {
      state.email = action.payload.email
      state.name = action.payload.name
      state.surname = action.payload.surname
      state.password = action.payload.password
    },
    login: (state, action: PayloadAction<IUserState>) => {
      state.email = action.payload.email
      state.password = action.payload.password
      state.isAuth = true
    },
    register: (state, action: PayloadAction<IUserState>) => {
      state.username = action.payload.username
      state.email = action.payload.email
      state.name = action.payload.name
      state.surname = action.payload.surname
      state.password = action.payload.password
      state.isAuth = true
    },
    logout: (state) => {
      state.username = ''
      state.email = ''
      state.name = ''
      state.surname = ''
      state.password = ''
      state.isAuth = false
    }
  },
})

export const { editUser, login, register, logout } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectFinderBrand = (state: RootState) => state.finder.brand

export default userSlice