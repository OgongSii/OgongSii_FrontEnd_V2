import styled, { css } from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const PostRecordoComponentContainer = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;

  border-radius: 1rem 1rem 0 0;

  display: flex;
  flex-direction: row;

  line-height: 50px;
  cursor: pointer;
`;

export const PostComponent = styled.div<{ isRecord: boolean }>`
  width: 50%;
  height: 50px;

  color: #ffffff;
  background-color: #4172fa;
  border-radius: 1rem 0 0 0;

  ${({ isRecord }) =>
    isRecord
      ? css`
          background-color: #ebeef2;
          color: black;
          &:hover {
            background-color: #e6e9ed;
          }
        `
      : css`
          &:hover {
            background-color: #467cf5;
          }
        `}
`;

export const RecordComponent = styled.div<{ isRecord: boolean }>`
  width: 50%;
  height: 50px;

  border-radius: 0 1rem 0 0;
  background-color: #ebeef2;
  color: #ffffff;
  background-color: #4172fa;
  ${({ isRecord }) =>
    isRecord
      ? css`
          &:hover {
            background-color: #467cf5;
          }
        `
      : css`
          background-color: #ebeef2;
          color: black;
          &:hover {
            background-color: #e6e9ed;
          }
        `}
`;

export const WriteWrap = styled.div`
  width: 100%;
  height: 468px;

  border-radius: 0 0 1rem 1rem;
`;

export const NoneLoginSignModal = styled.div`
  text-align: center;
  line-height: 518px;

  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;
