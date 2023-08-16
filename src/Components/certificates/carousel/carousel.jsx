import React from "react";
import CarouselItem from "./carouselItem.jsx";
import CarouselIndicators from "./carouselIndicators.jsx";
import styles from "./carousel.module.css";
import { useState, useEffect, useRef } from "react";

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
  };
  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem
            className={styles.carouselItem}
            slide={slide}
            key={index}
            stopSlide={stopSlideTimer}
            startSlide={startSlideTimer}
          />
        ))}
      </div>
      <CarouselIndicators
        slides={slides}
        currentIndex={currentSlide}
        switchIndex={switchIndex}
      />
    </div>
  );
}
