import { useSetRecoilState } from "recoil";
import { PAGE_ITEM } from "../../../constants/Page/page.constants";
import { useGoPage } from "../../../hooks/SideBar/useGoPage";
import * as S from "./style";
import { ISMODAL } from "../../../store/Modal/modalAtom";
import Token from "../../../lib/Token/Token";
import { useTokenCheck } from "../../../hooks/Auth/Token/useTokenCheck";

export default function SiderBar() {
  const { onPageToggle } = useGoPage();
  const isModal = useSetRecoilState<boolean>(ISMODAL);
  const { isAuthority } = useTokenCheck();

  return (
    <S.SidebarWrapper>
      <S.ProfileContainer>
        <S.Profile />
        <S.UserInfo>
          <S.MyId>
            {Token.getToken("userName")
              ? Token.getToken("userName")
              : "유저정보가 없습니다."}
          </S.MyId>
          <nav>
            {PAGE_ITEM.map((data) => {
              if (data.name === "마이 페이지" && !isAuthority) return null;
              return (
                <S.GoPage
                  key={data.name}
                  onClick={() => {
                    data.link !== undefined
                      ? onPageToggle(data.name, data.link)
                      : isModal(true);
                  }}
                  isLogIn={Token.getToken("page") === data.name}
                >
                  {data.name}
                </S.GoPage>
              );
            })}
          </nav>
        </S.UserInfo>
      </S.ProfileContainer>
    </S.SidebarWrapper>
  );
}
