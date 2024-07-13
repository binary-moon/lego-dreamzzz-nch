import React, { useState } from "react";

import "./App.css";
import { Intro } from "./components/Intro";

function App() {
  const [gameState, setGameState] = useState(0);
  return (
    <div className="flex flex-col w-full h-full absolute top-0 left-0 bg-background text-white overflow-hidden font-external">
      {gameState === 0 && <Intro />}
    </div>
  );
}

export default App;
