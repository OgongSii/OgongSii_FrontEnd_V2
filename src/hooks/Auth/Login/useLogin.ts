import { useCallback, useState } from "react";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { authType } from "../../../types/Auth/login.type";
import Token from "../../../lib/Token/Token";
import { useNavigate } from "react-router-dom";
import {
  ACCESS_KEY,
  EmailRegex,
  PasswordRegex,
} from "../../../constants/Auth/auth.constant";
import { useLoginMutation } from "../../../queries/Auth/auth.query";
import { QueryClient } from "react-query";

export function useLogin() {
  const [email, SetEmail] = useState<string>("");
  const [pw, SetPw] = useState<string>("");
  const navigate = useNavigate();
  const loginMutate = useLoginMutation();
  const queryClient = new QueryClient();

  const onLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "email") SetEmail(e.target.value);
      else SetPw(e.target.value);
    },
    []
  );

  const onLoginClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (email && pw && EmailRegex.test(email) && PasswordRegex.test(pw)) {
        const loginData: authType = {
          name: email,
          password: pw,
        };
        loginMutate.mutateAsync(loginData, {
          onSuccess(data) {
            Token.setToken(ACCESS_KEY, data.accessToken);
            Token.setToken("userName", data.name?.split("@")[0]);
            localStorage.removeItem("page");
            B1ndToast.showSuccess("로그인 성공!");
            queryClient.invalidateQueries("auth/login");
            navigate("/");
          },
          onError: () => {
            B1ndToast.showError("로그인 실패!");
          },
          onSettled: () => {
            SetEmail("");
            SetPw("");
          },
        });
      }
      else B1ndToast.showInfo("제대로 입력해주세요!");
    },
    [email, pw, navigate]
  );

  return { onLoginChange, email, pw, onLoginClick };
}
