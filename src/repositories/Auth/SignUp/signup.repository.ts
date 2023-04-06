import { customAxios } from "../../../lib/Axios/customAxios";
import { authType } from "../../../types/Auth/login.type";

class SignUpRepository {
  public async onSignUp(signUpData: authType): Promise<void> {
    await customAxios.post("auth/signup", signUpData);
  }
}

export default new SignUpRepository();
