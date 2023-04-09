import { useMutation } from "react-query";
import { authType } from "../../types/Auth/login.type";
import authRepository from "../../repositories/Auth/auth.repository";

export const usePostSignUpMutation = () => {
  const mutation = useMutation("auth/signup", (signUpData: authType) =>
    authRepository.onSignUp(signUpData)
  );
  return mutation;
};

export const useLoginMutation = () => {
  const data = useMutation("auth/login", (loginData: authType) => {
    return authRepository.onLogin(loginData);
  });
  return data;
};
