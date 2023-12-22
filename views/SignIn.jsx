import React from "react";
import NavBar from "./NavBar";

function SignIn() {
  return (
    <div>
      <NavBar />
      <p>You are signed in</p>
      <a href="/toys">Go to all toys</a>
    </div>
  );
}

export default SignIn;
