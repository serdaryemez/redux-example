import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name:"darkmode",
    initialState:{
        status : false // false: off, true: on
    },
    reducers:{
        setDarkMode: (state, action) => {
            state.status = action.payload;
        }
    }
});

export const { setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;