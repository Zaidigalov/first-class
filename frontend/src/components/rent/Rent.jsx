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
  const target = useLocation().hash.split("#")[1];

  function getTargetSlide(target) {
    const targetSlide = slides.find((slide) => slide.search.toLowerCase() == target);
    const targetSlideIndex = slides.indexOf(targetSlide);
    const newSlides = slides;
    newSlides.splice(targetSlideIndex, 1);
    newSlides.unshift(targetSlide);
  }

  if (target) getTargetSlide(target);

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
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    touchThreshold: 10,
  };

  const settingsBackground = {
    className: `${styles["slider-background"]}`,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: false,
    fade: true,
    arrows: false,
    mousewheel: true,
    touchThreshold: 10,
    dots: true,
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
