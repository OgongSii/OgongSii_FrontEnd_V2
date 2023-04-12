import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useLogin } from "../../../../hooks/Auth/Login/useLogin";

export default function Login() {
  const navigate = useNavigate();
  const { email, pw, onLoginChange, onLoginSubmit } = useLogin();

  return (
    <S.LoginContaienr>
      <S.LoginForm onSubmit={onLoginSubmit}>
        <S.LoginTitle>
          <div>
            <S.TitlePoint>O</S.TitlePoint>gong<S.TitlePoint>S</S.TitlePoint>ii
          </div>
        </S.LoginTitle>

        <S.LoginInputContainer>
          <S.Input
            type="text"
            value={email}
            placeholder="이메일"
            name="email"
            onChange={onLoginChange}
          />

          <S.Input
            type="password"
            value={pw}
            placeholder="비밀번호"
            name="pw"
            onChange={onLoginChange}
            maxLength={20}
          />

          <div style={{ marginTop: "30px" }}>
            <S.Btn type="submit" isModal={false} isPost={false}>
              로그인
            </S.Btn>
          </div>

          <div>
            <span>계정이 없으신가요? </span>
            <span
              style={{ cursor: "pointer", color: "#467cf5" }}
              onClick={() => navigate("/signup")}
            >
              회원가입
            </span>
          </div>
        </S.LoginInputContainer>
      </S.LoginForm>
    </S.LoginContaienr>
  );
}
