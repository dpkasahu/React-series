import React, { useContext } from "react";
import { LoginContext } from "./LoginContext";

const LoginStatus = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  return (
    <div>
      <h2>{isLoggedIn ? " Logged In" : "Logged Out"}</h2>
      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default LoginStatus;
