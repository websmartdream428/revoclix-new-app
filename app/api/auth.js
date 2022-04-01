import axios from "axios";
import settings from "../config/settings";

export const loginApi = async (data) => {
  try {
    const result = await axios.post(`${settings.apiUrl}/auth/login`, data);
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const registerApi = async (data) => {
  try {
    const result = await axios.post(`${settings.apiUrl}/auth/register`, data);
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
