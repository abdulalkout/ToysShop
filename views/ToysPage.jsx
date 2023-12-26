import React from "react";
import NavBar from "./NavBar";

function ToysPage({ toys }) {
  return (
    <>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h2>All Toys</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "100px",
          }}
        >
          {toys.map((toy, i) => {
            return (
              <div
                style={{ width: "200px", backgroundColor: "lightgray" }}
                key={i}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                  <a href={`/toys/${toy._id}`}>{toy.name}</a>
                  <img
                    style={{ height: "100px", width: "100px", margin: "15px" }}
                    src={toy.img}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    margin: "20px",
                    justifyContent: "center",
                  }}
                >
                  <form
                    action={`/toys/${toy._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input
                      style={{
                        backgroundColor: "lightblue",
                        border: "none",
                        borderRadius: "10px",
                        height: "30px",
                      }}
                      type="submit"
                      value="Delete"
                    />
                  </form>
                  <a href={`/toys/${toy._id}/edit`}>
                    <button
                      style={{
                        backgroundColor: "lightblue",
                        border: "none",
                        borderRadius: "10px",
                        height: "30px",
                      }}
                    >
                      Edit
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginBottom: "50px" }}>
          <button
            style={{
              backgroundColor: "lightblue",
              border: "none",
              borderRadius: "10px",
              height: "30px",
              marginRight: "20px",
            }}
          >
            <a
              style={{
                color: "black",
                textDecoration: "none",
              }}
              href="/toys/newToy"
            >
              Add new toy
            </a>
          </button>
          <button
            style={{
              backgroundColor: "lightblue",
              border: "none",
              borderRadius: "10px",
              height: "30px",
            }}
          >
            <a
              style={{
                color: "black",
                textDecoration: "none",
              }}
              href="/"
            >
              Home Page
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default ToysPage;
