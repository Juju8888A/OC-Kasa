import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import Collapse from "../components/Collapse/Collapse";
// import location from "../data/data-location.json";

const Location = () => {
  return (
    <div className="location-page">
      <Header />
      <main>
        <div className="location-container">
          <Carrousel />
          <div className="info-container">
            <div className="info-location">
              <h1>Titre</h1>
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
