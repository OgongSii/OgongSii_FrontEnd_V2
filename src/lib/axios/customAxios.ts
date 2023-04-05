import axios from "axios";
import CONFIG from "../../config/config.json";
import { ACCESS_KEY, REQUEST_KEY } from "../../constants/Auth/auth.constant";
import Token from "../Token/Token";

export const customAxios = axios.create({
  baseURL: `${CONFIG.server}`,
  headers: {
    [REQUEST_KEY]: `Bearer ${Token.getToken(ACCESS_KEY)}`,
  },
});
