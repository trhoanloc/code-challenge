import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <form action={() => console.log("swap")}>
        <h5>Swap</h5>
        <label htmlFor="input-amount">Amount to send</label>
        <input id="input-amount" />

        <label htmlFor="output-amount">Amount to receive</label>
        <input id="output-amount" />

        <button>CONFIRM SWAP</button>
      </form>
    </>
  );
}

export default App;
