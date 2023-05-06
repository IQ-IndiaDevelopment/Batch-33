import { useState } from "react";
import About from "./About";

import Hobbies from "./Hobbies";

function App() {
  const name = "Amit";
  const [firstState, setFirstState] = useState(0);
  console.log(firstState, "firstate");
  return (
    <div>
      <h1 onClick={() => setFirstState(firstState + 1)}>Hi This is my Intro</h1>
    </div>
  );
}

export default App;
