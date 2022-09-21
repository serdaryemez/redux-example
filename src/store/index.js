import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import darkModeSlice from "./slices/dark-mode-slice";
import localeSlice from "./slices/locale-slice";

export default configureStore({
    reducer:{
        counter: counterSlice,
        darkMode: darkModeSlice,
        locale: localeSlice
    }
})