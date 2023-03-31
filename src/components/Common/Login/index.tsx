import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useLogin } from "../../../hooks/Login/useLogin";

export default function Login() {
  const navigate = useNavigate();
  const { id, pw, onLoginChange, onLoginClick } = useLogin();
  return (
    <S.LoginContaienr>
      <S.LoginForm>
        <S.LoginTitle>
          <div>
            <S.TitlePoint>O</S.TitlePoint>gong<S.TitlePoint>S</S.TitlePoint>ii
          </div>
        </S.LoginTitle>

        <S.LoginInputContainer>
          <S.LoginIdInput
            type="text"
            value={id}
            placeholder="아이디"
            name="id"
            autoComplete="new-password"
            onChange={onLoginChange}
          />

          <S.LoginPwInput
            type="password"
            value={pw}
            placeholder="비밀번호"
            name="pw"
            autoComplete="new-password"
            onChange={onLoginChange}
          />

          <div style={{ marginTop: "30px" }}>
            <S.LoginBtn onClick={onLoginClick}>로그인</S.LoginBtn>
          </div>

          <div>
            <span>계정이 없으신가요? </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              {" "}
              | 회원가입 |
            </span>
          </div>
        </S.LoginInputContainer>
      </S.LoginForm>
    </S.LoginContaienr>
  );
}