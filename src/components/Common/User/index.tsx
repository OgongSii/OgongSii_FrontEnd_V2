import * as S from "./style";
import { Profile } from "../SideBar/style";
import Token from "../../../lib/Token/Token";
import MyList from "./MyList";
import { HomeWrap } from "../Home/style";
import UserFunc from "./UserFunc";
import AuthHOC from "../Auth/AuthHoc";
import { useTokenCheck } from "../../../hooks/Auth/Token/useTokenCheck";
import { useEffect } from "react";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useNavigate } from "react-router-dom";

function User() {
  const { isAuthority } = useTokenCheck();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthority) {
      B1ndToast.showInfo("로그인/회원가입 해주세요!");
      navigate("/");
    }
  }, [isAuthority]);

  return (
    <div>
      <S.UserContainer>
        <S.UserInfoContainer>
          <Profile />
          <S.UserName>
            {Token.getToken("userName")
              ? Token.getToken("userName")
              : "유저정보가 없습니다."}
          </S.UserName>

          <S.UserAbleContainer>
            <S.LeftLayout>
              <UserFunc />
              <div style={{ margin: "0 auto" }}>
                <S.MyStudyRecord>내 공부시간</S.MyStudyRecord>
              </div>
            </S.LeftLayout>

            <S.RightLayout>
              <HomeWrap>
                {Array.from({ length: 2 }).map((idx: any) => (
                  <div key={idx}>
                    <MyList />
                  </div>
                ))}
              </HomeWrap>
            </S.RightLayout>
          </S.UserAbleContainer>
        </S.UserInfoContainer>
      </S.UserContainer>
    </div>
  );
}

export default AuthHOC(User, { isAuthenticated: true });
