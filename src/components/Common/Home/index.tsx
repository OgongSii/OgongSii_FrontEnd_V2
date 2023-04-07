import * as S from "./style";
import HomeList from "./HomeList";
import SiderBar from "../SideBar";
import AuthHOC from "../Auth/AuthHoc";

function Home() {
  return (
    <div>
      <SiderBar />
      <S.HomeContainer>
        <S.HomeWrap>
          {Array.from({ length: 5 }).map((idx: any) => (
            <div key={idx}>
              <HomeList />
            </div>
          ))}
        </S.HomeWrap>
      </S.HomeContainer>
    </div>
  );
}

export default AuthHOC(Home, { isAuthenticated: true });
