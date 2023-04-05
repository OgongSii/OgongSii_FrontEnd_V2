import styled, { css } from "styled-components";
import { FaUpload } from "react-icons/fa";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: 400px;
  height: 100%;
`;

export const Introduce = styled.div<{ isRecord: boolean }>`
  font-size: 16px;
  font-weight: bold;
  color: rgb(70, 124, 245);
  text-align: left;

  ${({ isRecord }) =>
    isRecord
      ? css`
          margin-top: 20px;
        `
      : css`
          margin-top: 50px;
        `}
`;

export const PostTextArea = styled.textarea`
  width: 400px;
  height: 100px;

  margin-top: 40px;
  font-size: 17px;

  border: none;
  outline: none;
  resize: none;

  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 0 0 5px;
  border-radius: 0rem 1rem 0 1rem;
`;

export const ImgUploadIcon = styled(FaUpload)`
  cursor: pointer;
`;

export const ImgUploadContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const ImgCancel = styled.span`
  cursor: pointer;
  margin-right: 10px;
  color: #fc2321;
`;
