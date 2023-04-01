import { useCallback, useState } from "react";
import { usePostLogin } from "../../../queries/Login/login.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { authType } from "../../../types/Auth/login.type";

export function useLogin() {
  const [id, SetId] = useState<string>("");
  const [pw, SetPw] = useState<string>("");
  const login = usePostLogin();

  const onLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "id") SetId(e.target.value);
      else SetPw(e.target.value);
    },
    []
  );

  const onLoginClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (id && pw) {
        const data: authType = {
          name: id,
          password: pw,
        };
        login.mutate(data, {
          onSuccess: (res) => {
            B1ndToast.showSuccess("로그인 성공!");
          },
          onError: () => {
            B1ndToast.showError("로그인 실패!");
          },
          onSettled: () => {
            SetId("");
            SetPw("");
          },
        });
      } else B1ndToast.showInfo("제대로 입력해주세요!");
    },
    [id, pw]
  );

  return { onLoginChange, id, pw, onLoginClick };
}
