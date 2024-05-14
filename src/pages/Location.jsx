import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import Collapse from "../components/Collapse/Collapse";
import location from "../data/data-location.json";
import Error from "./Error";
import greyStar from "../assets/icones/grey_star.png";
import redStar from "../assets/icones/red_star.png";

const Location = () => {
  const { id } = useParams();
  console.log({ id });

  // je filtre les données pour afficher uniquement les informations de l'appartement correspondant à l'ID
  const apartment = location.find((element) => element.id === id);

  if (!apartment) {
    return <Error />;
  }

  // je génère les 5 étoiles de notation
  const stars = [1, 2, 3, 4, 5];
  // je souhaite que ma fonction affiche les étoiles, rouges si true, grey si false
  const displayStars = (star) => {
    return <img src={star ? redStar : greyStar} alt="étoile" />;
  };

  return (
    <div className="location-page">
      <Header />
      <main>
        <div className="location-container">
          <Carrousel images={apartment.pictures} />
          <div className="info-container">
            <div className="info-location">
              <h1>{apartment.title}</h1>
              <h2>{apartment.location}</h2>
              <div className="div-tag">
                <ul>
                  {apartment.tags.map((tag, index) => (
                    <li key={index} className="tag-button">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="info-proprio-rating">
              <div className="name-proprio">
                <p>
                  {apartment.host.name.split(" ").map((word, index) => (
                    <span key={index}>
                      {word}
                      <br />
                    </span>
                  ))}
                </p>
                <img
                  src={apartment.host.picture}
                  alt={`photo de ` + apartment.host.name}
                ></img>
              </div>
              <div className="stars">
                {/* génération des étoiles en fonction du rating de l'appartement, détermine si c'est l'étoile rouge ou grise qui doit apparaître */}
                {stars.map((star, index) => (
                  <span key={index}>
                    {displayStars(star <= apartment.rating)}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="collapse-location">
            <Collapse title="Description" content={apartment.description} />
            <Collapse
              title="Equipements"
              content={
                <ul>
                  {apartment.equipments.map((equipement, index) => (
                    <li key={index}>{equipement}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </main>
      <div className="footer-location">
      <Footer />
      </div>
    </div>
  );
};

export default Location;
