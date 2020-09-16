import React from "react";
import liff from "@line/liff";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function LoginPage() {
  const handleLogin = () => {
    if (!liff.isLoggedIn()) {
      liff.login();
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
