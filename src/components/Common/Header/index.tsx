import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Token from "../../../lib/Token/Token";
import { ACCESS_KEY } from "../../../constants/Auth/auth.constant";
import { useLogout } from "../../../hooks/Auth/Logout/useLogout";

export default function Header() {
  const navigate = useNavigate();
  const { logOut } = useLogout();
  return (
    <S.HeadContainer>
      <S.Logo
        onClick={() => {
          navigate("/");
          localStorage.removeItem("page");
        }}
      >
        <S.LogoPoint>O</S.LogoPoint>gong<S.LogoPoint>S</S.LogoPoint>ii
      </S.Logo>
      <S.LoginSignContainer>
        {Token.getToken(ACCESS_KEY) ? (
          <div style={{ cursor: "pointer" }} onClick={logOut}>
            로그아웃
          </div>
        ) : (
          <>
            <S.Login onClick={() => navigate("/login")}>로그인</S.Login>
            <span style={{ color: "#4172fa" }}> / </span>
            <S.Sign onClick={() => navigate("/signup")}>회원가입</S.Sign>
          </>
        )}
      </S.LoginSignContainer>
    </S.HeadContainer>
  );
}
