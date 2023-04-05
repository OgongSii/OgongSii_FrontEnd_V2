import { customAxios } from "../../../lib/Axios/customAxios";
import { authType } from "../../../types/Auth/login.type";

class LoginRepository {
  public async onLogin(loginData: authType): Promise<void> {
    await customAxios.post("auth/login", loginData);
  }
}

export default new LoginRepository();
