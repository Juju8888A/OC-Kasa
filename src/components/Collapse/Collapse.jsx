import React, { useState } from "react";
import arrowUp from "../../assets/icones/arrow_up.png";
import arrowDown from "../../assets/icones/arrow_back.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse">
          <div className="title" onClick={toggle}>
            <h3>{title}</h3>
            <img
              src={isOpen ? arrowDown : arrowUp}
              alt="fleche"
            />
          </div>
          <div className={isOpen ? "content-show" : "content"}>
            {content}
          </div>
      </div>
    </div>
  );
};

export default Collapse;