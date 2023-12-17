import React from "react";

function EditToy({ toy }) {
  return (
    <div>
      <form action={`/toys/${toy._id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={toy.name} />
        Discription:
        <input type="text" name="discription" defaultValue={toy.discription} />
        Price: <input type="number" name="price" defaultValue={toy.price} />
        Image: <input type="text" name="img" defaultValue={toy.img} />
        {/* IncludeURL: <input type="checkbox" name="includeURL" /> */}
        <br />
        <input type="submit" name="" value="Edit toy" />
      </form>
    </div>
  );
}

export default EditToy;
