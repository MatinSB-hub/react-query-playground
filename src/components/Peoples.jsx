import { useQuery } from "@tanstack/react-query";
import People from "./People";

function Peoples() {
  const fetchPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/people/");
    return res.json();
  };

  const { data, status } = useQuery({
    queryKey: ["peoples"],
    queryFn: fetchPlanets,
  });

  console.log("people:", data);

  if (status === "pending") return <div>loading Data</div>;
  if (status === "error") return <div>Error fetching Data</div>;

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <span className="w-[40%] text-xl font-bold mb-3 ">People</span>
      {data.results.map((people) => (
        <People key={people.name} people={people} />
      ))}
    </div>
  );
}

export default Peoples;
