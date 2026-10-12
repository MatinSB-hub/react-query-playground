import { useQuery } from "@tanstack/react-query";
import People from "./People";
import { useState } from "react";

function Peoples() {
  const [page, setPage] = useState(1);

  const fetchPlanets = async (pageNumber) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${pageNumber}`);
    return res.json();
  };

  const { data, status, isLoading } = useQuery({
    queryKey: ["peoples", page],
    queryFn: () => fetchPlanets(page),
    staleTime: 5000,
    gcTime: 500000,
  });

  console.log("people:", data);
  console.log("isloading:", isLoading);

  if (status === "pending") return <div>loading Data</div>;
  if (status === "error") return <div>Error fetching Data</div>;

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <span className="w-[40%] text-xl font-bold mb-3 ">People</span>
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
      {data.results.map((people) => (
        <People key={people.name} people={people} />
      ))}
    </div>
  );
}

export default Peoples;
