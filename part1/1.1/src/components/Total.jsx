import React from 'react'

export const Total = ({exercises1,exercises2,exercises3}) => {
    const totalExercises = exercises1 + exercises2 + exercises3;
  return (
    <div>
        <p>El numero total es {totalExercises}</p>
    </div>
  )
}
export default Total
