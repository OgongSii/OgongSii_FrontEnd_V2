import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useSignUp } from "../../../../hooks/Auth/SignUp/useSignUp";

export default function SignUp() {
  const navigate = useNavigate();
  const { onSignUpChange, id, pw1, pw2, onSignUpClick } = useSignUp();

  return (
    <S.SignUpContainer>
      <S.SignupForm>
        <S.SignupTitle>
          <div>
            <S.TitlePoint>O</S.TitlePoint>gong<S.TitlePoint>S</S.TitlePoint>ii
          </div>
        </S.SignupTitle>

        <S.SignupInputContainer>
          <S.SignupIdInput
            type="text"
            value={id}
            placeholder="아이디"
            name="id"
            autoComplete="new-password"
            onChange={onSignUpChange}
          />

          <S.SignupPwInput1
            type="password"
            value={pw1}
            placeholder="비밀번호"
            name="pw1"
            autoComplete="new-password"
            onChange={onSignUpChange}
          />

          <S.SignupPwInput2
            type="password"
            value={pw2}
            placeholder="비밀번호 확인"
            name="pw2"
            autoComplete="new-password"
            onChange={onSignUpChange}
          />

          <div style={{ marginTop: "30px" }}>
            <S.SingupBtn onClick={onSignUpClick}>회원가입</S.SingupBtn>
          </div>

          <div>
            <span>계정이 있으신가요? </span>
            <span
              style={{ cursor: "pointer", color: "#467cf5" }}
              onClick={() => navigate("/login")}
            >
              로그인
            </span>
          </div>
        </S.SignupInputContainer>
      </S.SignupForm>
    </S.SignUpContainer>
  );
}
