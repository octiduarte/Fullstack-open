import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import Hello from "./components/Hello";
import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import History from "./components/History";

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }
  return (
    <div>
      {value}
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App;
