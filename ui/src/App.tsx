import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { LIFF_ID } from "@src/common/appConfig";
import liff from "@line/liff";
import { LiffStatus } from "./constants";
import LoginPage from "@src/components/LoginPage";
import Home from "@src/components/Home";

function App() {
  const [liffState, setLiffState] = useState<LiffStatus>(
    LiffStatus.Initializing
  );

  useEffect(() => {
    try {
      liff.init({ liffId: LIFF_ID }).then(() => {
        setLiffState(LiffStatus.Success);
      });
      console.log("liff success init");
    } catch (err) {
      console.log(err);
      setLiffState(LiffStatus.Failed);
    }
  }, []);

  if (liffState !== LiffStatus.Success) return null;
  return (
    <div className="App">
      <h2>ATL Drink Booking System</h2>
      <Router>
        <Switch>
          <Route path="/home">
            {liff.isLoggedIn() ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
