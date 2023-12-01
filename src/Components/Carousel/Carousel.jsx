import React from "react";
import { useState } from "react";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
import ArrowForward from "@mui/icons-material/ArrowForwardIos";
// import { autocompleteClasses } from "@mui/material";

function Carousel({ slides, slidesId }) {
  const [slideVu, setSlideVu] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    const newIndex = slideVu === length - 1 ? 0 : slideVu + 1;
    console.log("New Index (Next):", newIndex);
    setSlideVu(newIndex);
  };

  const previousSlide = () => {
    const newIndex = slideVu === 0 ? length - 1 : slideVu - 1;
    console.log("New Index (Previous):", newIndex);
    setSlideVu(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <img
            key={index.id}
            src={slide}
            alt={`${slidesId}-${index}`}
            style={{
              width: "90%",
              height: "18rem",
              margin: "auto",
              display: index === slideVu ? "block" : "none",
            }}
          />
        ))}
        {length > 1 && (
          <div>
            <ArrowBack
              className="arrowLeft"
              onClick={previousSlide}
              style={{
                position: "absolute",
                left: "1.2rem",
                bottom: "19rem",
                color: "var(--fourth-color)",
                fontSize: "3rem",
              }}
            />
            <ArrowForward
              className="arrowRight"
              onClick={nextSlide}
              style={{
                position: "absolute",
                right: "1.2rem",
                bottom: "19rem",
                color: "var(--fourth-color)",
                fontSize: "3rem",
              }}
            />
            <div
              className="counter"
              style={{
                textAlign: "center",
                color: "var(--fourth-color)",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              {slideVu + 1}/{length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
