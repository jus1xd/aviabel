import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IUserState {
  id: number;
  brand: string;
  model: string;
  cost: number;
  crash?: boolean;
  img: string;
}

// Define the initial state using that type
const initialState: Array<IUserState> = [
  {
    id: 1,
    brand: "BMW",
    model: "1 серии",
    cost: 4699,
    img: "https://avatars.mds.yandex.net/get-autoru-vos/2147042/d3e88d3dd5626ff396b617cf1e195e53/1200x900n",
  },
  {
    id: 2,
    brand: "BMW",
    model: "M5",
    cost: 38999,
    img: "https://avatars.mds.yandex.net/get-autoru-vos/1942044/40cb02d6d7e831303f0096d52feacd5e/1200x900n",
  },
  {
    id: 3,
    brand: "Mercedes",
    model: "S63",
    cost: 25499,
    img: "https://yastatic.net/naydex/autoru/F26T0Kr86/c1e881DEc/hwRMd85aXO4Axctmw3GSrKVUWQR6Y46ZijfXwCz_Nqcv4sf1BVLmvlqCnInwbh6wVzVaUWy55M_R8IXEkNhVfcdRLW6bW1HHfYDHAq44l_n4dCFdC3PyvWKaZ0DwU7Yn3ko7cUw7_8I_m5k4UFMXXNv924wNocHGFTXl0RRtTLgXYPj3LhbdaiiVwuqb-W4c0WmFgHoKLiUyYosAXINW09Yev2WYs5PzU1eFFHkLS0jH8Vu8hWnZzhnhVUUMcUjgC3T4",
  },
  {
    id: 4,
    brand: "ВАЗ",
    model: "21115",
    cost: 899,
    crash: true,
    img: "https://yastatic.net/naydex/autoru/F26T0Kr86/c1e881DEc/hwRMd85aXO4Axctmw3GSrKVUWQR6Y46ZijfXwCz_Nqcv4sf1BVLqmlaajJX8b06kVnQWUDi8rMvUoJHYoMRZdJtNBWaTQ3CCMNziU8d4l_n4dCFdC3PyvWKaZ0DwU7Yn3ko7cUw7_8I_m5k4UFMXXNv924wNocHGFTXl0RRtTLgXYPj3LhbdaiiVwuqb-W4c0WmFgHoKLiUyYosAXINW09Yev2WYs5PzU1eFFHkLS0jH8Vu8hWnZzhnhVUUMcUjgC3T4",
  },
  {
    id: 5,
    brand: "Volvo",
    model: "XC90",
    cost: 9999,
    img: "https://yastatic.net/naydex/autoru/wUDB14520/76c187xA1ddz/TlxoCJGgjiL3wbhuPnRPyy1G7P35B55RS0x102ZxdAvaJTLXH3aQJ_k1prTCk2djBYtb8w6rxD3BmqotoWWmRg9ZPDnwIAsD4xW4OishO0rMIyi8CZQ854lPB2FkcrKoKDQXc3qXNGOf41ZC1dJVBheoDCBMOILLlHzeuEdklwEsT3vZ9SCNAMOSiX5u1C9cTZe-q2oW7Ebqb9QDF6GCWRn0VSMr4sYjj4LScZWhBSWlmh6B7YtBSCfvf_jW1ESCY",
  },
  {
    id: 6,
    brand: "Volvo",
    model: "S40",
    cost: 7999,
    img: "https://yastatic.net/naydex/autoru/wUDB14520/76c187xA1ddz/TlxoCJGgjiL3wbhuPnRPyy1G7P35B55RS0x102ZxdAvaJTLXH3ZQV9mV9rHC82dWVbsrxs6-FN3kuspN5HWDBlqZ6TmQcDtz4zVYKishO0rMIyi8CZQ854lPB2FkcrKoKDQXc3qXNGOf41ZC1dJVBheoDCBMOILLlHzeuEdklwEsT3vZ9SCNAMOSiX5u1C9cTZe-q2oW7Ebqb9QDF6GCWRn0VSMr4sYjj4LScZWhBSWlmh6B7YtBSCfvf_jW1ESCY",
  },
  {
    id: 7,
    brand: "BMW",
    model: "X3",
    cost: 12499,
    img: "https://avatars.mds.yandex.net/get-autoru-vos/2174324/ac73567d915d5b5d46ae2cc166a054c5/1200x900n",
  },
  {
    id: 8,
    brand: "BMW",
    model: "5 серии",
    cost: 25899,
    img: "https://avatars.mds.yandex.net/get-autoru-vos/2160421/3bef3242ad87c78f5b2d235372070a07/1200x900n",
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

// export const {} = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectFinderBrand = (state: RootState) => state.finder.brand

export default productSlice;
