import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  height: calc(100vh - 86px);
  position: absolute;
  bottom: 0;
`;

export const TitlePoint = styled.span`
  color: #4172fa;
  font-weight: bold;
`;

export const SignupForm = styled.form`
  width: 500px;
  height: 600px;
  margin: 80px auto;
  margin: 80px auto;
`;

export const SignupTitle = styled.div`
  text-align: center;
  font-size: 50px;
  line-height: 100px;
`;

export const SignupInputContainer = styled.div`
  text-align: center;
  line-height: 60px;
  margin: 30px auto;
`;

export const SignupIdInput = styled.input`
  width: 450px;
  height: 50px;
  font-size: 15px;

  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;

  border-bottom: 1px solid gray;
`;

export const SignupPwInput1 = styled.input`
  width: 450px;
  height: 50px;
  font-size: 15px;

  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;

  border-bottom: 1px solid gray;
`;

export const SignupPwInput2 = styled.input`
  width: 450px;
  height: 50px;
  font-size: 15px;

  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;

  border-bottom: 1px solid gray;
`;

export const SingupBtn = styled.button`
  cursor: pointer;
  border-radius: 0.5rem;

  width: 450px;
  height: 60px;

  outline: none;
  border: none;
  background-color: #467cf5;
  color: white;

  font-size: 15px;
  margin-top: 30px;
  line-height: 60px;

  &:hover {
    background-color: #5e75eb;
  }
`;
