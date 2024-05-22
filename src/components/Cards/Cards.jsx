import React from "react";
import { Link } from "react-router-dom";
import location from "../../data/data-location.json";

const Card = () => {
  return (
    <div className="cards-container">
      {location.map((data) => {
        return (
          <figure className="location-card" key={data.id}>
            <Link to={`/location/${data.id}`} className="link-location">
              <img src={data.cover} alt="data.title" />
              <figcaption className="name-location">{data.title}</figcaption>
            </Link>
          </figure>
        );
      })}
    </div>
  );
};

export default Card;
