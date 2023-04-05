import styled from "styled-components";

export const RecordContainer = styled.form`
  width: 450px;
  height: 100%;

  display: flex;
  flex-direction: column;

  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
`;

export const RecordInput = styled.input`
  width: 450px;
  height: 50px;
  font-size: 15px;

  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;

  border-bottom: 1px solid gray;
  margin-top: 30px;
`;
