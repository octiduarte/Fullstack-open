import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import Hello from "./components/Hello";
const App = () => {
  const name = 'Peter'
  const age = 10
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (  
    <div>
     <Header course={course.name} />
      <Content course={course.parts}/>
      <Total course={course.parts}/>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
