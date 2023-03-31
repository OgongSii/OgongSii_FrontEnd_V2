import axios from "axios";
import CONFIG from "../.././config/config.json";
import { ACCESS_TOKEN, REQUEST_KEY } from "../../constants/Auth/auth.constant";

export const customAxios = axios.create({
    baseURL: `${CONFIG.server}`,
    headers: {
      [REQUEST_KEY]: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    },
  });