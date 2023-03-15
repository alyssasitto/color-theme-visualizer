import { createSlice } from "@reduxjs/toolkit";

import colorData from "../data/colorData";

export const themesArrSlice = createSlice({
	name: "themesArr",
	initialState: { value: colorData },
	reducers: {
		setThemesArr: (state, action) => {
			state.value.unshift(action.payload);
		},
	},
});

export const { setThemesArr } = themesArrSlice.actions;
export default themesArrSlice.reducer;
