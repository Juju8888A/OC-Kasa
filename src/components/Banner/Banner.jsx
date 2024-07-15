import React from "react";

const Banner = ({title, image}) => {
  return (
    <div className='banner-container'>
        <h1>{title}</h1>
        <img src={image} alt="paysage" />
    </div>
  );
};

export default Banner;