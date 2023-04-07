import { B1ndToast } from "@b1nd/b1nd-toastify";
import React from "react";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  isAuthenticated: boolean;
}

const AuthHOC = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  auth: AuthProps
): React.FC<P> => {
  const AuthComponent: React.FC<P> = (props: P) => {
    const navigate = useNavigate();
    const { isAuthenticated } = auth;

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      B1ndToast.showInfo("토큰이 만료되었습니다!");
      navigate("/login", { replace: true });
      return null;
    }
  };

  return AuthComponent;
};

export default AuthHOC;
