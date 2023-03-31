import { useMutation } from "react-query";
import signupRepository from "../../repositories/SignUp/signup.repository";
import { authType } from "../../types/Auth/login.type";

export const usePostSignUp = () => {
  const mutataion = useMutation("auth/signUp", (data: authType) =>
    signupRepository.onSignUp(data)
  );
  return mutataion;
};
