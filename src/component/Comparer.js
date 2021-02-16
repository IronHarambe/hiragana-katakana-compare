import React, { useState } from "react";
import Hiragana from "./hiragana-chart/Hiragana";
import Katakana from "./katakana-chart/Katakana";

function Comparer() {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  const compare =
    toggle == false ? <Hiragana></Hiragana> : <Katakana></Katakana>;

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle == false ? "Katakana" : "Hiragana"}
      </button>

      <div>{compare}</div>
    </div>
  );
}

export default Comparer;
