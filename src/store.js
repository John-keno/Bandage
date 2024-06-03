import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productAPI } from "./features/apiSlice/dummyData";
import cartReducer from "./features/slices/CartSlice";

const store = configureStore({
  reducer: {
    [productAPI.reducerPath]: productAPI.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
