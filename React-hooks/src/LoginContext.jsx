// LoginContext.js
import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children} //it will render the children components
    </LoginContext.Provider>
  );
};

export default LoginProvider;
