import { useAuth } from "react-oidc-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/home");
    }
  }, [auth.isAuthenticated, navigate]);

  if (auth.isLoading) return <div>Loading...</div>;
  if (auth.error) return <div>Error: {auth.error.message}</div>;

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={() => auth.signinRedirect()}>
        Login
      </button>
    </div>
  );
}
