import React from "react";
import styles from "./carouselItem.module.css";

interface CarouselItemProps {
  slide: string; // Cambia el tipo si el slide no es una imagen
  stopSlide: () => void;
  startSlide: () => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ slide, stopSlide, startSlide }) => {
  return (
    <div
      className={styles.carouselItem}
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <div className={styles.imgDiv}>
        <img className={styles.image} src={slide} alt="Slide" />
      </div>
    </div>
  );
};

export default CarouselItem;

