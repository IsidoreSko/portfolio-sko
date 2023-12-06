import "./carousel.css";

import React from "react";
import { useState } from "react";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
import ArrowForward from "@mui/icons-material/ArrowForwardIos";

function Carousel({ slides, slidesId }) {
  const [slideVu, setSlideVu] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    const newIndex = slideVu === length - 1 ? 0 : slideVu + 1;
    setSlideVu(newIndex);
  };

  const previousSlide = () => {
    const newIndex = slideVu === 0 ? length - 1 : slideVu - 1;
    setSlideVu(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <img
            className="img-carousel"
            key={index}
            src={slide}
            alt={`${slidesId}-${index}`}
            style={{
              display: index === slideVu ? "block" : "none",
            }}
          />
        ))}
        {length > 1 && (
          <div>
            <ArrowBack className="arrow-left" onClick={previousSlide} />
            <ArrowForward className="arrow-right" onClick={nextSlide} />
            <div className="counter">
              {slideVu + 1}/{length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
