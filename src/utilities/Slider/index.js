import React, { useState } from "react";
import "./styles.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ data }) => {
  const [style, setStyle] = useState({
    backgroundPosition: "0% 0%",
    position: "absolute",
    height: "500px",
    width: "500px",
    zIndex: 11,
    left: "40%",
    top: "15%",
  });

  const handleMouseMove = (image, event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    console.log({ backgroundPosition: `${x}% ${y}%` });
    setStyle({
      ...style,
      backgroundPosition: `${x}% ${y}%`,
      display: "block",
      backgroundImage: `url(${image})`,
    });
  };

  const handleMouveOut = (e) => {
    setStyle({ ...style, display: "none" });
  };
  return (
    <section onmouseout={handleMouveOut}>
      <div style={style}></div>
      <div className="carousel-wrapper">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showArrows
          showIndicators={false}
        >
          {data?.length &&
            data.map((e,i) => {
              return (
                <div
                  onMouseMove={(event) => handleMouseMove(e.src, event)}
                  key={i}
                >
                  <img src={e.src} />
                </div>
              );
            })}
        </Carousel>
      </div>
    </section>
  );
};
export default Slider;
