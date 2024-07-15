import React from "react";

const Owner = ( {host, picture}) => {
  return (
    <div className="name-proprio">
      <p>
        {host.split(" ").map((name, index) => (
          <span key={index}>
            {name}
            <br />
          </span>
        ))}
      </p>
      <img
        src={picture}
        alt={`photo de ` + host}
      ></img>
    </div>
  );
};

export default Owner;
