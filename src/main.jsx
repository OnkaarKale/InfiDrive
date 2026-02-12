import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import App from "./App";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-west-1.amazonaws.com/us-west-1_ht7iWqYTA",
  client_id: "5o12fd61qhe56vbksajfqnlkg3",
  redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "email openid phone",
  onSigninCallback: () => {
    // Redirect after successful login
    window.history.replaceState({}, document.title, "/home");
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
