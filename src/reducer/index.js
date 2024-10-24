/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";

const rootReducer = combineReducers({
	// add all reducer
	auth: authReducer,
	profile: profileReducer,
});

export default rootReducer;
