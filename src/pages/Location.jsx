import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import Collapse from "../components/Collapse/Collapse";
import location from "../data/data-location.json";

const Location = () => {
  const { id } = useParams();
  console.log({ id })

  // je filtre les données pour afficher uniquement les informations de l'appartement correspondant à l'ID
  const apartment = location.find(element => element.id === id);

  if (!apartment) {
    return (
      <div className="location-page">
        <Header />
        <main>
          <div className="error-message">
            <p>L'appartement que vous recherchez n'existe pas.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="location-page">
      <Header />
      <main>
        <div className="location-container">
          <Carrousel images={apartment.pictures} />
          <div className="info-container">
            <div className="info-location">
              <h1>{apartment.title}</h1>
              <h2>Localisation</h2>
              <div>
                <ul>
                  <li>Button</li>
                </ul>
              </div>
            </div>
            <div className="info-proprio">
              <div className="name-proprio">
                <p>Nom</p>
                <img src="" alt=""></img>
              </div>
              <div className="stars">
                <img src="" alt=""></img>
              </div>
            </div>
          </div>
          <div className="collapse-location">
            <Collapse title="Description" content="" />
            <Collapse title="Equipements" content="" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Location;