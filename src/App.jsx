import { useAuth } from "react-oidc-context";

export default function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "5o12fd61qhe56vbksajfqnlkg3";
    const logoutUri = "http://localhost:5173";
    const cognitoDomain =
      "https://us-west-1ht7iwqyta.auth.us-west-1.amazoncognito.com";

    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  if (auth.isLoading) return <div>Loading...</div>;
  if (auth.error) return <div>Error: {auth.error.message}</div>;

  if (auth.isAuthenticated) {
    return (
      <div>
        <h2>Hello, {auth.user?.profile.email}</h2>
        <pre>ID Token: {auth.user?.id_token}</pre>
        <pre>Access Token: {auth.user?.access_token}</pre>
        <pre>Refresh Token: {auth.user?.refresh_token}</pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={signOutRedirect}>Sign out</button>
    </div>
  );
}
