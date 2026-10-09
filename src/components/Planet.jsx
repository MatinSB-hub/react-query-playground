import React from "react";

function Planet({ planet }) {
  return (
    <div className="card">
      <h3 className="font-bold text-yellow-300">{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>terrain - {planet.terrain} </p>
    </div>
  );
}

export default Planet;
