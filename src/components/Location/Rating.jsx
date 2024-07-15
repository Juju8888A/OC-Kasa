import React from 'react';
import itemInactive from "../../assets/icones/grey_star.png";
import itemActive from "../../assets/icones/red_star.png";

const Rating = ( { ratingStars }) => {

      // je génère les 5 étoiles de notation
  const stars = [1, 2, 3, 4, 5];
  // je souhaite que ma fonction affiche les étoiles, rouges si true, grey si false
  const displayStars = (star) => {
    return <img src={star ? itemActive : itemInactive} alt="étoile" />;
  };

    return (
        <div className="stars">
                {/* génération des étoiles en fonction du rating de l'appartement, détermine si c'est l'étoile rouge ou grise qui doit apparaître */}
                {stars.map((star, index) => (
                  <span key={index}>
                    {displayStars(star <= ratingStars)}
                  </span>
                ))}
        </div>
    );
};

export default Rating;