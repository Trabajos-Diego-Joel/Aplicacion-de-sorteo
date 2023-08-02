import { configureStore } from "@reduxjs/toolkit";
import NumberSlice from "./redux/numberSlice";

export const store = configureStore({
    reducer: {
        numero:NumberSlice
    }
})