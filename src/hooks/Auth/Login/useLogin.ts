import { useCallback, useState } from "react";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { authType } from "../../../types/Auth/login.type";
import Token from "../../../lib/Token/Token";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../../lib/Axios/customAxios";
import { ACCESS_KEY } from "../../../constants/Auth/auth.constant";

export function useLogin() {
  const [id, SetId] = useState<string>("");
  const [pw, SetPw] = useState<string>("");
  const navigate = useNavigate();

  const onLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "id") SetId(e.target.value);
      else SetPw(e.target.value);
    },
    []
  );

  const onLoginClick = useCallback(
    async(e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (id && pw) {
        const loginData: authType = {
          name: id,
          password: pw,
        };
        try{
          const { data } = await customAxios.post("auth/login",loginData);
          Token.setToken(ACCESS_KEY,data.accessToken);
          Token.setToken("userName",data.name);
          localStorage.removeItem("page");
          B1ndToast.showSuccess("로그인 성공!");
          navigate('/');
          SetId("");
          SetPw("");
        }
        catch(e){
          B1ndToast.showError("로그인 실패!");
        }
      } else B1ndToast.showInfo("제대로 입력해주세요!");
    },
    [id, pw]
  );

  return { onLoginChange, id, pw, onLoginClick };
}