import { customAxios } from "../../../lib/Axios/customAxios";
import { authType } from "../../../types/Auth/login.type";

class SignUpRepository {
  public async onSignUp(data: authType): Promise<void> {
    await customAxios.post("auth/signup", data);
  }
}

export default new SignUpRepository();
