import React from "react";
import styles from "./cookies.module.css";
import cursivingText from "../../functions/cursivingText";

export default function Cookies() {
  const width = window.innerWidth
  const text = {
    en: cursivingText(
      "First Class Solutions uses cookies. To&nbsp;level up&nbsp;your site experience. Dive&nbsp;deeper by&nbsp;checking out our /Privacy/&nbsp;&&nbsp;/Cookie&nbsp;Policy/"
    ),
  };

  const button = {
    en: "GOOD GO",
  };

  if (width < 800){button.en = "OK"}

  return (
    <div className={styles.cookies}>
      <div className={styles.container}>
       <p
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text.en }}
      ></p>
      <button className={`${styles.button} button`}>{button.en}</button>
      </div> 
    </div>
  );
}
