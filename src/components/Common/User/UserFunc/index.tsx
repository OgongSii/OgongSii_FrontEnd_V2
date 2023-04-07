import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { ISMODAL } from "../../../../store/Modal/modalAtom";
import { PAGE_ITEM } from "../../../../constants/Page/page.constants";
import { useGoPage } from "../../../../hooks/SideBar/useGoPage";

export default function UserFunc() {
  const isModal = useSetRecoilState<boolean>(ISMODAL);
  const { onPageToggle } = useGoPage();

  return (
    <S.FuncContainer>
      {PAGE_ITEM.map((data, idx) => {
        if (data.name === "마이 페이지") return null;
        return (
          <S.GoRecord
            key={idx}
            onClick={() => {
              data.link !== undefined
                ? onPageToggle(data.name, data.link)
                : isModal(true);
            }}
          >
            {data.name}
          </S.GoRecord>
        );
      })}
    </S.FuncContainer>
  );
}
