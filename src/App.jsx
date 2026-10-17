import { useState } from "react";
import Planets from "./components/swapi/Planets";
import Peolples from "./components/swapi/Peoples";
import Swapi from "./components/swapi";
import JsonPlaceholder from "./components/jsonPlaceholder";

function App() {
  const [tab, setTab] = useState("swapi");

  const togglePage = () => {
    tab === "swapi" ? setTab("jsonPlaceholder") : setTab("swapi");
  };
  return (
    <div className="flex flex-col">
      <div className="w-full h-max flex flex-row-reverse my-2">
        <button
          className="px-5 py-1 mr-5 border-2 rounded-xl"
          onClick={togglePage}
        >
          here
        </button>
      </div>
      {tab === "swapi" ? <Swapi /> : <JsonPlaceholder />}
    </div>
  );
}

export default App;
