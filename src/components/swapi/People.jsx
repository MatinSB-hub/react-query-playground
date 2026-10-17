import React from "react";

function People({ people }) {
  return (
    <div className="card">
      <h3 className="font-bold text-yellow-300">{people.name}</h3>
      <p>height - {people.height} </p>
      <p>hair color - {people.hair_color}</p>
      <p>eye color - {people.eye_color} </p>
    </div>
  );
}

export default People;
