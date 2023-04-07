import ReactDOM from "react-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, modalRoot!);
};

export default ModalPortal;
