import React, { useRef, useState } from "react";

import SliderCardBig from "../sliderCardBig/SliderCardBig";
import cursivingText from "../../functions/cursivingText";

import styles from "./sliderBig.module.css";
import "./sliderBig.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function SliderBig({ slides, title, targetLink }) {
  const [moving, setMoving] = useState(false);
  const swiperRef = useRef(null);
  console.log(swiperRef);
  const handleNext = () => {
    swiperRef.current.swiper.slideNext(); // Метод для перехода к следующему слайду
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev(); // Метод для перехода к предыдущему слайду
  };

  /* const settings = {
    className: "slider",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 0,
    touchThreshold: 25,
    dots: false,
    beforeChange: () => {
      setMoving(true);
      setTimeout(() => setMoving(false), 10);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          variableWidth: true,
          arrows: false,
        },
      },
      {
        breakpoint: 834,
        settings: {
          variableWidth: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }; */

  /*   function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${styles["slick-arrow"]} ${styles["slick-next"]}`} onClick={onClick}>
        <svg>
          <use href="../images/icons/arrows.svg#arrow-right"></use>
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${styles["slick-arrow"]} ${styles["slick-prev"]}`} onClick={onClick}>
        <svg>
          <use href="../images/icons/arrows.svg#arrow-right"></use>
        </svg>
      </div>
    );
  } */

  function hideDetails() {}

  return (
    <section className={styles["slider-container"]}>
      <h2 className={`${styles.title} title`} dangerouslySetInnerHTML={{ __html: cursivingText(title) }}></h2>
      <div className={styles["slider-arrows"]}>
        <button className={`${styles["slider-arrow"]} ${styles["slider-arrow-prev"]} slider-arrow-prev`}></button>
        <button className={`${styles["slider-arrow"]} ${styles["slider-arrow-next"]} slider-arrow-next`}></button>
      </div>

      <Swiper
        onInit={(swiper) => {
          swiperRef.current = swiper; // Сохраняем ссылку на Swiper
        }}
        speed={1000}
        loop={true}
        className={`${styles.swiper} slider-big`}
        slidesPerView={2}
        spaceBetween={21}
        navigation={{
          nextEl: ".slider-arrow-prev",
          prevEl: ".slider-arrow-next",
        }}
        modules={[Navigation]}
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderCardBig
                tags={item.tag}
                moving={moving}
                /* tagIcon={item.tagIcon} */
                background={item.image_picture || item.image}
                title={item.translations.en.name || item.translations.en.title}
                description={item.translations.en.description}
                /* linkText={item.link} */

                //link={`${targetLink}${item.slug}` || `${targetLink}${item.link}`}

                link={item.link ? `${targetLink}${item.link}` : null}
                slug={item.slug ? `${targetLink}${item.slug}` : null}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
