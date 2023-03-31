import { useMutation } from "react-query";
import loginRepository from "../../repositories/Login/login.repository";
import { authType } from "../../types/Auth/login.type";

export const usePostLogin = () => {
  const mutation = useMutation("auth/login", (data: authType) =>
    loginRepository.onLogin(data)
  );

  return mutation;
};
