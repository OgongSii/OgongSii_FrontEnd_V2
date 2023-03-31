import styled from "styled-components";

export const LoginContaienr = styled.div`
  width: 100%;
  height: calc(100vh - 86px);
  position: absolute;
  bottom: 0;
`;

export const LoginForm = styled.form`
  width: 500px;
  height: 600px;
  margin: 50px auto;
`;

export const LoginTitle = styled.div`
  text-align: center;
  font-size: 50px;
  line-height: 100px;
`;

export const TitlePoint = styled.span`
  color: #4172fa;
  font-weight: bold;
`;

export const LoginInputContainer = styled.div`
  text-align: center;
  line-height: 60px;
  margin: 30px auto;
`;

export const LoginIdInput = styled.input`
  width: 450px;
  height: 50px;
  outline: none;
  font-size: 15px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid gray;
`;

export const LoginPwInput = styled.input`
  width: 450px;
  height: 50px;
  outline: none;
  font-size: 15px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid gray;
`;

export const LoginBtn = styled.button`
  cursor: pointer;
  border-radius: 0.5rem;
  width: 450px;
  height: 60px;
  outline: none;
  border: none;
  background-color: #5e75eb;
  font-size: 15px;
  color: white;
  margin-top: 30px;
  line-height: 60px;
`;
