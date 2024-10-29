/** @format */
import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { SIGNUP_API, LOGIN_API } = endpoints;

// Utility functions to improve code reuse
const handleApiError = (error, action) => {
  console.log(`${action} API ERROR............`, error);
  toast.error(`${action} Failed`);
  return error;
};

const handleLocalStorage = (token, user, shouldSave = true) => {
  if (shouldSave) {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};

const generateUserImage = (firstName, lastName) => 
  `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`;

const executeApiAction = async (dispatch, action, apiCall) => {
  const toastId = toast.loading("Loading...");
  dispatch(setLoading(true));
  try {
    const result = await apiCall();
    return result;
  } finally {
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  }
};

export function signUp(name, email, password, navigate) {
  return async (dispatch) => {
    await executeApiAction(dispatch, "Signup", async () => {
      try {
        const response = await apiConnector("POST", SIGNUP_API, {
          name,
          email,
          password,
        });

        console.log("SIGNUP API RESPONSE............", response);

        if (!response.data.success) {
          throw new Error(response.data.message);
        }

        toast.success("Signup Successful");
        navigate("/login");
        return response;
      } catch (error) {
        handleApiError(error, "Signup");
        navigate("/signup");
        throw error;
      }
    });
  };
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    await executeApiAction(dispatch, "Login", async () => {
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        });

        console.log("LOGIN API RESPONSE............", response);

        if (!response.data.success) {
          throw new Error(response.data.message);
        }

        const { token, user } = response.data;
        const userImage = user?.image || generateUserImage(user.firstName, user.lastName);

        dispatch(setToken(token));
        dispatch(setUser({ ...user, image: userImage }));
        handleLocalStorage(token, user);

        toast.success("Login Successful");
        navigate("/");
        return response;
      } catch (error) {
        handleApiError(error, "Login");
        throw error;
      }
    });
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    handleLocalStorage(null, null, false);
    toast.success("Logged Out");
    navigate("/");
  };
}