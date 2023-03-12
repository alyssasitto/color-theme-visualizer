import { createSlice } from "@reduxjs/toolkit";

import colorData from "../data/colorData";

export const themeSlice = createSlice({
	name: "theme",
	initialState: { value: colorData[0] },
	reducers: {
		setTheme: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
