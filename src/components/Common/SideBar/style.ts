import styled from "styled-components";
import { BsPerson } from "react-icons/bs";

export const SidebarWrapper = styled.div`
  width: 240px;
  height: calc(100vh - 80px);
  background-color: #ffffff;
  box-shadow: -3px 1px 3px -2px #4172fa;

  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  text-align: center;
`;

export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;

  background-color: #4172fa;
  border: 7px solid black;
  border-radius: 50%;

  object-fit: cover;
  margin-top: 20px;
`;

export const NoneProfile = styled(BsPerson)`
  width: 150px;
  height: 150px;

  border-radius: 50%;
  margin-top: 20px;
  padding: 10px;

  background-color: #ffffff;
  color: black;
  border: 7px solid #4172fa;
`;

export const UserInfo = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
`;

export const MyId = styled.div`
  width: 200px;
  height: 50px;

  margin-bottom: 20px;
  padding-top: 17px;

  border-bottom: 2px solid black;
  background-color: #ffffff;
`;

export const GoPage = styled.div`
  width: 200px;
  height: 50px;
  color: #ffffff;
  
  line-height: 50px;
  margin-bottom: 20px;

  background-color: #4172fa;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #467cf5;
  }
`;
