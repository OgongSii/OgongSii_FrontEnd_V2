import { customAxios } from "../../lib/axios/customAxios";
import { authType } from "../../types/Auth/login.type";

class SignUpRepository {
    public async onSignUp(data:authType): Promise<void> {
        await customAxios.post('/auth/signUp',data);
    };
}

export default new SignUpRepository();