import React from 'react';

const Total = ({ course }) => {
  const totalExercises = course.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <p>Total number of exercises: {totalExercises}</p>
    </div>
  );
};

export default Total;