import { useMutation } from "react-query";
import signupRepository from "../../../repositories/Auth/SignUp/signup.repository";
import { authType } from "../../../types/Auth/login.type";

export const usePostSignUpMutation = () => {
  const mutataion = useMutation("auth/signup", (data: authType) =>
    signupRepository.onSignUp(data)
  );
  return mutataion;
};
