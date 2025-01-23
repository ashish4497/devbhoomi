/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from "react";

const Marquee = () => {
  // eslint-disable-next-line no-unused-vars
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className="row" style={{ padding: "20px 5px" }}>
      <marquee
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        behavior="scroll"
      >
        <p style={{ fontSize: "28px" }} className="font-blue">
          Here are the Char Dham group departure tours:{" "}
          <a
            href="https://devbhumitourism.com/chopta-tungnath-group-departures/"
            className="font-blue"
          >
            <b>Chopta Tungnath Winter Trek Group Departures</b>
          </a>{" "}
          \{" "}
          <a
            href="https://devbhumitourism.com/kedarkantha-trek-group-departures/"
            className="font-blue"
          >
            <b>Kedarkantha Winter Trek Group Departures</b>
          </a>{" "}
          <a
            href="https://devbhumitourism.com/char-dham-group-departures/"
            className="font-blue"
          >
            <b>Char Dham Yatra Group Departures 2025</b>
          </a>
        </p>
      </marquee>
    </div>
  );
};

export default Marquee;
