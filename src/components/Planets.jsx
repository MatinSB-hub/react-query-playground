import { useQuery } from "@tanstack/react-query";
import React from "react";

function Planets() {
  const fetchPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/planets/");
    return res.json()
  };

  const { data, status } = useQuery("planets", fetchPlanets);
  console.log("data:", data);
  return <div>Planets</div>;
}

export default Planets;
