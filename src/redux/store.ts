import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./Cart/cartReducer";
import { api } from "../services/api";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        cart: cartSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;