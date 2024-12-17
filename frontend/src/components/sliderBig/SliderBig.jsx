import React, { useRef, useState } from "react";

import SliderCardBig from "../sliderCardBig/SliderCardBig";
import cursivingText from "../../functions/cursivingText";

import styles from "./sliderBig.module.css";
import "./sliderBig.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function SliderBig({ slides, title, targetLink }) {
  const swiperRef = useRef(null);

  return (
    <section className={styles["slider-container"]}>
      <h2 className={`${styles.title} title`} dangerouslySetInnerHTML={{ __html: cursivingText(title) }}></h2>

      {slides.length > 2 && (
        <div className={`${styles["slider-arrows"]} slider-arrows`}>
          <button className={`${styles["slider-arrow"]} ${styles["slider-arrow-prev"]}`} onClick={() => swiperRef.current.slidePrev()}>
            <svg>
              <use href="../images/icons/arrows.svg#arrow-right"></use>
            </svg>
          </button>
          <button className={`${styles["slider-arrow"]} ${styles["slider-arrow-next"]}`} onClick={() => swiperRef.current.slideNext()}>
            <svg>
              <use href="../images/icons/arrows.svg#arrow-right"></use>
            </svg>
          </button>
        </div>
      )}

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        speed={700}
        loop={true}
        className={`${styles.swiper} slider-big`}
        slidesPerView={1}
        freeMode={false}
        spaceBetween={21}
        modules={[Navigation, FreeMode]}
        breakpoints={{
          834: {
            slidesPerView: "auto",
            freeMode: true,
          },
          1250: {
            slidesPerView: 2,
            freeMode: false,
          },
        }}
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderCardBig
                tags={item.tag}
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
