import React from "react";
import styles from "./map.module.css";
import cursivingText from "../../functions/cursivingText";

export default function Map({ image, title, map }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={image} alt="" />
          <h1 className={`${styles.title}`} dangerouslySetInnerHTML={{ __html: cursivingText(`${title}`) }}></h1>
        </div>
        <div className={styles.map}>
          <iframe src={map} width="100%" height="100%" style={{ border: "none" }}></iframe>
        </div>
      </div>
    </section>
  );
}
