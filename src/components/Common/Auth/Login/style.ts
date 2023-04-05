import styled, { css } from "styled-components";

export const LoginContaienr = styled.div`
  width: 100%;
  height: calc(100vh - 86px);
  position: absolute;
  bottom: 0;
`;

export const LoginForm = styled.form`
  width: 500px;
  height: 600px;
  margin: 80px auto;
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

export const Input = styled.input`
  width: 450px;
  height: 50px;
  font-size: 15px;

  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;

  border-bottom: 1px solid gray;
`;

export const Btn = styled.button<{ isModal: boolean; isPost: boolean }>`
  cursor: pointer;
  border-radius: 0.5rem;
  height: 60px;

  outline: none;
  border: none;
  background-color: #467cf5;
  color: white;

  font-size: 15px;
  line-height: 60px;

  ${({ isModal }) =>
    isModal
      ? css`
          margin-top: 95px;
        `
      : css`
          margin-top: 30px;
        `}

  ${({ isPost }) =>
    isPost
      ? css`
          width: 400px;
          margin-top: 90px;
        `
      : css`
          width: 450px;
        `}

  &:hover {
    background-color: #5e75eb;
  }
`;
