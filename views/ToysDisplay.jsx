import React from "react";

function ToysDisplay({ toy }) {
  return (
    <div>
      <h4>{toy.name}</h4>
      <img src={toy.img} />
      <p>{toy.discription}</p>
      <p>{toy.price}</p>
    </div>
  );
}

export default ToysDisplay;
