import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useSignUp } from "../../../../hooks/Auth/SignUp/useSignUp";
import { Btn, Input } from "../Login/style";

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
          <Input
            type="text"
            value={id}
            placeholder="아이디"
            name="id"
            autoComplete="new-password"
            onChange={onSignUpChange}
            maxLength={20}
          />

          <Input
            type="password"
            value={pw1}
            placeholder="비밀번호"
            name="pw1"
            autoComplete="new-password"
            onChange={onSignUpChange}
            maxLength={20}
          />

          <Input
            type="password"
            value={pw2}
            placeholder="비밀번호 확인"
            name="pw2"
            autoComplete="new-password"
            onChange={onSignUpChange}
            maxLength={20}
          />

          <div style={{ marginTop: "30px" }}>
            <Btn onClick={onSignUpClick} isModal={false} isPost={false}>
              회원가입
            </Btn>
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
