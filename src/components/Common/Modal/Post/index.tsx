import { useImg } from "../../../../hooks/Post/useImg";
import { Btn } from "../../Auth/Login/style";
import * as S from "./style";

export default function Post() {
  const { saveImgFile, imgList, imgRef, SetImgList } = useImg();
  
  return (
    <S.PostContainer>
      <S.Introduce isRecord={false}>공부 관련 게시글을 작성주세요!</S.Introduce>
      <S.PostTextArea placeholder="내용을 입력해주세요" />

      <S.ImgUploadContainer>
        <div style={{ margin: "4px 10px 0 0" }}>
          {imgList.length >= 1 ? (
            <>
              <S.ImgCancel onClick={() => SetImgList([])}>X</S.ImgCancel>
              <span>이미지 {imgList.length}개</span>
            </>
          ) : (
            <>이미지를 업로드 해주세요!</>
          )}
        </div>

        <label htmlFor="Img">
          <S.ImgUploadIcon />
        </label>
        <input
          type="file"
          id="Img"
          accept="image/*"
          multiple
          onChange={saveImgFile}
          ref={imgRef}
          style={{ display: "none" }}
        />
      </S.ImgUploadContainer>
      <Btn isModal={true} isPost={true}>작성하기</Btn>
    </S.PostContainer>
  );
}
