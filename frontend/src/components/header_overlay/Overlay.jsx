import React, { useState } from "react";
import styles from "../header/header.module.css";

export default function Overlay({ content, overlayClass }) {
  const overlayClasses = {
    first: "",
    showed: styles["overlay-showed"],
    hidden: styles["overlay-hidden"],
  };

  return (
    <div
      className={`${styles.overlay} ${overlayClasses[overlayClass]} ${
        (content && content.type.name) === "Form" ||
        (content && content.type.name) === "Contact"
          ? `${styles["overlay-down"]}`
          : null
      } `}
    >
      {content}
    </div>
  );
}
