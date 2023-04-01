import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useGoPage = () => {
  const navigate = useNavigate();
  const onPageToggle = useCallback(
    (page: string, link: string) => {
      navigate(`/${link}`);
      localStorage.setItem("page", page);
    },
    [navigate]
  );
  return { onPageToggle };
};
