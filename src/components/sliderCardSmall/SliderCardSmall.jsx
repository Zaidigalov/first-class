import React from "react";
import styles from "./sliderCardSmall.module.css";
import { Link } from "react-router-dom";

export default function SliderCardSmall({ title, link, image }) {
  /* console.log(link); */
  return (
    <div className={`${styles.card} slider-small__card`}>
      <div className={styles.container}>
        <div className={styles.background}>
          <img src={image || "../images/plugs/hotel.jpg"} alt="" />
        </div>

        <h3 className={styles.title}>{title}</h3>
        <Link className={`${styles.button}`} to={link}>
          <svg>
            <use href="../images/icons/arrows.svg#arrow-right"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
}
