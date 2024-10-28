import axios from "axios";

export const signUp = async (userData) => {
  try {
    const response = await axios.post("https://code-book-kappa.vercel.app/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Sign-Up error", error);
    throw error;
  }
};
