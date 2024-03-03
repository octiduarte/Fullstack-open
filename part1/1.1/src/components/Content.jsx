import Part from './Part';

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  )
}


export default Content;