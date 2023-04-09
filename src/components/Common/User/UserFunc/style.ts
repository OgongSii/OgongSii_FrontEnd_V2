import styled from "styled-components";

export const FuncContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const GoRecord = styled.div`
  width: 200px;
  height: 50px;
  color: #FFFFFF;

  margin: 20px 0 20px 0;
  line-height: 50px;

  background-color: #4172fa;
  border-radius: 1rem;
  box-shadow: 0 0 10px #9199f5;

  cursor: pointer;

  &:hover {
    background-color: #467cf5;
  }
`;
