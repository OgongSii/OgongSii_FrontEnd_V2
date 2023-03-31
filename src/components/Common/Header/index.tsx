import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function Header() {
  const navigate = useNavigate();
  return (
    <S.HeadContainer>
      <S.Logo onClick={() => navigate("/")}>
        <S.LogoPoint>O</S.LogoPoint>gong<S.LogoPoint>S</S.LogoPoint>ii
      </S.Logo>
      <S.LoginSignContainer>
        <S.Login onClick={() => navigate("/login")}>로그인</S.Login>
        <span> /</span>
        <S.Sign onClick={() => navigate("/signup")}> 회원가입</S.Sign>
      </S.LoginSignContainer>
    </S.HeadContainer>
  );
}
