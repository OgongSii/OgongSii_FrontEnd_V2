import { useMutation } from "react-query";
import signupRepository from "../../../repositories/Auth/SignUp/signup.repository";
import { authType } from "../../../types/Auth/login.type";

export const usePostSignUpMutation = () => {
  const mutation = useMutation("auth/signup", (signUpData: authType) =>
    signupRepository.onSignUp(signUpData)
  );
  return mutation;
};
