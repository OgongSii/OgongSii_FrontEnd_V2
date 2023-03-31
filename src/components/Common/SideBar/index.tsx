import * as S from "./style";

export default function SiderBar() {
  return (
    <S.SidebarWrapper>
      <S.ProfileContainer>
        {false ? <S.ProfileImg /> : <S.NoneProfile />}
        <S.UserInfo>
          <S.MyId>doldory55</S.MyId>
          <S.GoMyPage>마이 페이지</S.GoMyPage>
        </S.UserInfo>
      </S.ProfileContainer>
    </S.SidebarWrapper>
  );
}
