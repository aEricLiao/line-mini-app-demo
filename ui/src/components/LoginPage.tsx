import React from "react";
import liff from "@line/liff";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const isDev =
  process.env.NODE_ENV === "development" ||
  process.env.REACT_APP_ENVIRONMENT === "local";

export default function LoginPage() {
  const handleLogin = () => {
    if (!liff.isLoggedIn()) {
      return isDev
        ? liff.login({ redirectUri: process.env.REACT_APP_REDIRECT_URL })
        : liff.login();
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {liff.isLoggedIn() ? (
            <div>Login success</div>
          ) : (
            <div>
              Not login yet
              <div>
                <button onClick={handleLogin}>LoginPage</button>
              </div>
            </div>
          )}
        </Route>
      </Switch>
    </Router>
  );
}
