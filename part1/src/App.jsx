import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import Hello from "./components/Hello";
import { useState } from "react";

const App = () => {
  const [ counter, setCounter ] = useState("gas")

  setTimeout(
    () => setCounter(counter + " puto"),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

export default App;
