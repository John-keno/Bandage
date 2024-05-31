import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"



export const productAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder) => ({
        // get Products
        getProducts: builder.query({
            query: (limit=30) => `/products?limit=${limit}`,

        })
    })
})


export const {useGetProductsQuery} = productAPI;