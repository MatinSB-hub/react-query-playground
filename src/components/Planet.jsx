import React from "react";

function Planet({ planet }) {
  return (
    <div className="border">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>terrain - {planet.terrain} </p>
    </div>
  );
}

export default Planet;
