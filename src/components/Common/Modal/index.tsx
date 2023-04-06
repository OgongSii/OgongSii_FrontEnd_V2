import { useEffect } from "react";
import { ListContainer } from "../Home/HomeList/style";
import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { ISMODAL } from "../../../store/Modal/modalAtom";
import { useTokenCheck } from "../../../hooks/Auth/Token/useTokenCheck";
import { useRecordPostToggle } from "../../../hooks/Modal/useRecordPostToggle";
import Post from "./Post";
import Record from "./Record";

export default function Modal() {
  const isModal = useSetRecoilState<boolean>(ISMODAL);
  const { isAuthority } = useTokenCheck();
  const { isPost, onPostToggle } = useRecordPostToggle();

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden`;
  }, []);

  return (
    <S.PostContainer onClick={() => isModal(false)}>
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

            <S.WriteWrap>{isPost ? <Record /> : <Post />}</S.WriteWrap>
          </div>
        ) : (
          <S.NoneLoginSignModal>로그인/회원가입 해주세요!</S.NoneLoginSignModal>
        )}
      </ListContainer>
    </S.PostContainer>
  );
}
