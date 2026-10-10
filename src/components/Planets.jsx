import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Planet from "./Planet";

function Planets() {
  const [page, setPage] = useState(1);

  const fetchPlanets = async (pageNumber) => {
    console.log("pages:", pageNumber);
    const res = await fetch(`http://swapi.dev/api/planets/?page=${pageNumber}`);
    return res.json();
  };

  const { data, status } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => fetchPlanets(page),
  });
  console.log("data:", status);
  console.log("data:", data);

  if (status === "pending") return <div>loading Data</div>;
  if (status === "error") return <div>Error fetching Data</div>;

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <span className="w-[40%] text-xl font-bold mb-3 ">Planets</span>
      <div className="w-[40%] h-max flex gap-5">
        <div
          className={`rounded-2xl px-5 py-1 border-2`}
          onClick={() => setPage(1)}
        >
          page 1
        </div>
        <div
          className={`rounded-2xl px-5 py-1 border-2`}
          onClick={() => setPage(2)}
        >
          page 2
        </div>
        <div
          className={`rounded-2xl px-5 py-1 border-2`}
          onClick={() => setPage(3)}
        >
          page 3
        </div>
      </div>
      {data.results.map((planet) => (
        <Planet key={planet.name} planet={planet} />
      ))}
    </div>
  );
}

export default Planets;
