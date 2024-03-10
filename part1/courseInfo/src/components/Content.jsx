import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
  return (
    <div>
      {course.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

export default Content;
