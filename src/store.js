import { configureStore } from "@reduxjs/toolkit";
import NumberSlice from "./redux/NumberSlice";

export const store = configureStore({
    reducer: {
        numero:NumberSlice
    }
})