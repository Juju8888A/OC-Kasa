import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import Collapse from "../components/Collapse/Collapse";
import location from "../data/data-location.json";
import TitleLocation from "../components/Location/TitleLocation";
import Localisation from "../components/Location/Localisation";
import TagButton from "../components/Location/TagButton";
import Owner from "../components/Location/Owner";
import Rating from "../components/Location/Rating";

const Location = () => {
  const { id } = useParams();
  // console.log({ id });
  const navigate = useNavigate();

  // je filtre les données pour afficher uniquement les informations de l'appartement correspondant à l'ID
  const apartment = location.find((element) => element.id === id);

  useEffect(() => {
    if (!apartment) {
      navigate('/error');
    }
  }, [apartment, navigate]);

  if (!apartment) {
    return null;
  }

  return (
    <div className="location-page">
      <Header />
      <main>
        <div className="location-container">
          <Carrousel images={apartment.pictures} />
          <div className="info-container">
            <div className="info-location">
              <TitleLocation title={apartment.title}/>
              <Localisation location={apartment.location} />
              <TagButton key={apartment.id} tags={apartment.tags} />
            </div>
            <div className="info-proprio-rating">
              <Owner host={apartment.host.name} picture={apartment.host.picture}/>
              <Rating ratingStars={apartment.rating} />
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
