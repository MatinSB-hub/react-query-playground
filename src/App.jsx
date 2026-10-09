import { useState } from "react";
import Planets from "./components/Planets";
import Peolples from "./components/Peoples";

function App() {
  const [tab, setTab] = useState("planets");

  return (
    <>
      <div className="w-full flex justify-center">
        <span className="text-6xl text-yellow-300 font-bold ">
          Start Wars Info
        </span>
      </div>
      <div className="w-full h-max flex justify-center gap-5 p-5">
        <div
          className="rounded-2xl px-5 py-1 border-2"
          onClick={() => setTab("planets")}
        >
          Planets
        </div>
        <div
          className="rounded-2xl px-5 py-1 border-2"
          onClick={() => setTab("people")}
        >
          Peoples
        </div>
      </div>
      {tab === "planets" ? <Planets /> : <Peolples />}
    </>
  );
}

export default App;
