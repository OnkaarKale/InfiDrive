import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import Router from "./Router";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-west-1.amazonaws.com/us-west-1_ht7iWqYTA",
  client_id: "5o12fd61qhe56vbksajfqnlkg3",
  redirect_uri: "http://localhost:5173/callback",
  response_type: "code",
  scope: "email openid phone",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
