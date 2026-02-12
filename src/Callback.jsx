import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

export default function Callback() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    auth.signinRedirectCallback().then(() => {
      navigate("/");
    });
  }, []);

  return <div>Signing in...</div>;
}
