import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ onHandleClick, text }) => {
  return (
    <>
      <button onClick={onHandleClick}>{text}</button>
    </>
  );
};

const Total = ({ good, neutral, bad }) => {
  const all = good + bad + neutral;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <>
        <Statistics text="good" num={good} />
        <Statistics text="neutral" num={neutral} />
        <Statistics text="bad" num={bad} />
        <Statistics text="all" num={all} />
        <Statistics text="average" num={average} />
        <Statistics text="positive" num={positive} />
      </>
    );
  }
};

const Statistics = (props) => {
  return (
    <div>
      {props.text} {props.num}
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onHandleClick = (num) => {
    console.log(num);
    if (num === 1) {
      setGood(good + 1);
      console.log(good);
    } else if (num === 2) {
      setNeutral(neutral + 1);
      console.log(neutral);
    } else if (num === 3) {
      setBad(bad + 1);
      console.log(bad);
    }
  };

  return (
    <div>
      <Header text={"give feedback"}></Header>
      <Button onHandleClick={() => onHandleClick(1)} text={"good"}/>
      <Button onHandleClick={() => onHandleClick(2)} text={"neutral"}/>
      <Button onHandleClick={() => onHandleClick(3)} text={"bad"} />
      <Header text={"statistics"}></Header>
      <Total good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
