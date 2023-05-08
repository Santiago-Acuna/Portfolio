import React from 'react';
import styles from "./carouselItem.module.css";

export default function CarouselItem({ slide, stopSlide, startSlide }) {
  return (
    <div className={styles.carouselItem} onMouseEnter={stopSlide} onMouseOut={startSlide}>
      <div className={styles.imgDiv}>
      <img className={styles.image} src={slide} />
      </div>
    </div> 
  )
}