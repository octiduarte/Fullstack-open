import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ];

  const exercises1 = parts[0].exercises;
  const exercises2 = parts[1].exercises;
  const exercises3 = parts[2].exercises;

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
