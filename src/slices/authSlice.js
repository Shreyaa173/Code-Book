/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	token: localStorage.getItem("token")
		? JSON.parse(localStorage.getItem("token"))
		: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		setLoading(state, value) {
			state.loading = value.payload;
		},
		setToken(state, value) {
			state.token = value.payload;
		},
	},
});

export const { setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
