import { useState } from "react";
import "./Silder.css";

export const Silder = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="prev-btn bt" onClick={prevSlide}>
        &#10094;
      </button>
      <div
        className="ano"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: "flex",
        }}
      >
        {data.map((item, idx) => (
          <img src={item.src} alt={item.alt} key={idx} className="slide" />
        ))}
      </div>
      <button className="next-btn bt" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};
