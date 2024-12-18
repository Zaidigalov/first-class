import React, { useState, useRef, useEffect } from "react";
import styles from "./cities.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderStringsCard from "../sliderStrings/SliderStringsCard";

import "../sliderStrings/sliderString.css";
import { Link } from "react-router-dom";

export default function Cities({ slides, target }) {
  const settingsSlides = {
    className: `${styles.slider} cities-slider`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    touchThreshold: 100,
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
    touchThreshold: 100,
    /* autoplay: true,
		autoplaySpeed: 5000, */
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <section className={styles.countries}>
      <div className={styles.container}>
        {slides.length > 1 ? (
          <>
            <Slider slides={slides} asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)} {...settingsSlides}>
              {slides.map((slide, index) => {
                return <SliderStringsCard key={index} slide={slide} target={target}></SliderStringsCard>;
              })}
            </Slider>

            <Slider slides={slides} asNavFor={nav1} ref={(slider) => (sliderRef2 = slider)} {...settingsBackground}>
              {slides.map((slide, index) => {
                return (
                  <div key={index} className={styles.background}>
                    <img src={slide.image} />
                  </div>
                );
              })}
            </Slider>
          </>
        ) : (
          <>
            <div className={styles["background-single"]}>
              <img src={slides[0].image} />
            </div>
            <Link className={`${styles.name} cursive`} to={`/city/${slides[0].slug}`}>
              {slides[0].translations.en.name}
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
