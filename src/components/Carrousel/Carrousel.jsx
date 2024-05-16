import React from "react";
import arrowLeft from "../../assets/icones/arrow_left.png";
import arrowRight from "../../assets/icones/arrow_right.png";
import { useState } from "react";

const Carrousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  // fonction d'affichage précédent et suivant
  const previousImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setIndex((nextIndex) =>
      nextIndex === images.length - 1 ? 0 : nextIndex + 1
    );
  };

  // si les images sont supérieures en nombre à 1, alors les fleches et le compteur s'affichent
  const displayArrowsAndSlideNumber = images.length > 1;


  return (
    <div className="carrousel">
      <div className="image-carrousel">
        <img src={images[index]} alt={`intérieur de l'appartement' ${index}`} />
        </div>
        {displayArrowsAndSlideNumber && (
        <div className="btn-carrousel">
          <div  className="btn-left">
            <button onClick={previousImage} >
              <img src={arrowLeft} alt="flèche précédente" />
            </button>
          </div>
          <div className="btn-right">
            <button onClick={nextImage} >
              <img src={arrowRight} alt="flèche suivante" />
            </button>
            </div>
            {/* compteur du carrousel */}
          <div className="slide-number">{index + 1} / {images.length} </div>
        </div>
      )}
    </div>
  );
};

export default Carrousel;
