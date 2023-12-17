import React from "react";

function ToysPage({ toys }) {
  return (
    <div>
      <h2>All Toys</h2>
      {toys.map((toy, i) => {
        return (
          <li key={i}>
            <a href={`/toys/${toy._id}`}>{toy.name}</a>
            <form action={`/toys/${toy._id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete Toy" />
            </form>
            <a href={`/toys/${toy._id}/edit`}>
              <button>Edit</button>
            </a>
          </li>
        );
      })}
      <a href="/toys/newToy">Add new toy</a>
    </div>
  );
}

export default ToysPage;
