import { useAuth } from "react-oidc-context";
import { Navigate } from "react-router-dom";

export default function Home() {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome: {auth.user?.profile.email}</p>

      <button onClick={() => auth.removeUser()}>
        Logout
      </button>
    </div>
  );
}
