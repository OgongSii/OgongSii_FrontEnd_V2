import { useCallback } from "react";
import Token from "../../../lib/Token/Token";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const logOut = useCallback(() => {
    const ans = window.confirm("로그아웃 하시겠습니까?");
    if (ans === true) {
      Token.clearToken();
      navigate("/");
      B1ndToast.showInfo("로그아웃 되었습니다!");
    }
  }, []);

  return { logOut };
}
