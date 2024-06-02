import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketslice.js" 

export const store = configureStore({
    reducer:{
        basket: basketReducer,  
    }
})