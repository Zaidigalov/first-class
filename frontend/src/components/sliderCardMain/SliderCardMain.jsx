import React, { useEffect, useRef } from "react";
import styles from "../sliderMain/sliderMain.module.css";

export default function SliderCardMain({ tags, tagIcon, title, description, isLinkExist, linkText, link, background }) {
  /* 	const cardStyles={
			isLinkExist: 
		} */

  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current.addEventListener("mouseover", () => {
      cardRef.current.classList.add(`${styles["card-active"]}`);
      /* cardRef.current.scrollIntoView({ behavior: "smooth" }); */
      setTimeout(() => scrollHorizontally(cardRef.current), 700);
    });

    cardRef.current.addEventListener("mouseleave", () => {
      cardRef.current.classList.remove(`${styles["card-active"]}`);
    });
  }, []);

  function scrollHorizontally(element) {
    const container = element.parentElement; // Предполагаем, что элемент находится в контейнере
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Вычисляем, нужно ли прокручивать
    const offsetLeft = elementRect.left - containerRect.left;
    const offsetRight = elementRect.right - containerRect.right;

    if (offsetLeft < 1000) {
      // Элемент находится слева от видимой области

      container.scrollLeft += offsetLeft / 2; // Прокручиваем влево
    } else if (offsetRight > 1000) {
      // Элемент находится справа от видимой области
      container.scrollLeft += offsetRight / 2; // Прокручиваем вправо
    }
  }

  return (
    <div className={`${styles.card} ${!isLinkExist && styles["without-button"]} `} ref={cardRef}>
      <h3 className={`${styles.title} ${styles["title-vertical"]}`}>{title}</h3>
      <div className={styles.background}>
        <img src={background} alt="" />
      </div>
      <div className={styles.header}>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <div key={index} className={`${styles.tag} button`}>
              {tag}
            </div>
          ))}
          {tagIcon && (
            <div className={`${styles.icon} button`}>
              <img src={tagIcon} alt="" />
            </div>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {isLinkExist && (
          <a className={`${styles.button} button`} href={link}>
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
}
