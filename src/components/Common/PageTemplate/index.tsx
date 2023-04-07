import { ReactNode } from "react";
import GlobalStyle from "../../../styles/GlobalStyles";
import Header from "../Header";
import { useRecoilValue } from "recoil";
import Modal from "../Modal";
import { ISMODAL } from "../../../store/Modal/modalAtom";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const onModal = useRecoilValue<boolean>(ISMODAL);

  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      {onModal && <Modal />}
    </>
  );
}
