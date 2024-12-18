import React from "react";
import styles from "./sliderStrings.module.css";
import { Link, useLocation } from "react-router-dom";

export default function SliderStringsCard({ slide, target }) {
  const current = useLocation().pathname;

  return (
    <>
      {current === "/services" ? (
        <h2 className={`${styles.slide} cursive`}>{slide.translations.en.name}</h2>
      ) : (
        <Link className={`${styles.slide} cursive`} to={`/${target}/${slide.slug}`}>
          {slide.translations ? slide.translations.en.name : slide.name}
        </Link>
      )}
    </>
  );
}
