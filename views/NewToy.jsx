import React from "react";
import NavBar from "./NavBar";

function NewToy() {
  return (
    <>
      <NavBar />
      <div
        style={{
          margin: "50px",
          height: "300px",
          width: "300px",
          backgroundColor: "lightblue",
          borderRadius: "30px",
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <form style={{ margin: "20px" }} action="/toys" method="POST">
          Name: <input style={{ marginTop: "20px" }} type="text" name="name" />
          <br />
          Discription:{" "}
          <input style={{ marginTop: "20px" }} type="text" name="discription" />
          <br />
          Price:{" "}
          <input style={{ marginTop: "20px" }} type="number" name="price" />
          <br />
          Image: <input style={{ marginTop: "20px" }} type="text" name="img" />
          {/* IncludeURL: <input type="checkbox" name="includeURL" /> */}
          <br />
          <div style={{}}>
            <input
              style={{ marginTop: "20px", marginRight: "10px" }}
              type="submit"
              name=""
              value="Add new toy"
            />
            <button>
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                href="/"
              >
                Home Page
              </a>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewToy;
