import React from "react";
import NavBar from "./NavBar";

function ToysDisplay({ toy }) {
  const showComments = () => {
    if (toy.comments.lenght > 0) {
      return <p>ddd</p>;
    } else {
      return <p>No comments</p>;
    }
    toy.comments.map((comment, index) => {
      return <p key={index}> {comment}</p>;
    });
  };
  return (
    <>
      <NavBar />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div
          style={{
            margin: "50px",
            width: "500px",
            backgroundColor: "lightblue",
            borderRadius: "30px",
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "30px",
          }}
        >
          <h3>{toy.name}</h3>
          <img style={{ height: "200px" }} src={toy.img} />
          <p>{toy.discription}</p>
          <p>{toy.price}</p>
          <button
            style={{
              textDecoration: "none",
              color: "black",
              border: "none",
              borderRadius: "10px",
              height: "30px",
            }}
          >
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
        <div
          style={{
            margin: "50px",
            width: "500px",
            backgroundColor: "lightblue",
            borderRadius: "30px",
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "30px",
          }}
        >
          <h3>Comments</h3>
          {toy.comments.lenght !== 0 ? (
            <p>
              {toy.comments.map((comment, index) => {
                return <p key={index}> {comment}</p>;
              })}
            </p>
          ) : null}
          <form action={`/toys/${toy._id}?_method=PUT`} method="POST">
            comment: <input type="text" name="comments" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default ToysDisplay;
