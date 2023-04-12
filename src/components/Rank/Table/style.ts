import styled, { css } from "styled-components";

export const Property = styled.div<{ isProperty: boolean }>`
  width: 99.9%;
  height: 50px;

  border-radius: 0.5rem;
  position: relative;

  display: flex;
  flex-direction: row;

  ${({ isProperty }) =>
    isProperty
      ? css`
          border: 3px solid black;
        `
      : css`
          background-color: #FFFFFF;
          margin-top: 12px;
        `}

  div {
    width: 50%;
    height: 50px;

    text-align: center;
    line-height: 50px;
  }
`;

export const TupleContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;
