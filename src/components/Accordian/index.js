import React, { useState } from "react";
import "./style.css";

const Accordion = ({ items, component: Component }) => {
  const [activeIndex, setActiveIndex] = useState(false);

  const handleToggle = () => {
    setActiveIndex(!activeIndex);
  };

  return (
    <div className="accordion">
      {items?.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => handleToggle()}>
            <h3>{item.question}</h3>
            <span>{activeIndex ? "-" : "+"}</span>
          </div>
          <div className={`accordion-content ${activeIndex ? "active" : ""}`}>
            <Component item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
