import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import cursivingText from "../../functions/cursivingText";

import "./menu.css";

import { servises, types } from "../../MOCK/slides";

export default function Menu({ closeOverlay, width }) {
  const [slides, setSlides] = useState(servises);

  useEffect(() => {
    console.log(slides);
  });

  function switchSlides(newSlides) {}

  return (
    <section className={styles.menu}>
      <header className={`${styles["menu-header"]}`}>
        <div className={styles["header-container"]}>
          <div className={styles["logo-container"]}>
            <Link to="/" className={styles.logo}>
              <img src="../images/icons/logo.svg"></img>
            </Link>
          </div>
          <div className={`${styles["menu-buttons"]}`}>
            {width <= 1150 && (
              <Link to="/">
                <div className={`${styles["menu-button"]}`}>
                  <img src="../images/icons/Airplane.svg" alt="" />
                </div>
              </Link>
            )}
            <button className={`${styles["menu-button"]}`}>Eng</button>
            <button className={`${styles["menu-button"]}`}>
              <img src="../images/icons/change-theme.svg"></img>
            </button>
            <button
              className={`${styles["menu-button"]} ${styles["button-close"]}`}
              onClick={closeOverlay}
            >
              <img src="../images/icons/burger-close.svg" alt="" />
            </button>
          </div>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles["slider-container"]}>
          <Swiper
            speed={1000}
            loop={true}
            spaceBetween={230}
            centeredSlides={true}
            slidesPerView={"auto"}
            direction="vertical"
            mousewheel={true}
            parallax={true}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 50,
              modifier: 5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Mousewheel, Parallax]}
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles["slide-container"]}>
                    <div
                      data-swiper-parallax="-200"
                      className={styles["title-container"]}
                    >
                      <h2
                        className={styles.title}
                        dangerouslySetInnerHTML={{
                          __html: cursivingText(slide.title),
                        }}
                      ></h2>
                    </div>
                    <img className={styles.image} src={slide.image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <nav className={styles.navigation}>
        <div className={styles["navigation-container"]}>
          <Link to="../" className={`${styles["nav-item"]}`}>
            About
          </Link>
          <Link to="../" className={`${styles["nav-item"]}`}>
            Destinations
          </Link>
          <button
            className={`${styles["nav-item"]}`}
            onClick={() => switchSlides(servises)}
          >
            Services
          </button>
          <button
            className={`${styles["nav-item"]}`}
            onClick={() => switchSlides(types)}
          >
            Adventures
          </button>
          <Link to="../" className={`${styles["nav-item"]}`}>
            VIP in Airports
          </Link>
          <button className={`${styles["nav-item"]}`}>Send request</button>
        </div>
      </nav>
    </section>
  );
}