import React, { useEffect, useRef, useState } from "react";
import styles from "./sliderCardBig.module.css";
import addNobr from "../../functions/addNobr";

export default function SliderCardBig({ tags, /* tagIcon, */ title, description, /* linkText, */ link, slug, background }) {
  const card = useRef(null);
  const cardBackground = useRef(null);
  const tagArray = tags && [tags];
  /* const [isDetailsShowed, setIsDetailsShowed] = useState(false); */
  const button = link || slug || null;

  let cardOnHover = false;

  useEffect(() => {
    if (!cardBackground || !card) return;

    let startX;
    let startY;

    const handleMouseEnter = (e) => {
      setTimeout(() => {
        if (!cardOnHover) {
          startX = e.clientX;
          startY = e.clientY;
        }
        cardOnHover = true;
      }, 300);

      setTimeout(() => {
        card.current.addEventListener("mousemove", handleMouseMove);
      }, 0);

      setTimeout(() => {
        card.current.addEventListener("mousemove", handleMouseMove);
        card.current.classList.add(styles["card-hovered"]);
      }, 400);
    };

    const handleMouseMove = (e) => {
      if (!startX || !startY) return;
      let newX = (e.clientX - startX) / -20;
      let newY = (e.clientY - startY) / -50;
      cardBackground.current.style.transform = "translate(" + newX + "px, " + newY + "px)";
    };

    const handleMouseLeave = () => {
      cardBackground.current.style.transform = "translate(0px, 0px)";
      card.current.classList.remove(styles["card-hovered"]);
      setTimeout(() => {
        cardOnHover = false;
      }, 300);
    };

    card.current.addEventListener("mouseenter", handleMouseEnter);
    card.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (card && card.current) {
        card.current.removeEventListener("mouseenter", handleMouseEnter);
        card.current.removeEventListener("mousemove", handleMouseMove);
        card.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  function showDetails() {
    /* setIsDetailsShowed((prev) => !prev); */
  }

  return (
    <div className={`${styles.card} ${!link && styles["without-button"]}`} ref={card}>
      <div className={styles.container}>
        <div className={styles.background}>
          <img className={styles["background-image"]} src={background} ref={cardBackground} alt="" />
        </div>
        <div className={styles.header}>
          <div className={styles.tags}>
            {/*  <button
              className={`${styles.tag} ${styles["tag-info"]} button`}
              onClick={showDetails}
            >
              +
            </button> */}

            {tagArray &&
              tagArray.map((tag, index) => (
                <div key={index} className={`${styles.tag} button`}>
                  {tag}
                </div>
              ))}
            {/* {tagIcon && <div className={`${styles.icon} button`}>
						<img src={tagIcon} alt="" />
					</div>} */}
          </div>
        </div>
        <div className={styles.footer}>
          <h3 className={styles.title}>{title}</h3>
          <p className={`${styles.description}`} dangerouslySetInnerHTML={description ? { __html: addNobr(description) } : undefined}></p>
          {button && (
            <a className={`${styles.button}  button`} href={button}>
              {"Explore"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
