import { useCallback, useState } from "react";
import { usePostSignUpMutation } from "../../../queries/Auth/auth.query";
import { authType } from "../../../types/Auth/login.type";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QueryClient } from "react-query";
import {
  EmailRegex,
  PasswordRegex,
} from "../../../constants/Auth/auth.constant";

export function useSignUp() {
  const [email, SetEmail] = useState<string>("");
  const [pw1, SetPw1] = useState<string>("");
  const [pw2, SetPw2] = useState<string>("");

  const signupMutate = usePostSignUpMutation();
  const queryClient = new QueryClient();

  const onSignUpChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "email") SetEmail(e.target.value);
      else if (e.target.name === "pw1") SetPw1(e.target.value);
      else SetPw2(e.target.value);
    },
    []
  );

  const onSignUpClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (
        email &&
        pw1 &&
        pw2 &&
        EmailRegex.test(email) &&
        PasswordRegex.test(pw1)
      ) {
        if (pw1 === pw2) {
          const signUpData: authType = {
            name: email,
            password: pw1,
          };
          signupMutate.mutateAsync(signUpData, {
            onSuccess: () => {
              B1ndToast.showSuccess("회원가입 성공!");
              queryClient.invalidateQueries("auth/signup");
            },
            onError: (e: any) => {
              B1ndToast.showError(e.response.data);
            },
            onSettled: () => {
              SetEmail("");
              SetPw1("");
              SetPw2("");
            },
          });
        } else B1ndToast.showError("비밀번호가 일치하지 않습니다!");
      } else B1ndToast.showInfo("제대로 입력해주세요!");
    },
    [email, pw1, pw2]
  );

  return { onSignUpChange, email, pw1, pw2, onSignUpClick };
}
