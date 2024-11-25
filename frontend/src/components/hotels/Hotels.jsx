import React, { useEffect, useState } from "react";
import styles from "./hotels.module.css";

import SliderSmall from "../sliderSmall/SliderSmall";
import Searchbar from "../searchbar/Searchbar";
import cursivingText from "../../functions/cursivingText";
import splitArray from "../../functions/splitArray";

export default function Hotels({ title, data }) {
  const [slidersQuantity, setSlidersQuantity] = useState(2);
  //const [sliders, setSliders] = useState([])
  const [slides, setSlides] = useState(data);

  function onSearchHandler(query) {
    findObjectsContainingString(data, query);
  }

  function findObjectsContainingString(arr, str) {
    const result = arr.filter((obj) => containsString(obj, str.toLowerCase()));

    setSlides(result);
  }

  function containsString(obj, str) {
    // Проход по всем свойствам объекта
    for (const key in obj) {
      // Если свойство - объект, то рекурсивно проверяем его
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (containsString(obj[key], str)) {
          return true;
        }
      }
      // Проверяем, является ли свойство строкой и содержит ли ее искомую строку, игнорируя регистр
      if (
        typeof obj[key] === "string" &&
        obj[key].toLowerCase().includes(str)
      ) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    if (slides.length === 0) setSlidersQuantity(0);
    else if (slides.length >= 8) setSlidersQuantity(2);
    else if (slides.length < 8) setSlidersQuantity(1);
  }, [slides]);

  const renderSliders = () => {
    /* console.log(slidersQuantity) */
    if (slidersQuantity === 0) {
      return (
        <div className={`${styles.empty}`}>
          <p
            className="title"
            dangerouslySetInnerHTML={{
              __html: cursivingText("No hotels /found/"),
            }}
          ></p>
        </div>
      );
    }

    if (slidersQuantity === 1 && slides.length > 0) {
      return <SliderSmall slides={slides} targetLink="/hotel" />;
    }

    if (slidersQuantity === 2) {
      return splitArray(slides).map((slider) => (
        <SliderSmall
          key={slider[0]?.id || Math.random()}
          slides={slider}
          targetLink="/hotel"
        />
      ));
    }

    return null; // Для случаев, когда не соответствует ни одно условие
  };

  return (
    <section className={styles.hotels}>
      {title && (
        <h2
          className={`${styles.title} title`}
          dangerouslySetInnerHTML={{ __html: cursivingText(title) }}
        ></h2>
      )}
      <Searchbar
        title=""
        isInputExist={true}
        tags={["Family", "Business"]}
        onSearch={onSearchHandler}
      ></Searchbar>
      {renderSliders()}
    </section>
  );
}
