import React from "react";
import NavBar from "./NavBar";

function EditToy({ toy }) {
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
        <form action={`/toys/${toy._id}?_method=PUT`} method="POST">
          Name:{" "}
          <input
            style={{ marginTop: "20px" }}
            type="text"
            name="name"
            defaultValue={toy.name}
          />
          <br />
          Discription:
          <input
            style={{ marginTop: "20px" }}
            type="text"
            name="discription"
            defaultValue={toy.discription}
          />
          <br />
          Price:{" "}
          <input
            style={{ marginTop: "20px" }}
            type="number"
            name="price"
            defaultValue={toy.price}
          />
          <br />
          Image:{" "}
          <input
            style={{ marginTop: "20px" }}
            type="text"
            name="img"
            defaultValue={toy.img}
          />
          <br />
          {/* IncludeURL: <input type="checkbox" name="includeURL" /> */}
          <div>
            <input
              style={{ marginTop: "30px", marginRight: "10px" }}
              type="submit"
              name=""
              value="Edit toy"
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
          <br />
        </form>
      </div>
    </>
  );
}

export default EditToy;
