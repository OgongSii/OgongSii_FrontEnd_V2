import { useCallback, useRef } from "react";
import { ImgList } from "../../store/Post/postAtom";
import { useRecoilState } from "recoil";

export function useImg() {
  const [imgList, SetImgList] = useRecoilState<string[]>(ImgList);
  const imgRef = useRef<any>();

  const saveImgFile = useCallback(() => {
    SetImgList([...imgRef.current.files]);
  }, [SetImgList]);

  return { saveImgFile, imgList, imgRef, SetImgList };
}
