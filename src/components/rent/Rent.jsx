import React, { useState, useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styles from "./rent.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderStringsCard from "../sliderStrings/SliderStringsCard";

import "../sliderStrings/sliderString.css";

export default function Rent({ slides, mb }) {
  const current = useLocation().pathname;
  if (current === "/rent");

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);

  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  let sliderRef3 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
    setNav3(sliderRef3);
  }, []);

  const settingsSlides = {
    className: `${styles.slider} rent-slider`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
  };

  const settingsBackground = {
    className: `${styles["slider-background"]}`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: false,
    fade: true,
    arrows: false,
    mousewheel: true,
  };

  return (
    <section className={`${styles.countries}`} style={{ marginBottom: mb }}>
      <div className={styles.container}>
        <Slider slides={slides} asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)} {...settingsSlides}>
          {slides &&
            slides.map((slide, index) => {
              return <SliderStringsCard key={index} slide={slide} />;
            })}
        </Slider>

        <Slider slides={slides} asNavFor={nav1} ref={(slider) => (sliderRef2 = slider)} {...settingsBackground}>
          {slides &&
            slides.map((slide, index) => {
              return (
                <div key={index} className={styles.background}>
                  <img key={index} src={slide.image} />
                  <p className={styles.description}>{slide.description}</p>
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
}
