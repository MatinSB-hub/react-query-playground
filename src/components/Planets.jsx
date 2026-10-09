import { useQuery } from "@tanstack/react-query";
import React from "react";
import Planet from "./Planet";

function Planets() {
  const fetchPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/planets/");
    return res.json();
  };

  const { data, status } = useQuery({
    queryKey: ["planets"],
    queryFn: fetchPlanets,
  });
  console.log("data:", status);
  console.log("data:", data);

  if (status === "pending") return <div>loading Data</div>;
  if (status === "error") return <div>Error fetching Data</div>;

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <span className="w-[40%] text-xl font-bold mb-3 ">Planets</span>
      {data.results.map((planet) => (
        <Planet key={planet.name} planet={planet} />
      ))}
    </div>
  );
}

export default Planets;
