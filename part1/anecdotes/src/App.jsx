import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>
);

const Header = ({ text }) => <h1>{text}</h1>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextClick = () => {
    const aleatorio = Math.floor(Math.random() * anecdotes.length);
    setSelected(aleatorio);
  };

  const handleVoteClick = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  const mostVotedIndex = votes.indexOf(Math.max(...votes));
  const mostVotedAnecdotes = anecdotes[mostVotedIndex]

  return (
    <div>
      <Header text="Anecdote of the day" />
      {anecdotes[selected]}
      Votes: {votes[selected]}
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleNextClick} text="Next anecdote" />
      <Header text="Anecdote with most votes" />
      <p>{mostVotedAnecdotes}</p>
      <p>votes: {votes[mostVotedIndex]}</p>
    </div>
  );
};

export default App;
