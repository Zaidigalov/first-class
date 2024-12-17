import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import styles from "./sliderSmall.module.css";
import SliderCardSmall from "../sliderCardSmall/SliderCardSmall";

export default function SliderSmall({ slides, targetLink }) {
  const settings = {
    className: `${styles.slider} slider-small`,
    variableWidth: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 100,
    adaptiveHeight: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={`${styles["slick-arrow"]} ${styles["slick-next"]}`} onClick={onClick}>
        <svg>
          <use href="../images/icons/arrows.svg#arrow-right"></use>
        </svg>
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={`${styles["slick-arrow"]} ${styles["slick-prev"]}`} onClick={onClick}>
        <svg>
          <use href="../images/icons/arrows.svg#arrow-right"></use>
        </svg>
      </button>
    );
  }

  const renderSliders = () => {
    if (slides.length > 3) {
      return (
        <Slider {...settings}>
          {slides.map((item, index) => {
            return <SliderCardSmall key={index} image={item.image} title={item.translations.en.name} link={`${targetLink}/${item.slug}`} />;
          })}
        </Slider>
      );
    } else {
      return (
        <div className={styles.cards}>
          {slides.map((item, index) => {
            return <SliderCardSmall key={index} image={item.image} title={item.translations.en.name} link={`${targetLink}/${item.slug}`} />;
          })}
        </div>
      );
    }

    return null; // Для случаев, когда не соответствует ни одно условие
  };

  return <section className={styles["slider-container"]}>{renderSliders()}</section>;
}
