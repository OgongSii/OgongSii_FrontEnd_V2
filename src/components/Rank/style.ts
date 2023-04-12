import styled, { css } from "styled-components";

export const RankContainer = styled.div`
  width: calc(100% - 240px);
  height: calc(100vh - 80px);

  position: absolute;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  padding: 0px 20px 0 20px;
`;

export const ChooseContainer = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 10px;

  display: flex;
  flex-direction: row;

  position: relative;
  cursor: pointer;
  border-radius: 1rem;
`;

export const TotalRank = styled.div<{ isTotal: boolean }>`
  width: 50%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 1rem 0 0 1rem;
  ${({ isTotal }) =>
    isTotal
      ? css`
          background-color: rgb(65, 114, 250);
          box-shadow: 0px 0px 10px rgba(145, 153, 245);
          color: #ffffff;
          &:hover {
            background-color: #467cf5;
            box-shadow: 0px 0px 10px rgba(145, 153, 245);
          }
        `
      : css`
          background-color: #ebeef2;
          box-shado: 0px 0px 10px rgba(0, 0, 0, 0.1);
          &:hover {
            background-color: #e6e9ed;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }
        `}
`;

export const TodayRank = styled.div<{ isTotal: boolean }>`
  position: absolute;
  right: 0;

  width: 50%;
  height: 50px;
  line-height: 50px;

  text-align: center;
  border-radius: 0 1rem 1rem 0;
  ${({ isTotal }) =>
    isTotal
      ? css`
          background-color: #ebeef2;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          &:hover {
            background-color: #e6e9ed;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }
        `
      : css`
          background-color: rgb(65, 114, 250);
          box-shadow: 0px 0px 10px rgba(145, 153, 245);
          color: #ffffff;
          &:hover {
            background-color: #467cf5;
            box-shadow: 0px 0px 10px rgba(145, 153, 245);
          }
        `}
`;

export const RankingContainer = styled.div`
  width: 100%;
  min-height: calc(100% - 50px);

  overflow: scroll;
  padding-top: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
