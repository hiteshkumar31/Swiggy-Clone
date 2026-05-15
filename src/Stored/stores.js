import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CardSlicer";

export const stores = configureStore({
    reducer:{
        cartslice:CartReducer,
    }
})