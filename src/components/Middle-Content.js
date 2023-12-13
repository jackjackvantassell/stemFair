import React from "react";
import "../css/Middle-Content.css";

const MiddleContent = ({ concepts }) => {
  return (
    <div>
      {concepts.map((concept, index) => (
        <div className="content" key={index} id={concept.id}>
          <div className="title">{concept.name}</div>
          <div className="description">{concept.description}</div>
        </div>
      ))}
    </div>
  );
};

export default MiddleContent;
