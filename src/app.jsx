import { getLocation } from "./async";
import React from "react";

function App() {
  return (
    <div>
      <button onClick={() => getLocation()} type="text"></button>
    </div>
  );
}

export default App;
