import React from "react";

function NewToy() {
  return (
    <div>
      <form action="/toys" method="POST">
        Name: <input type="text" name="name" />
        Discription: <input type="text" name="discription" />
        Price: <input type="number" name="price" />
        Image: <input type="text" name="img" />
        {/* IncludeURL: <input type="checkbox" name="includeURL" /> */}
        <br />
        <input type="submit" name="" value="Add new toy" />
      </form>
    </div>
  );
}

export default NewToy;
