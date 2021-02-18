import React, { useState } from "react";
import Hiragana from "./hiragana-chart/Hiragana";
import Katakana from "./katakana-chart/Katakana";

import "./Compare.scss";

function Comparer() {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  const compare =
    toggle == true ? <Hiragana></Hiragana> : <Katakana></Katakana>;

  return (
    <div className="comparer">
      <button className="btn" onClick={() => setToggle(!toggle)}>
        <h2>{toggle == false ? "Katakana" : "Hiragana"}</h2>
      </button>

      <div>{compare}</div>
    </div>
  );
}

export default Comparer;
