import React from "react";
import "./carouselIndicators.css";

export default function CarouselIndicators({
  slides,
  currentIndex,
  switchIndex,
}) {
  return (
    <div className="carouselIndicators">
      {slides.map((_, index) => (
        <button
          onClick={() => switchIndex(index)}
          className={`carouselIndicatorItem${
            currentIndex === index ? " active" : ""
          }`}
        ></button>
      ))}
    </div>
  );
}
