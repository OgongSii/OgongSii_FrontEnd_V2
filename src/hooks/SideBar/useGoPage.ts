import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Token from "../../lib/Token/Token";

export const useGoPage = () => {
  const navigate = useNavigate();

  const onPageToggle = useCallback(
    (page: string, link: string) => {
      navigate(`/${link}`);
      Token.setToken("page", page);
    },
    [navigate]
  );
  return { onPageToggle };
};
