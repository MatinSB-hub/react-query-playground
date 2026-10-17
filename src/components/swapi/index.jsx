import React, { useState } from "react";
import People from "./People";
import Planets from "./Planets";

function Swapi() {
  const [swapiTab, setSwapiTab] = useState("planets");
  return (
    <>
      <div className="w-full flex justify-center">
        <span className="text-6xl text-yellow-300 font-bold ">
          Start Wars Info
        </span>
      </div>
      <div className="w-full h-max flex justify-center gap-5 p-5">
        <div
          className={`rounded-2xl px-5 py-1 border-2 ${swapiTab === "planets" && "bg-gray-700"}`}
          onClick={() => setSwapiTab("planets")}
        >
          Planets
        </div>
        <div
          className={`rounded-2xl px-5 py-1 border-2 ${swapiTab === "people" && "bg-gray-700"}`}
          onClick={() => setSwapiTab("people")}
        >
          Peoples
        </div>
      </div>
      {swapiTab === "planets" ? <Planets /> : <People />}
    </>
  );
}

export default Swapi;
