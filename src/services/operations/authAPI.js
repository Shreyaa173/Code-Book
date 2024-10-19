/** @format */

import { toast } from "react-hot-toast";

import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { SIGNUP_API, LOGIN_API } = endpoints;

export function signUp(
	firstName,
	lastName,
	email,
	password,
	confirmPassword,
	navigate
) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading...");
		dispatch(setLoading(true));
		try {
			const response = await apiConnector("POST", SIGNUP_API, {
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
			});

			console.log("SIGNUP API RESPONSE............", response);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}
			toast.success("Signup Successful");
			navigate("/login");
		} catch (error) {
			console.log("SIGNUP API ERROR............", error);
			toast.error("Signup Failed");
			navigate("/signup");
		}
		dispatch(setLoading(false));
		toast.dismiss(toastId);
	};
}

export function login(email, password, navigate) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading...");
		dispatch(setLoading(true));
		try {
			const response = await apiConnector("POST", LOGIN_API, {
				email,
				password,
			});

			console.log("LOGIN API RESPONSE............", response);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}

			toast.success("Login Successful");
			dispatch(setToken(response.data.token));
			const userImage = response.data?.user?.image
				? response.data.user.image
				: `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName}${response.data.user.lastName}`;

			dispatch(setUser({ ...response.data.user, image: userImage }));

			localStorage.setItem("token", JSON.stringify(response.data.token));

			localStorage.setItem("user", JSON.stringify(response.data.user)); // now i'm able to understand the significance of local storage
			navigate("/");
		} catch (error) {
			console.log("LOGIN API ERROR............", error);
			toast.error("Login Failed");
		}
		dispatch(setLoading(false));
		toast.dismiss(toastId);
	};
}

export function logout(navigate) {
	return (dispatch) => {
		dispatch(setToken(null));
		dispatch(setUser(null));
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		toast.success("Logged Out");
		navigate("/");
	};
}
