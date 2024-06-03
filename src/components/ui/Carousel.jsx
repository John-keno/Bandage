// Carousel.js
import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "../../icons/icons";

function Carousel (props) {
  const  {images, }  = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images?.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images?.length) % images?.length
    );
  };

  return (
    <div className="carousel">
      <div className="chevronRight">
        <Button className="btnCarousel" onClick={goToNextSlide}>
          <ChevronRight />
        </Button>
      </div>
      <div className="chevronLeft">
        <Button className="btnCarousel" onClick={goToPrevSlide}>
          <ChevronLeft />
        </Button>
      </div>
      <div>
        <img
          className="carouselDisplayImg"
          src={images[activeIndex]}
          alt="Product Image"
        />
      </div>

      <div className="carouselOptions">
        {images.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="Product Image"
            onClick={() => setActiveIndex(index)}
            style={
              index == activeIndex
                ? { border: "2px solid var(--button-blue)" }
                : { border: "none" }
            }
          />
        ))}
      </div>
    </div>
  );
};

Carousel.proptypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Carousel;
