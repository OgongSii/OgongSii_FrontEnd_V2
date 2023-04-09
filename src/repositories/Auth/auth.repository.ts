import { customAxios } from "../../lib/Axios/customAxios";
import { authType } from "../../types/Auth/login.type";
import { LoginResponseType } from "./auth.param";

class AuthRepository {
  public async onSignUp(signUpData: authType): Promise<void> {
    await customAxios.post("auth/signup", signUpData);
  }

  public async onLogin(loginData: authType): Promise<LoginResponseType> {
    const { data } = await customAxios.post("auth/login", loginData);
    return data;
  }
}

export default new AuthRepository();
