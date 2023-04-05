import * as S from "./style";
import { Profile } from "../Common/SideBar/style";
import Token from "../../lib/Token/Token";
import MyList from "./MyList";
import { HomeWrap } from "../Common/Home/style";
import UserFunc from "./UserFunc";
import { ListContainer } from "../Common/Home/HomeList/style";

export default function User() {

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
              <div style={{ margin:"0 auto"}}>
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
