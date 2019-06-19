import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  const x: string = "my aaa string 2";
  const y: string = "my string 3";
  const z: string = 2 + 2;
  console.log(z);
  console.log("this is");
  console.log("my string" + "fffff");
  return (
    <div className="App">
      <h1>Hello CodeSandbox: {x + y} </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
