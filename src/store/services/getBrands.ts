// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TBrand } from "../../types/types";

let token = "bfc4ac97de550f8f9f31ca2079fdf328b08299c8"

// Define a service using a base URL and expected endpoints
export const brandsApi = createApi({
  reducerPath: "brandApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/car_brand",
  }),
  endpoints: (builder) => ({
    getBrandByName: builder.query<TBrand, string>({
      query: (name) => ({
        url: `/`,
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
        },
        body: JSON.stringify({query: name})
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBrandByNameQuery } = brandsApi;
