import { useEffect } from "react";
import { ListContainer } from "../Home/HomeList/style";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { ISMODAL } from "../../../store/Modal/modalAtom";
import { useTokenCheck } from "../../../hooks/Auth/Token/useTokenCheck";
import { useRecordPostToggle } from "../../../hooks/Modal/useRecordPostToggle";
import Post from "./Post";
import Record from "./Record";
import ModalPortal from "./Portal";
import AuthHOC from "../Auth/AuthHoc";

function Modal() {
  const [isModal, SetIsModal] = useRecoilState<boolean>(ISMODAL);
  const { isAuthority } = useTokenCheck();
  const { isPost, onPostToggle } = useRecordPostToggle();

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden`;
  }, []);

  return (
    <ModalPortal>
      <S.PostContainer onClick={() => SetIsModal(false)}>
        <ListContainer onClick={(e) => e.stopPropagation()} isModal={true}>
          {isAuthority ? (
            <div>
              <S.PostRecordoComponentContainer>
                <S.PostComponent
                  onClick={() => onPostToggle(false)}
                  isRecord={isPost}
                >
                  게시글 작성하기
                </S.PostComponent>
                <S.RecordComponent
                  onClick={() => onPostToggle(true)}
                  isRecord={isPost}
                >
                  공부시간 기록하기
                </S.RecordComponent>
              </S.PostRecordoComponentContainer>

              <S.WriteWrap>
                {isPost ? <Record /> : <Post isModal={isModal} />}
              </S.WriteWrap>
            </div>
          ) : (
            <S.NoneLoginSignModal>
              로그인/회원가입 해주세요!
            </S.NoneLoginSignModal>
          )}
        </ListContainer>
      </S.PostContainer>
    </ModalPortal>
  );
}
export default AuthHOC(Modal, { isAuthenticated: true });
