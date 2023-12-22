import React, { useState } from "react";
import NavBar from "./NavBar";

function HomePage() {
  const [signInForm, setSignInForm] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  const cardSignStyle = {
    height: "300px",
    width: "300px",
    backgroundColor: "lightblue",
    borderRadius: "30px",
    textAlign: "center",
  };
  const cardToysStyle = {
    height: "300px",
    width: "300px",
    backgroundColor: "lightblue",
    borderRadius: "30px",
    textAlign: "center",
  };

  const signInFormFunc = () => {
    return (
      <div>
        <form style={{ margin: "40px 10px" }} action="/" method="get">
          UserName:{" "}
          <input style={{ marginTop: "20px" }} type="text" name="userName" />
          <br />
          Password:{" "}
          <input
            style={{ marginTop: "20px" }}
            type="password"
            name="password"
          />
          {/* Admin:{" "}
        <input style={{ marginTop: "20px" }} type="checkbox" name="admin" /> */}
        </form>
        <a style={{ marginBottom: "20px" }} href="/signIn">
          SignIn
        </a>
      </div>
    );
  };

  const signUpFormFunc = () => {
    return (
      <div>
        <form style={{ margin: "40px 10px" }} action="/" method="POST">
          UserName:{" "}
          <input style={{ marginTop: "20px" }} type="text" name="userName" />
          <br />
          Password:{" "}
          <input
            style={{ marginTop: "20px" }}
            type="password"
            name="password"
          />
          Admin:{" "}
          <input style={{ marginTop: "20px" }} type="checkbox" name="admin" />
          <input
            style={{ margin: "10px" }}
            name=""
            type="submit"
            value=" SignUp"
          />
        </form>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px  50px",
        }}
      >
        <div style={cardSignStyle}>
          <p>Log In</p>
          <div>{!signInForm ? signInFormFunc() : signUpFormFunc()}</div>
          <button
            onClick={() => {
              setSignInForm(true);
              console.log(!signInForm);
            }}
            style={{ marginTop: "10px", border: "none", borderRadius: "10px" }}
          >
            Change Method
          </button>
        </div>
        <div style={cardToysStyle}>
          <h4>Check all toys</h4>
          <a href="/toys">check all toys</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
