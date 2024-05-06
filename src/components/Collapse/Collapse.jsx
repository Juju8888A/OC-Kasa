import React, { useState } from "react";
import arrowUp from "../../assets/icones/arrow_up.png";
import arrowDown from "../../assets/icones/arrow_back.png";

const Collapse = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggle = (i) => {
    if (openItems.includes(i)) {
      setOpenItems(openItems.filter((item) => item !== i));
    } else {
      setOpenItems([...openItems, i]);
    }
  };

  const dataCollapse = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="collapse-container">
      <div className="collapse">
        {dataCollapse.map((item, i) => (
          <div className="item" key={item.title}>
            <div className="title" onClick={() => toggle(i)}>
              <h3>{item.title}</h3>
              <img
                src={openItems.includes(i) ? arrowUp : arrowDown}
                alt="fleche"
              />
            </div>
            <div
              className={
                openItems.includes(i) ? `content-show` : `content`
              }
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collapse;