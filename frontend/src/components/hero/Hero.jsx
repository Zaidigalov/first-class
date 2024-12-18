import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "../../common.css"
import styles from "./hero.module.css";
import cursivingText from "../../functions/cursivingText";
import addNobr from "../../functions/addNobr";

export default function Section_1Welcome({ image, location, isButtonExist, full, link }) {
  let title;
  let display;

  if (full) {
    display = styles.full;
    title = addNobr(location);
  } else {
    title = cursivingText(`/${addNobr(location)}/`);
  }
  return (
    <section className={`${styles.hero} ${display}`}>
      <div className={styles.container}>
        <img className={styles.image} src={image} alt=""></img>
        {!full ? (
          <h1 className={`${styles.title}`} dangerouslySetInnerHTML={{ __html: cursivingText(title) }}></h1>
        ) : (
          <h1 className={`${styles.title}`} dangerouslySetInnerHTML={{ __html: "Visit " + cursivingText(`/${title}/`) + " with First&nbsp;class" }}></h1>
        )}

        {isButtonExist && (
          <Link to={link} className={`${styles.button} button`}>
            Explore
          </Link>
        )}
      </div>
    </section>
  );
}
