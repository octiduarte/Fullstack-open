import Part from './Part'
const Content = ({parts}) => {
    const sumatoria = parts.reduce((total,part) =>  total+part.exercises ,0)
  
    return (
        <div>
            {parts.map(part => {
              return  <Part key={part.id} part={part}/>
            })}
            <div>
                <strong>El total es: {sumatoria}</strong>
            </div>
        </div>
        
    )
}

export default Content