// App.js
import React from "react";
import LoginProvider from "./LoginContext";
import LoginStatus from "./LoginStatus";

function App1() {
  return (
    <LoginProvider>
      <LoginStatus />
    </LoginProvider>
  );
}

export default App1;
