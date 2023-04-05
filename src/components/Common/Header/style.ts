import styled from "styled-components";

export const HeadContainer = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 3px 3px -2px #4172fa;

  background-color: #ffffff;
  color: black;

  position: absolute;
  left: 0;
  top: 0;
`;

export const Logo = styled.div`
  cursor: pointer;
  background-color: #ffffff;

  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
`;

export const LogoPoint = styled.span`
  color: #4172fa;
  font-weight: bold;
`;

export const LoginSignContainer = styled.div`
  background-color: #ffffff;
  color: black;
`;

export const Login = styled.span`
  cursor: pointer;
`;

export const Sign = styled.span`
  cursor: pointer;
`;
