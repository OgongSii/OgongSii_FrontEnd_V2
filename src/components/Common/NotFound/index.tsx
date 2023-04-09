import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigage = useNavigate();
  useEffect(() => {
    B1ndToast.showInfo("Page Not Found!");
    localStorage.removeItem("page");
    navigage("/");
  }, [navigage]);

  return <></>;
}
