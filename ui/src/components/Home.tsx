import React from "react";
import liff from "@line/liff";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <>
      <div>Welcome!</div>
      <div>
        <button
          onClick={() => {
            liff.logout();
            history.push("/login");
          }}
        >
          LOGOUT
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div>OS: {liff.getOS()}</div>
        <div>Language: {liff.getLanguage()}</div>
        <div>SDK version: {liff.getVersion()}</div>
        <div>
          {`LINE version: ${
            liff.getLineVersion()
              ? liff.getLineVersion()
              : "not in LINE platform"
          }`}
        </div>
      </div>
    </>
  );
}
