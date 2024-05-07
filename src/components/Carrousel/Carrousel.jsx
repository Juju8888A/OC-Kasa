import React from "react";
import arrowLeft from "../../assets/icones/arrow_left.png";
import arrowRight from "../../assets/icones/arrow_right.png";
import { useState } from "react";

const Carrousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const previousImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel">
      <div className="image-carrousel">
        {/* <img src={images[index]} alt={`Image de ${index}`} /> */}
        </div>
      <div className="btn-carrousel">
        <button onClick={previousImage}>
          <img src={arrowLeft} alt={`Image ${index + 1}`} />
        </button>
        <button onClick={nextImage}>
          <img src={arrowRight} alt={`Image ${index + 1}`} />
        </button>
      </div>
      <div className="slide-number">{index + 1} / 2 </div>

    </div>
  );
};

export default Carrousel;
