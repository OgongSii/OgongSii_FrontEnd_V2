import { useEffect, useState } from "react";
import Token from "../../../lib/Token/Token";
import { ACCESS_KEY } from "../../../constants/Auth/auth.constant";

export function useTokenCheck() {
  const [isAuthority, setIsAuthority] = useState<boolean>(true);

  useEffect(() => {
    if (Token.getToken(ACCESS_KEY) === null) {
      setIsAuthority(false);
    } else {
      setIsAuthority(true);
    }
  }, []);

  return { isAuthority };
}
