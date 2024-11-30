import React, { useEffect, useRef, useState } from "react";

import styles from "./sliderMain.module.css";

import cursivingText from "../../functions/cursivingText";
import SliderCardMain from "../sliderCardMain/SliderCardMain";

export default function SliderMain({ slides, title, width }) {
  const sliderRef = useRef(null);

  /* useEffect(() => {
    const scrollContainer = sliderRef.current; // Замените на ваш селектор

    let isScrolling = false;
    let lastScrollTime = 0;
    let scrollSpeed = 0;
    let inertia = 0.95; // Коэффициент инерции (меньше - больше инерция)
    let requestId;

    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault(); // Предотвращаем стандартное поведение прокрутки
      scrollSpeed += e.deltaY; // Увеличиваем скорость прокрутки

      // Начинаем анимацию, если она еще не запущена
      if (!isScrolling) {
        isScrolling = true;
        lastScrollTime = performance.now();
        animateScroll();
      }
    });

    function animateScroll() {
      const currentTime = performance.now();
      const timeDiff = currentTime - lastScrollTime;

      // Прокручиваем контейнер на основе текущей скорости
      scrollContainer.scrollLeft += scrollSpeed * 10;

      // Уменьшаем скорость прокрутки с учетом инерции
      scrollSpeed *= inertia;

      // Если скорость прокрутки достаточно велика, продолжаем анимацию
      if (Math.abs(scrollSpeed) > 0.1) {
        lastScrollTime = currentTime;
        requestId = requestAnimationFrame(animateScroll);
      } else {
        isScrolling = false; // Останавливаем анимацию
        cancelAnimationFrame(requestId);
      }
    }
  }, []);
 */
  return (
    <section className={styles.slider}>
      <h2 className={`${styles["main-title"]} title`} dangerouslySetInnerHTML={{ __html: cursivingText(title) }}></h2>

      <div className={styles.cards} ref={sliderRef}>
        {slides.map((item, index) => {
          return (
            <SliderCardMain
              key={index}
              tags={item.tags}
              tagIcon={item.tagIcon}
              background={item.background}
              title={item.title}
              description={item.description}
              isLinkExist={item.isLinkExist}
              linkText={item.linkText}
              link={item.link}
            />
          );
        })}
      </div>
    </section>
  );
}
