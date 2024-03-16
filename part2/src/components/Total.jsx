import React from "react";


const Total = ({parts}) => {
  const total = parts.reduce((total,part) => total+part.exercises ,0)
  
  return <div>
    <strong>total of {total} exercices</strong>
  </div>;
};

export default Total;
