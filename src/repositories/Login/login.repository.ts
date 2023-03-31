import { customAxios } from "../../lib/axios/customAxios";
import { authType } from "../../types/Auth/login.type";

class LoginRepository {
  public async onLogin(data: authType): Promise<void> {
    await customAxios.post("/auth/login", data);
  }
}

export default new LoginRepository();
