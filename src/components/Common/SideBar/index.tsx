import { PageLink } from "../../../constants/Page/page.constants";
import { useGoPage } from "../../../hooks/SideBar/useGoPage";
import * as S from "./style";

export default function SiderBar() {
  const { onPageToggle } = useGoPage();

  return (
    <S.SidebarWrapper>
      <S.ProfileContainer>
        {false ? <S.ProfileImg /> : <S.NoneProfile />}
        <S.UserInfo>
          <S.MyId>doldory55</S.MyId>
          <nav style={{ backgroundColor: "#FFFFFF" }}>
            {PageLink.map((data,idx) => (
              <S.GoPage
                key={data.name}
                onClick={() => {
                  onPageToggle(data.name, data.link);
                }}
                style={
                  localStorage.getItem('page') === data.name
                    ? { border: "3px solid black", backgroundColor: "#EAEDFA", color: "black" }
                    : {}
                }
              >
                {data.name}
              </S.GoPage>
            ))}
          </nav>
        </S.UserInfo>
      </S.ProfileContainer>
    </S.SidebarWrapper>
  );
}
