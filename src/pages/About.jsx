import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import imageBannerAbout from "../assets/img/photo-banner-paysage-about.png"

const About = () => {
  const dataFiabilite =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
  const dataRespect =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const dataService =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const dataSecurite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <div className="about-page">
      <Header />
      <main>
        <Banner image={imageBannerAbout}/>
        <div className="collapse-about">
        <Collapse title="Fiabilité" content={dataFiabilite} />
        <Collapse title="Respect" content={dataRespect} />
        <Collapse title="Service" content={dataService} />
        <Collapse title="Sécurité" content={dataSecurite} />
        </div>
      </main>
      <div className="footer-about">
      <Footer />
      </div>
    </div>
  );
};

export default About;
