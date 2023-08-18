import React from "react";
import "./carouselIndicators.css";

interface CarouselIndicatorsProps {
  slides: string[]; // Change the type if slides are not strings
  currentIndex: number;
  switchIndex: (index: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  slides,
  currentIndex,
  switchIndex,
}) => {
  return (
    <div className="carouselIndicators">
      {slides.map((_, index) => (
        <button
          onClick={() => switchIndex(index)}
          className={`carouselIndicatorItem${
            currentIndex === index ? " active" : ""
          }`}
          key={index} // Add a unique key for each button in the loop
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicators;
