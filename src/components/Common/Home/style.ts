import styled from "styled-components";

export const HomeContainer = styled.div`
  width: calc(100% - 240px);
  height: calc(100vh - 80px);

  position: absolute;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.1);

  display:flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
`;

export const HomeWrap = styled.div`
  width: 45vw;
  height: 80vh;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  background-color:rgba(0, 0, 0, 0.0);
  margin-top: 30px;

  overflow-y: scroll;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;
